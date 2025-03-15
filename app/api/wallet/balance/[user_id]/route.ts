import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import * as db from '@/db/methods.mjs';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ user_id: string }> }
) {
  const { user_id } = await params;

  const balance = await db.Wallet.balance(user_id);

  return NextResponse.json(balance);
}
