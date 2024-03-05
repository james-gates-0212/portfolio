import RootLayout from '@/components/layouts/RootLayout';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://james-gates-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    images: '/avatar.jpg',
  },
  twitter: {
    images: '/avatar.jpg',
  },
  verification: {
    google: 'vSy6aBobFApUM2bc6BgZd2XYJQ8P3sFadIdTcEtClwY',
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout children={children} />;
}
