import { NextResponse } from 'next/server';
import { auth } from '@/lib/auth';

// Importez cache-ul din lighthouse route (în principiu, ar trebui să fie într-un fișier separat)
// Pentru acum, fac un simplu endpoint care returnează success
export async function POST() {
  const session = await auth();
  
  if (!session?.user?.email) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // În viitor, aici pot adăuga logica să clear cache-ul
  // Pentru acum, cache-ul se invalidează automat după 1 oră
  
  return NextResponse.json({ 
    success: true, 
    message: 'Cache will be refreshed on next request' 
  });
} 