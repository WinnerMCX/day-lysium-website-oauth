import Image from 'next/image';
import Link from 'next/link';

import { stackServerApp } from '@/stack';

export default async function Header() {
  const user = await stackServerApp.getUser();

  return (
    <header className="w-full h-[5vh] flex items-center bg-[#2e3130] text-white">
      <Link href="/" className="flex flex-1 items-center ml-4">
        <Image
          src="/daylysium_logo.png"
          alt="Logo"
          className="mr-2"
          width={55}
          height={55}
        />
        <p className="text-white text-2xl">Day • Lysium</p>
      </Link>

      <nav className="flex space-x-4 bg-[rgba(35,37,36,0.88)] rounded-2xl p-2">
        <Link href="/shop">Магазин</Link>
        <div>|</div>
        <Link href="/in-development">Купить бота</Link>
        <div>|</div>
        <Link href="/in-development">Поддержка</Link>
        <div>|</div>
        <Link href="/in-development">Команды</Link>
      </nav>

      <div className="flex flex-1 justify-end mr-4">
        {user ? (
          <Link href="/profile" className="flex items-center space-x-2">
            <Image
              src={user.profileImageUrl}
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
              width={16}
              height={16}
            />
            <p className="text-xl">{user.displayName}</p>
          </Link>
        ) : (
          <Link href="/login" className="">
            Войти
          </Link>
        )}
      </div>
    </header>
  );
}
