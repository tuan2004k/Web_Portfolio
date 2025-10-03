import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Cursor from '@/components/Cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Developer',
  description: 'Portfolio website của tôi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={inter.className}>{children}
  
        
      </body>
    </html>
  )
}



