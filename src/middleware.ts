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

  // Rute publice (excluse din autentificare)
  const publicRoutes = [
    '/api/payments/webhook'
  ]

  // Verifică dacă ruta este publică
  const isPublicRoute = publicRoutes.some(route => 
    nextUrl.pathname.startsWith(route)
  )

  // Dacă ruta este publică, permite accesul
  if (isPublicRoute) {
    console.log('🌐 Public route - allowing access:', nextUrl.pathname)
    return NextResponse.next()
  }

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
    // Protejează toate rutele dashboard și API (exclus webhook-uri publice)
    '/dashboard/:path*',
    '/projects/:path*',
    '/api/projects/:path*',
    '/api/lighthouse/:path*',
    '/api/payments'  // Protejează doar /api/payments, nu și /api/payments/webhook
  ]
} 
 