import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

import { pusherServer, pusher } from '@/lib/pusher';

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ psnName: string }> }
) {
  const { psnName } = await params;

  await pusherServer.trigger('discord-bot-send', 'user-played-check', {
    psn: psnName,
  });

  const userPlayed: boolean | null = await new Promise<boolean>(
    (resolve, reject) => {
      const timeout = setTimeout(() => {
        reject();
      }, 7000);

      pusher
        .subscribe('discord-bot-receive')
        .bind(`user-${psnName}-played-check`, (played: boolean) => {
          clearTimeout(timeout);
          resolve(played);
        });
    }
  ).catch(() => null);

  return NextResponse.json(userPlayed);
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ psnName: string }> }
) {
  const { psnName } = await params;

  const body = await req.json();

  console.log(body);

  await pusherServer.trigger(
    'discord-bot-receive',
    `user-${psnName}-played-check`,
    body?.userPlayed
  );

  return NextResponse.json({ message: 'Success!' });
}
