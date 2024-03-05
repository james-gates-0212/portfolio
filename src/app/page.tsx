import TiltImage from '@/components/clients/TiltImage';
import Type from '@/components/clients/Type';
import LinkInfos from '@/infos/Links';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'James Gates | Senior Full Stack Developer & SEO Expert',
  description:
    'As a seasoned Senior Full Stack Developer specializing in SEO and MERN Stack, I offer a proven track record of crafting resilient, intuitive web applications.',
};

export default function Page() {
  return (
    <section className="home-content container mx-auto px-2 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-12 mt-28">
        <div className="md:col-span-7 text-4xl flex flex-col items-center justify-center">
          <div className="pb-4 text-center">
            <span className="wave" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            <br />
            <br />
            Hi There!
          </div>

          <h1 className="py-2">
            My name is
            <strong className="font-bold text-impact"> James Gates</strong>
          </h1>

          <div className="py-14">
            <Type />
          </div>
        </div>

        <div className="md:col-span-5 flex items-center justify-center">
          <Image
            src="/assets/home-main.svg"
            alt="Home"
            className="w-auto max-h-[450px]"
            width={505}
            height={529}
            title="Home"
            loading="lazy"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-12 mt-28">
        <div className="md:col-span-8 px-10">
          <div className="text-4xl uppercase text-center mt-28 mb-16">
            Let me <span className="text-impact">Introduce</span> myself
          </div>
          <p className="text-xl leading-8">
            As an accomplished Senior Full Stack Developer specializing in SEO and MERN Stack development, I offer a
            proven track record of crafting resilient and intuitive web applications. Proficient in front-end and
            back-end technologies, I specialize in delivering scalable solutions that elevate user experiences and boost
            organic traffic through strategic SEO tactics. Leveraging my expertise in the MERN Stack, I create dynamic,
            responsive applications tailored to meet the evolving demands of contemporary businesses. Committed to
            continuous learning and staying abreast of cutting-edge technologies, I am adept at delivering pioneering
            solutions that surpass client expectations.
            <br />
            <br />
            Web Application Development is not only my job, but also my life.
            <br />
            <br />I can work full time, 8+ hours a day, 6 days a week. I hope to work with you in a long time.
          </p>
        </div>
        <div className="md:col-span-4 flex items-center justify-center px-10 pt-10">
          <TiltImage>
            <Image
              src="/assets/avatar.svg"
              className="w-auto"
              alt="Avatar"
              width="645"
              height="500"
              title="Avatar"
              loading="lazy"
            />
          </TiltImage>
        </div>
      </div>
      <div className="py-14 flex flex-col gap-5 justify-center">
        <div className="text-4xl uppercase text-center">FIND ME ON</div>
        <p className="text-center">
          Feel free to <span className="text-impact">connect</span> with me
        </p>
        <ul className="home-about-social-links text-center">
          {LinkInfos.map(({ href, icon: { dark: DarkIcon }, label }, idx) => (
            <li className="social-icons" key={`intro-social-icon-${idx}`}>
              <a
                className="icon-color home-social-icons title-tooltip"
                data-tooltip-content={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
              >
                <DarkIcon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
