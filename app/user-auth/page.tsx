'use client';
import { useUser } from '@stackframe/stack';

export default function CustomOAuthSignIn() {
  const user = useUser();

  const account = user?.useConnectedAccount('discord', {
    or: 'redirect',
    scopes: ['identify', 'email', 'guilds'],
  }); //works great with +guilds scopes

  console.log(account);

  return <></>;
}
