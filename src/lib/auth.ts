import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { supabase } from "./supabase"

export const { handlers, signIn, signOut, auth } = NextAuth({
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
      // If no specific URL is provided, redirect to dashboard after login
      if (url === baseUrl) return `${baseUrl}/dashboard`
      
      // If it's a relative path, allow it
      if (url.startsWith("/")) return `${baseUrl}${url}`
      
      // If it's the same origin, allow it
      if (new URL(url).origin === baseUrl) return url
      
      // Default fallback to dashboard for successful logins
      return `${baseUrl}/dashboard`
    },
    async signIn({ user }) {
      console.log(user)
      const { data, error } = await supabase
        .from('users')
        .upsert([
          {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          },
        ]);
      if (error) console.error('Supabase insert error:', error);
      console.log(data, error)
      return true;
    },
    async session({ session, token }) {
        console.log(session, token)
      // Pass any additional data to the session if needed
      return session
    },

    

  },
  session: {
    strategy: "jwt",
  },
})