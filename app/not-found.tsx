import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-ice px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl font-semibold text-brand-navy">
          Page not found
        </h1>
        <p className="mt-4 text-slate-600">
          The page you are looking for is not available.
        </p>
        <Link
          href="/"
          className="focus-ring mt-6 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
