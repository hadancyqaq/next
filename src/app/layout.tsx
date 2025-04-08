import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '登陆',
  description: '登陆'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="trancy-zh-CN">
      <body>{children}</body>
    </html>
  )
}
