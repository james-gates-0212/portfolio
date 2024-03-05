import RootLayout from '@/components/layouts/RootLayout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://james-gates-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    type: 'website',
    images: '/avatar.jpg',
  },
  twitter: {
    images: '/avatar.jpg',
  },
  verification: {
    google: 'vSy6aBobFApUM2bc6BgZd2XYJQ8P3sFadIdTcEtClwY',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo256.png',
    apple: '/logo512.png',
  },
  manifest: '/manifest.json',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
