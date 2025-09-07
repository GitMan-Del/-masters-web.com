import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { supabaseAdmin } from "./supabase"

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    })
  ],
  pages: {
    signIn: '/',
    error: '/',
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Returned value indicates whether the user is authenticated
      return !!auth
    },
    async redirect({ url, baseUrl }) {      
      // If it's a relative path, allow it
      if (url.startsWith("/")) {
        return `${baseUrl}${url}`
      }
      
      // If it's the same origin, allow it
      if (new URL(url).origin === baseUrl) {
       
        return url
      }
      
      // Handle allowed hosts for external URLs
      const allowedHosts = ['masters-web.com', 'www.masters-web.com', 'localhost:3000', 'localhost']
      try {
        const host = new URL(url).hostname
        if (allowedHosts.includes(host)) {
          return url
        }
      } catch (error) {
      }
      
      // Default fallback to dashboard for successful logins
      return `${baseUrl}/dashboard`
    },
    async signIn({ user }) {
      
      try {
        const { error } = await supabaseAdmin
          .from('users')
          .upsert([
            {
              id: user.email,
              email: user.email,
              name: user.name,
              image: user.image,
            },
          ]);
        if (error) console.error('❌ Supabase insert error:', error);
        return true;
      } catch (error) {
        console.error('❌ SignIn error:', error);
        return true; // Still allow sign in even if database insert fails
      }
    },
    async session({ session }) {
      // Pass any additional data to the session if needed
      return session
    },

  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour in seconds (60 minutes * 60 seconds)
    updateAge: 60 * 5, // Update session every 5 minutes
  },
  jwt: {
    maxAge: 60 * 60, // JWT expires in 1 hour
  },
  debug: process.env.NODE_ENV === 'development',
})