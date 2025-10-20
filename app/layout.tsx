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
      <body className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 min-h-screen">
        <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white shadow-xl backdrop-blur-lg border-b border-white/10">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-xl font-bold shadow-lg">
                  🚀
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  TestApp Pro
                </span>
              </div>
              <div className="flex gap-2">
                <Link 
                  href="/" 
                  className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium hover:shadow-lg" 
                  data-testid="nav-home"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium hover:shadow-lg" 
                  data-testid="nav-about"
                >
                  About
                </Link>
                <Link 
                  href="/contact" 
                  className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium hover:shadow-lg" 
                  data-testid="nav-contact"
                >
                  Contact
                </Link>
                <Link 
                  href="/products" 
                  className="px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 font-medium hover:shadow-lg" 
                  data-testid="nav-products"
                >
                  Products
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="container mx-auto px-6 py-12">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white mt-20">
          <div className="container mx-auto px-6 py-8">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-lg">
                  🚀
                </div>
                <span className="text-lg font-bold">TestApp Pro</span>
              </div>
              <p className="text-blue-200 text-sm">Built with Next.js, React, and Tailwind CSS</p>
              <div className="flex justify-center gap-6 text-sm text-blue-200">
                <span>© 2025 TestApp Pro</span>
                <span>•</span>
                <span>All rights reserved</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
