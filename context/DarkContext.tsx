'use client';

import { ThemeProvider } from 'next-themes';

export function DarkContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
