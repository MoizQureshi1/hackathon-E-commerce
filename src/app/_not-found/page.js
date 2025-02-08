// pages/not-found.js

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen flex-col text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! The page youre looking for doesnt exist.</p>
      <Link href="/" passHref>
        <a className="text-cyan-600 text-lg underline hover:text-cyan-800">Go back to Home</a>
      </Link>
    </div>
  );
}
