import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'Simple Next.js Test App',
  description: 'A simple multi-page Next.js app for browser testing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex gap-6">
            <Link href="/" className="hover:text-blue-300" data-testid="nav-home">
              Home
            </Link>
            <Link href="/about" className="hover:text-blue-300" data-testid="nav-about">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-300" data-testid="nav-contact">
              Contact
            </Link>
            <Link href="/products" className="hover:text-blue-300" data-testid="nav-products">
              Products
            </Link>
          </div>
        </nav>
        <main className="container mx-auto p-8">
          {children}
        </main>
      </body>
    </html>
  )
}
