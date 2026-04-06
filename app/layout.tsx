import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shanmuganarayanan — Frontend Engineer & AI Developer',
  description: '4+ years building scalable UIs, agentic AI systems, and cloud platforms. React, Next.js, Node, Figma.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'AI Developer', 'UI/UX', 'MCP Tools'],
  authors: [{ name: 'Shanmuganarayanan' }],
  openGraph: {
    title: 'Shanmuganarayanan — Frontend Engineer & AI Developer',
    description: '4+ years building scalable UIs, agentic AI systems, and cloud platforms.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="noise">
      <body className="grid-bg min-h-screen">
        {children}
      </body>
    </html>
  )
}
