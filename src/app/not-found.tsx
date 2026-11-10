import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Aspiration",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex min-h-[65vh] flex-col items-center justify-center px-4 py-16 text-center">
      <div className="mx-auto max-w-lg">
        <span className="text-sm font-semibold uppercase tracking-wider text-amber-500">
          Error 404
        </span>
        <h1 className="mt-2 text-7xl font-extrabold tracking-tight text-gray-900 sm:text-8xl">
          404
        </h1>
        <h2 className="mt-4 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Page Not Found
        </h2>
        <p className="mt-3 text-base text-gray-600 max-w-md mx-auto">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-lg bg-amber-500 px-6 py-3 text-base font-semibold text-slate-900 shadow-md hover:bg-amber-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 transition-colors no-underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
