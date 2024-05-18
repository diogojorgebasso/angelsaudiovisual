import React from 'react';
//Next
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';
// Context
import { AuthContextProvider } from '@/context/AuthContext';

//CSS
import './globals.css';

import { HeaderMenu } from '@/components/Menu/HeaderMenu';
import Footer from '@/components/Footer/Footer';

const inter = Montserrat({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Angels Audiovisual',
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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#40032b" />
        <meta name="msapplication-TileColor" content="#40032b" />
        <meta name="theme-color" content="#40032b" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width,"
        />
      </head>
      <body className={`${inter.className} text-gray-100 background-radial-gradient`}>
        <AuthContextProvider>
          <HeaderMenu />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
