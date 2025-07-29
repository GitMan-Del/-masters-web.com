import { auth } from "@/auth"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Only protect dashboard routes
  const isProtectedRoute = nextUrl.pathname.startsWith('/dashboard')

  // If trying to access protected route without being logged in, redirect to home
  if (isProtectedRoute && !isLoggedIn) {
    return Response.redirect(new URL('/', nextUrl.origin))
  }

  // Allow all other routes to proceed normally
})

export const config = {
  matcher: [
    // Only match dashboard routes to avoid conflicts with NextAuth
    '/dashboard/:path*'
  ]
}