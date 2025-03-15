'use client';

import Form from 'next/form';
import Link from 'next/link';

import { useStackApp } from '@stackframe/stack';
import { useState } from 'react';

export default function CustomOAuthSignIn() {
  const app = useStackApp();

  const [psnNick, setPsnNick] = useState('');
  const [isCooldown, setCooldown] = useState(false);

  const [error, setError] = useState('');

  const handleClick = async () => {
    if (!psnNick) {
      return setError('Поле не может быть пустым');
    }

    setCooldown(true);

    const userPlayed = await fetch(
      `/api/pusher/user-played-check/${psnNick}`
    ).then((res) => res.json());

    //Make another check that user with such psn name already exists in the database in another account

    if (userPlayed === true) {
      await app.signInWithOAuth('discord');
    } else if (userPlayed === false) {
      setError('Такой psn не заходил в игру на нашем сервере');
    } else {
      setError('Произошла ошибка, попробуйте позже');
    }

    setCooldown(false);
  };
  return (
    // <div className="relative h-full flex flex-col items-center justify-center bg-[url('/daylysium_logo.png')] bg-contain bg-no-repeat bg-center">
    <div className="relative h-full flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url('/daylysium_logo.png')] bg-contain bg-no-repeat bg-center after:absolute after:inset-0 after:bg-black/70"></div>
      <div className="z-1 w-1/2 md:w-1/3 min-h-1/3 flex flex-col items-center p-7 md:p-12 panel-background rounded-2xl">
        <h1 className="text-white mb-7 text-3xl">Вход</h1>
        <Form action="" className="flex flex-col space-y-4">
          <div className="flex flex-col items-center text-white space-y-3 mb-7">
            <p className="font-semibold">Введите ваш psn ник</p>
            <input
              onChange={(e) => {
                setPsnNick(e.target.value);
                setError('');
              }}
              className="border rounded-md bg-gray-500"
            />
            {error ? <div className="text-red-500">{error}</div> : null}
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 stack-oauth-button--r9- stack-scope relative"
            disabled={isCooldown}
            onClick={handleClick}
          >
            <div className="flex items-center w-full gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={22}
                height={22}
                viewBox="0 0 127.14 96.36"
              >
                <path
                  fill="#fff"
                  d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                ></path>
              </svg>
              <span className="flex-1 text-amber-50 font-bold">Войти</span>
            </div>
          </button>
        </Form>
        <Link href={'/'} className="text-white mt-7">
          На главную ↩
        </Link>
      </div>
    </div>
  );
}
