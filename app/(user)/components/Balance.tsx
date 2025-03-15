'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import useSWR from 'swr';

import { pusher } from '@/lib/pusher';

const fetcher = (url) => fetch(url).then((r) => r.json());

const Balance = () => {
  const { data, error, isLoading } = useSWR('/api/wallet/balance', fetcher);

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (isLoading || !data) return;

    setBalance(data.balance);

    const channel = pusher.subscribe(`${data.user_id}`);
    channel.bind('new-balance', function (new_balance: number) {
      setBalance(new_balance);
    });
  }, [isLoading, data]);

  return (
    <div className="w-56 flex flex-col items-center p-3 rounded-2xl background-gray">
      <p className="text-white text-xl">Баланс:</p>
      <p className="flex items-center gap-0.5 text-amber-50 text-xl">
        {isLoading ? '...' : balance}
        <Image
          src="/boltz.png"
          alt="boltz"
          width={30}
          height={30}
          className="inline"
        />
      </p>
    </div>
  );
};

export default Balance;
