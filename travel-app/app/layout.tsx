import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for camping',
  icons: {
    icon: ["./favicon.ico?v=4"], // placing facing favicon inside public folder and this syntax with ?v=4 will only work
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
