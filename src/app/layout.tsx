import '@/app/globals.css';
import { classNames } from '@/components/Commons';
import { getConfig } from '@/config';
import { GoogleTagManager } from '@next/third-parties/google';
import { Raleway } from 'next/font/google';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import PreImage from '@/app/assets/pre.svg';
import ReactTooltip from '@/components/clients/ReactTooltip';
import Script from 'next/script';
import type { Metadata, Viewport } from 'next';

const DynamicThemeModeScript = dynamic(() => import('flowbite-react').then((mod) => mod.ThemeModeScript), {
  ssr: false,
});

const config = getConfig();

export const metadata: Metadata = {
  metadataBase: new URL(config.common.basePath, config.common.host),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    type: 'website',
    images: '/avatar.webp',
  },
  twitter: {
    images: '/avatar.webp',
  },
  verification: {
    google: config.google.verification,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo192.png',
    apple: '/logo192.png',
  },
  manifest: `${config.common.basePath}/manifest.json`,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
};

const Loading = () => (
  <div className="fixed top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-center">
    <Image src={PreImage} alt="Loading..." title="Loading..." priority />
  </div>
);

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={classNames(raleway.className, 'dark')}>
      <head>
        <Script src={`${config.common.basePath}/flowbite-theme.js`} />
        <DynamicThemeModeScript />
      </head>
      <body className="bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-400">
        <Suspense fallback={<Loading />}>
          {children}
          <ReactTooltip />
        </Suspense>
      </body>
      {Boolean(config.google.tag_manager_id) && <GoogleTagManager gtmId={config.google.tag_manager_id} />}
    </html>
  );
}
