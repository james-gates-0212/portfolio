import { getConfig } from '@/config';
import Experience from '@/components/clients/Experience';
import RootLayout from '@/components/layouts/RootLayout';
import type { Metadata } from 'next';

const config = getConfig();

export const metadata: Metadata = {
  title: 'James Gates | Experience & Education',
  description: 'I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time.',
  alternates: {
    canonical: '/experience',
  },
  openGraph: {
    url: '/experience',
    type: 'website',
    images: `${config.common.basePath}/avatar.webp`,
  },
};

export default function Page() {
  return (
    <RootLayout>
      <section className="about container mx-auto px-2 sm:px-6 lg:px-8">
        <h1 className="text-4xl leading-8 text-center mt-32">
          <strong className="text-black dark:text-white">Experience</strong>
          <small> &amp; </small>
          <strong className="text-black dark:text-white">Education</strong>
        </h1>
        <div className="text-left mt-10">
          <Experience />
        </div>
      </section>
    </RootLayout>
  );
}
