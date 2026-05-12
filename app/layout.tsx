import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Etsy Listing Compliance Checker',
  description: 'Check Etsy listings for policy violations before posting. Scan for prohibited keywords, trademark issues, and policy problems instantly.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="800e7774-8bad-4b5b-99c0-3c2cab2b72b8"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
