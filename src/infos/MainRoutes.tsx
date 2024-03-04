import { PPStarFilled } from '@icongo/pp';
import { CGGitFork } from '@icongo/cg';
import About from '../components/About/About';
import Experience from '../components/Experience/Experience';
import Home from '../components/Home/Home';

const MainRoutes = [
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
    label: 'Github',
    className: 'fork-btn-inner',
    href: 'https://github.com/james-gates-0212',
    icon: () => (
      <>
        <CGGitFork style={{ fontSize: '1.2em' }} /> <PPStarFilled style={{ fontSize: '1.1em' }} />
      </>
    ),
    route: '',
    target: '_blank',
  },
];

export default MainRoutes;
