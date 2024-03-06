import LinkInfos from '@/infos/Links';
import Link from 'next/link';

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <footer className="w-full bg-white/10 backdrop-blur-md px-5 py-4 mt-32">
      <div className="grid lg:grid-cols-2 gap-10 container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="text-base text-white">Copyright &copy; {year} James Gates</div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-row flex-wrap gap-6 items-center justify-center">
            {LinkInfos.map(({ href, icon: { light: LightIcon }, label }, idx) => (
              <li className="flex flex-col items-center justify-center" key={`foot-social-icon-${idx}`}>
                <Link
                  className="title-tooltip "
                  data-tooltip-content={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <LightIcon />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
