import { NextRequest } from 'next/server';
import { NextResponse as res } from 'next/server';

import { pusherServer } from '@/lib/pusher';

export async function POST(req: NextRequest) {
  const { user_id, new_balance } = await req.json();

  pusherServer.trigger(`${user_id}`, 'new-balance', new_balance);

  return res.json({}, { status: 200 });
}
