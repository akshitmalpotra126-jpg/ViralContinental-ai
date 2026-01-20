import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect dashboard routes
  if (req.nextUrl.pathname.startsWith('/dashboard') && !session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  // Protect generate routes
  if (req.nextUrl.pathname.startsWith('/generate') && !session) {
    return NextResponse.redirect(new URL('/login', req.url))
  }

  return res
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/generate/:path*',
  ],
}
// Temporary dummy middleware for build
export async function middleware(req: any) {
  const res = { next: () => ({}) } // dummy response object
  // Simulate no session
  const session = null

  // Protect dashboard routes
  if (req.nextUrl?.pathname?.startsWith('/dashboard') && !session) {
    return { redirect: '/login' }
  }

  // Protect generate routes
  if (req.nextUrl?.pathname?.startsWith('/generate') && !session) {
    return { redirect: '/login' }
  }

  return res.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/generate/:path*',
  ],
}
