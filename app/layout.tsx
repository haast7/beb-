import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConsentBanner } from '@/components/analytics/ConsentBanner';
import { GoogleTagManager } from '@/components/analytics/GoogleTagManager';
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics';
import { MetaPixel } from '@/components/analytics/MetaPixel';
import { ScrollTracking } from '@/components/analytics/ScrollTracking';
import { FixedWhatsAppButton } from '@/components/ui/FixedWhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Haast - Infraestrutura Digital de Alta Performance',
    template: '%s | Haast',
  },
  description: 'Haast transforma clínicas e laboratórios em máquinas de agendamento. Tráfego pago + infraestrutura técnica + vendas estruturadas = ROI real em 30-90 dias.',
  keywords: [
    'marketing digital clínicas',
    'tráfego pago laboratórios',
    'agendamentos online',
    'ROI marketing saúde',
    'infraestrutura digital',
    'conversão clínicas',
    'Google Ads saúde',
    'Meta Ads laboratórios',
  ],
  authors: [{ name: 'Haast' }],
  creator: 'Haast',
  publisher: 'Haast',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://haast.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://haast.com.br',
    title: 'Haast - Infraestrutura Digital de Alta Performance',
    description: 'Haast transforma clínicas e laboratórios em máquinas de agendamento. Tráfego pago + infraestrutura técnica + vendas estruturadas = ROI real em 30-90 dias.',
    siteName: 'Haast',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Haast - Infraestrutura Digital de Alta Performance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haast - Infraestrutura Digital de Alta Performance',
    description: 'Haast transforma clínicas e laboratórios em máquinas de agendamento. Tráfego pago + infraestrutura técnica + vendas estruturadas = ROI real em 30-90 dias.',
    images: ['/og-image.jpg'],
    creator: '@haastgrowth',
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <GoogleTagManager />
        <GoogleAnalytics />
        <MetaPixel />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" href="/favicon.png" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#25f1ff" />
        <meta name="msapplication-TileColor" content="#25f1ff" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <GoogleTagManager />
        <ConsentBanner />
        <ScrollTracking />
        <Header />
        <main>{children}</main>
        <Footer />
        <FixedWhatsAppButton />
      </body>
    </html>
  );
}
