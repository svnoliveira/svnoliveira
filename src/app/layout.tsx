import type { Metadata } from 'next'
import { Abel } from 'next/font/google'
import './globals.css'
import StyledComponentsRegistry from '@/lib/registry'


const abel = Abel({ subsets: ['latin'], weight: ["400"] })

export const metadata: Metadata = {
  title: 'Portfolio | svnoliveira',
  description: 'Full Stack web developer Portfolio | Samuel Oliveira | Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={abel.className}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
