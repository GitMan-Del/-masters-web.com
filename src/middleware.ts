import { auth } from "@/lib/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth
  
  console.log('🔐 Middleware - Path:', nextUrl.pathname)
  console.log('🔐 Middleware - Is logged in:', isLoggedIn)

  // Rutele care necesită autentificare
  const protectedRoutes = [
    '/dashboard',
    '/projects',
    '/api/projects',
    '/api/lighthouse',
    '/api/payments'
  ]

  // Verifică dacă ruta curentă este protejată
  const isProtectedRoute = protectedRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  )

  // Dacă ruta este protejată și user-ul nu este autentificat
  if (isProtectedRoute && !isLoggedIn) {
    console.log('❌ Access denied - Redirecting to login')
    
    // Pentru API routes, returnează 401
    if (nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
    
    // Pentru pagini, redirectează la homepage cu mesaj
    const redirectUrl = new URL('/', nextUrl.origin)
    redirectUrl.searchParams.set('error', 'auth_required')
    return NextResponse.redirect(redirectUrl)
  }

  console.log('✅ Access granted')
  return NextResponse.next()
})

// Configurația pentru care rute să ruleze middleware-ul
export const config = {
  matcher: [
    // Protejează toate rutele dashboard și API
    '/dashboard/:path*',
    '/projects/:path*',
    '/api/projects/:path*',
    '/api/lighthouse/:path*',
    '/api/lighthouse-test/:path*'
  ]
} 
 