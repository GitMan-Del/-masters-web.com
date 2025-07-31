import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { supabaseAdmin } from "./supabase"

// Debug logging for environment variables
console.log('🔐 Auth Config Debug:')
console.log('AUTH_GOOGLE_ID exists:', !!process.env.AUTH_GOOGLE_ID)
console.log('AUTH_GOOGLE_SECRET exists:', !!process.env.AUTH_GOOGLE_SECRET)
console.log('AUTH_SECRET exists:', !!process.env.AUTH_SECRET)
console.log('NEXTAUTH_URL:', process.env.NEXTAUTH_URL)

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
      console.log('🔄 Redirect callback:', { url, baseUrl })
      
      // If it's a relative path, allow it
      if (url.startsWith("/")) {
        console.log('✅ Relative URL, redirecting to:', `${baseUrl}${url}`)
        return `${baseUrl}${url}`
      }
      
      // If it's the same origin, allow it
      if (new URL(url).origin === baseUrl) {
        console.log('✅ Same origin, allowing:', url)
        return url
      }
      
      // Handle allowed hosts for external URLs
      const allowedHosts = ['masters-web.com', 'www.masters-web.com', 'localhost:3000', 'localhost']
      try {
        const host = new URL(url).hostname
        if (allowedHosts.includes(host)) {
          console.log('✅ Allowed host, allowing:', url)
          return url
        }
      } catch (error) {
        console.log('⚠️ Invalid URL, using fallback')
      }
      
      // Default fallback to dashboard for successful logins
      console.log('🔄 Default fallback to dashboard')
      return `${baseUrl}/dashboard`
    },
    async signIn({ user, account, profile }) {
      console.log('🔑 SignIn callback:', { user, account: account?.provider, profile })
      
      try {
        const { data, error } = await supabaseAdmin
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
        console.log('✅ User upserted successfully:', { data, error });
        return true;
      } catch (error) {
        console.error('❌ SignIn error:', error);
        return true; // Still allow sign in even if database insert fails
      }
    },
    async session({ session, token }) {
        console.log('📋 Session callback:', { session: !!session, token: !!token })
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