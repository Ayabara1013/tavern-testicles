import { Inter } from 'next/font/google'
import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" >
      <body className={`${inter.className} flex flex-col h-screen max-h-screen border border-white`}>
        <Navbar />
        <div className="app-wrapper">{children}</div>
      </body>
    </html>
  )
}


const Navbar = () => {
  return (
    <div className="navbar bg-base-200">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
  )
}