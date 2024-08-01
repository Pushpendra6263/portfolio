import './globals.css'
import { Inter } from 'next/font/google'
// import Nav from '@/components/Nav'
import Transition from '@/components/Transition'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Transition>
          {children}
        </Transition>

      </body>
    </html>
  )
}
