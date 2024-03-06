import { SNLightBulb } from '@icongo/sn';
import Image from 'next/image';
import Skills from '@/components/Skills';
import type { Metadata } from 'next';
import aboutImage from '@/app/assets/about.svg';

export const metadata: Metadata = {
  title: "James Gates | I'm glad to meet you",
  description:
    'With a simple communication, a clean and optimized code convention, a high quality development for collaboration and maintenance, and a keeping schedules for a project.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    url: '/about',
    type: 'website',
    images: '/avatar.jpg',
  },
};

export default function Page() {
  return (
    <section className="about container mx-auto px-2 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-12 mt-28">
        <div className="md:col-span-7 flex flex-col items-center">
          <h1 className="pb-4 text-center text-4xl ">
            I&apos;m glad to meet <strong className="text-impact">you</strong>
          </h1>

          <p className="text-xl leading-8">
            Hi, everyone, I&apos;m <span className="text-impact">James Gates</span>.<br />
            I&apos;m <span className="text-impact">Senior Full Stack Developer</span> and{' '}
            <span className="text-impact">SEO Expert</span>.
            <br />
            <br />I have 5+ years&apos; experience for web development. During last years, I had earned many skills to
            develop and manage a website and it now helps for a new project to develop in a high quality, rapidly.
            <br />
            <br />I like to work with a simple communication, a clean and optimized code convention, a high quality
            development for collaboration and maintenance, and a keeping schedules for a project. I also love learning a
            new thing from analyzing, discussing and resolving variable claims.
          </p>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <Image
            src={aboutImage}
            alt="About"
            className="w-auto max-h-[450px] mt-16"
            width={600}
            height={529}
            title="About"
            loading="lazy"
            priority
          />
        </div>
      </div>

      <div className="text-4xl mt-24 flex flex-row justify-center gap-4">
        <SNLightBulb />
        <strong className="text-impact">Skills</strong>
      </div>

      <Skills />
    </section>
  );
}
