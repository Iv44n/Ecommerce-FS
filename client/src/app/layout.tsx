import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shop - Home',
  description: ''
}

interface LayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<LayoutProps>) {
  return (
    <html lang='en'>
      <body className={`${quicksand.className} lg:px-20`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
