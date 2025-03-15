import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-y-1.5 h-screen text-white text-3xl">
      <h1>Страница не найдена</h1>
      <Link href="/" className="underline">
        На главную
      </Link>
    </div>
  );
}
