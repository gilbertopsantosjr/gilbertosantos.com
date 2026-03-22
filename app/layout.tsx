import type { Metadata } from 'next'
import { DM_Sans, Crimson_Pro } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-crimson-pro',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gilberto Santos | Software Engineer Consultant - Turn Your Idea Into Scalable Micro-SaaS',
  description: 'Principal Software Engineer with 20+ years of experience helping founders turn ambitious ideas into fast, scalable cloud products. AWS Certified Solutions Architect specializing in microservices, serverless platforms, and enterprise-grade software.',
  keywords: [
    'software engineer consultant',
    'micro saas development',
    'aws solutions architect',
    'mvp development',
    'saas architecture',
    'cloud native development',
    'microservices consultant',
    'technical co-founder',
    'principal engineer',
    'serverless development',
  ],
  authors: [{ name: 'Gilberto Santos', url: 'https://gilbertosantos.com' }],
  creator: 'Gilberto Santos',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gilbertosantos.com',
    title: 'Gilberto Santos | Software Engineer Consultant - Turn Your Idea Into Scalable Micro-SaaS',
    description: 'Principal Software Engineer with 20+ years helping founders build scalable cloud products. Not a freelancer. A CTO-level partner who owns the outcome.',
    siteName: 'Gilberto Santos',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gilberto Santos | Software Engineer Consultant',
    description: 'Turn your million-dollar idea into a real Micro-SaaS with a Principal-level architect',
    creator: '@gilbertosantos',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${crimsonPro.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
