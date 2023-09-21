import React from "react";

// UI
import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

//SEO
import type { Metadata } from "next";

import { HeaderMenu } from "../components/Menu/HeaderMenu";
import { AuthContextProvider } from "../context/AuthContext";

export const metadata: Metadata = {
  title: "Angels Audiovisual - Produtora de Eventos",
  description:
    "A Angels é uma produtora Audiovisual de eventos que atua no Sul De Minas, com foco em eventos Universitários e Empresariais.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <AuthContextProvider>
            <HeaderMenu />
            {children}
          </AuthContextProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
