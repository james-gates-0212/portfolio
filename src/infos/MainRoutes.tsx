import { AiFillStar } from 'react-icons/ai';
import { CgGitFork } from 'react-icons/cg';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Home from '../components/Home/Home';

export const MainRoutes = [
  {
    label: 'Home',
    route: '/',
    element: <Home />,
  },
  {
    label: 'About',
    route: '/about',
    element: <About />,
  },
  {
    label: 'Experience',
    route: '/experience',
    element: <Experience />,
  },
  {
    className: 'fork-btn-inner',
    href: 'https://github.com/james-gates-0212',
    icon: () => (
      <>
        <CgGitFork style={{ fontSize: '1.2em' }} /> <AiFillStar style={{ fontSize: '1.1em' }} />
      </>
    ),
    route: '',
    target: '_blank',
  },
];
