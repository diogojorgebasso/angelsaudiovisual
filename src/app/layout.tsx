import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Angels Audiovisual - Produtora de Eventos',
  description: 'A Angels é uma produtora Audiovisual de eventos que atua em Itajubá, com foco em eventos Universitários e Empresariais.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
