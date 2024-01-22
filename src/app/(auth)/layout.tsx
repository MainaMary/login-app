import { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Suspense fallback="Loading header..."></Suspense>
      <main className="flex-1">{children}</main>
    </div>
  );
}
