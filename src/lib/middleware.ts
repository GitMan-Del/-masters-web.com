import { auth } from "@/lib/auth"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  // Skip middleware for NextAuth routes
  if (nextUrl.pathname.startsWith('/api/auth')) {
    return
  }

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
    // Match all paths except static files, but include auth routes
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ]
}