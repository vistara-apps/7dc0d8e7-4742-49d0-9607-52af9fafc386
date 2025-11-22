import type { Metadata } from 'next'
import { Providers } from './components/Providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Narrative Markets',
  description: 'Verifiable prediction markets for cultural narratives on Base',
  openGraph: {
    title: 'Narrative Markets',
    description: 'Verifiable prediction markets for cultural narratives on Base',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
