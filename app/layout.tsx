import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header.tsx'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ephron George - Financial Intelligence Architect',
  description: 'MBA Finance & BCA Graduate specializing in SAP FI, QuickBooks, and Data Analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
