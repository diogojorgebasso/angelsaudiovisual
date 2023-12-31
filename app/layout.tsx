import React from 'react';
//Next
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
// Context
import { AuthContextProvider } from '@/context/AuthContext';
import { DarkContext } from '@/context/DarkContext';

//CSS
import './globals.css';

import { HeaderMenu } from '@/components/Menu/HeaderMenu';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Angels Audiovisual - Produtora Audiovisual',
  description:
    'Produtora audiovisual para eventos universitários e empresariais. De Minas Gerais para o Brasil.',
  applicationName: 'Angels Audiovisual',

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.className}`}>
      <head>
        <link rel="shortcut icon" href="/angels.svg" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#450228" />
        <meta name="msapplication-TileColor" content="#450228" />
        <meta name="theme-color" content="#450228" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width,"
        />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <DarkContext>
            <HeaderMenu />
            {children}
            <Footer />
          </DarkContext>
        </AuthContextProvider>
      </body>
    </html>
  );
}
