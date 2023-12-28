import '../styles/globals.css'
import { titleFont, raleway } from '@/styles/font'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The RailYard',
  description: 'Wedding & Events',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} ${titleFont.variable}`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
