import { Raleway } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const raleway = Raleway({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'The RailYard',
  description: 'Wedding & Events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
