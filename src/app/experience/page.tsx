import type { Metadata } from 'next';
import Experience from '@/components/clients/Experience';

export const metadata: Metadata = {
  title: 'James Gates | Experience & Education',
  description: 'I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time.',
  alternates: {
    canonical: '/experience',
  },
};

export default function Page() {
  return (
    <section className="about container mx-auto px-2 sm:px-6 lg:px-8">
      <h1 className="text-4xl leading-8 text-center mt-32">
        <strong className="text-impact">Experience</strong>
        <small> &amp; </small>
        <strong className="text-impact">Education</strong>
      </h1>
      <div className="text-left mt-10">
        <Experience />
      </div>
    </section>
  );
}
