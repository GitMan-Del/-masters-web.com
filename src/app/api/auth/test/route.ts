import { NextResponse } from 'next/server'

export async function GET() {
  const envVars = {
    AUTH_GOOGLE_ID: !!process.env.AUTH_GOOGLE_ID,
    AUTH_GOOGLE_SECRET: !!process.env.AUTH_GOOGLE_SECRET,
    AUTH_SECRET: !!process.env.AUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NODE_ENV: process.env.NODE_ENV,
  }

  return NextResponse.json({
    message: 'Auth configuration test',
    environment: envVars,
    timestamp: new Date().toISOString(),
  })
} 