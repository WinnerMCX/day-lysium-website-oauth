// export { auth as middleware } from '@/auth';

//DOES NOT WORK YET. REQUEIRS TESTING. I WANTED TO AUTOMAYICALLY SET authjs.session-token COOKIE FOR ALL API ENDPOINTS
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // console.log('api endpoint!');
  return;
}

// export const config = {
//   matcher: [
//     {
//       source: '/api/:path*',
//       missing: [{ type: 'cookie', key: 'authjs.session-token' }],
//     },
//   ],
// };
