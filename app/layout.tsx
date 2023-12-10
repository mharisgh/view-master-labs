import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ViewMaster Labs | Crafting Excellence in AR, VR, MR, XR, and Vision Pro UI Design & Development',
  description: 'Explore the forefront of digital innovation with ViewMaster Labs. Specializing in AR, VR, MR, XR, and Vision Pro UI design and development, we are reshaping the future of digital experiences. For inquiries or projects, contact us at hello@viewmasterlabs.com. Stay tuned for the unveiling of a new era in immersive technology',
  icons: {
    icon: '/favicon.svg', // /public path
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
