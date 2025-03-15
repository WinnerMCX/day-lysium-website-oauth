import Pusher from 'pusher-js';
import PusherServer from 'pusher';

export const pusher = new Pusher(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY as string,
  {
    cluster: 'eu',
  }
);

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_APP_SECRET!,
  cluster: 'eu',
  useTLS: true,
});
