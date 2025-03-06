import { PPStarFilled } from '@icongo/pp';
import { CGGitFork } from '@icongo/cg';

const NavItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Experience',
    href: '/experience',
  },
  {
    name: 'Github',
    className: 'fork-btn-inner',
    href: 'https://github.com/brian-salvatore/',
    icon: () => (
      <>
        <CGGitFork style={{ fontSize: '1.2em' }} /> <PPStarFilled style={{ fontSize: '1.1em' }} />
      </>
    ),
  },
];

export default NavItems;
