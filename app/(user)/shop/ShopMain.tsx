import Image from 'next/image';
import React from 'react';

export default function ShopMain() {
  return (
    <div className="flex flex-col items-center m-5 gap-4">
      <h1 className="yellow-text text-3xl font-serif font-semibold">Магазин</h1>
      <div className="my-5 flex items-center gap-1 text-2xl text-white">
        <p className="inline">Баланс: {balance} </p>
        <Image src="/boltz.png" alt="boltz" className="w-10 h-10 inline" />
      </div>
    </div>
  );
}
