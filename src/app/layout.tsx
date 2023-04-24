import { ReactNode } from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'

import { HeroPattern } from './components/HeroPattern'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'App Documentation',
  description: 'Site desenvolvido por Matheus Fonteles',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.className}>
      <body className={`bg-zinc-900`}>
        <Sidebar />

        <div className="ml-80 relative h-screen">
          <Header />
          <HeroPattern />
          <div className="py-24 max-w-4xl px-8 mx-auto">{children}</div>
        </div>
      </body>
    </html>
  )
}
