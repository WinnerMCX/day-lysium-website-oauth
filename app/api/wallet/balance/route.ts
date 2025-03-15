import { NextRequest, NextResponse } from 'next/server';

import { stackServerApp } from '@/stack';

import * as db from '@/db/methods.mjs';

export async function GET(req: NextRequest) {
  const user = await stackServerApp.getUser();

  if (!user) return NextResponse.json({ user_id: null, balance: null });

  const balance = await db.Wallet.balance(user.id);

  return NextResponse.json({ user_id: user.id, balance });
}
