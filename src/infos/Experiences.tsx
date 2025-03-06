import { FCBriefcase } from '@icongo/fc';
import { ICIconEducation } from '@icongo/ic';

interface ITimelineData {
  type: string;
  icon: any;
  since: string;
  until: string;
  title: string;
  company: string;
  address: string;
  site: string;
  details: Array<string>;
}

const VerticalTimelineElementData = ({ since, until, icon, ...props }: ITimelineData) => ({
  elementProps: {
    date: [since, until].filter(Boolean).join(' - '),
    contentStyle: {
      background: 'rgba(33, 33, 33, 0.5)',
      color: '#ddd',
    },
    contentArrowStyle: {
      borderRight: '10px solid #ccc',
    },
    iconStyle: {
      background: '#2d1950',
    },
    icon: icon,
  },
  ...props,
});

const Experiences = [
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: 'Sep 2001',
    until: 'Jun 2005',
    title: 'High School Diploma',
    company: 'Whitehall Central High School',
    address: 'New York, Nu, US',
    site: '',
    details: ['Computer Science'],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Apr 2017',
    until: 'Jan 2019',
    title: 'Full Stack Developer',
    company: 'Premier Pools & Spas',
    address: 'New York, US(remote)',
    site: 'https://premierpoolsandspas.com/',
    details: [
      'As a Full-Stack Developer, I built and deployed a customer management system for Premier Pools & Spas, streamlining operations and improving customer tracking efficiency by 40%. Also, managed hosting server, designed database, improve the performance etc.',
      'Developed and maintained high-performance web applications using MERN (MongoDB, Express.js, React, Node.js) and LAMP (Linux, Apache, MySQL, PHP) stacks, improving load times by 30% and boosting user engagement.',
      'Designed and optimized front-end interfaces for improved responsiveness and performance, resulting in a 20% increase in user retention and a smoother overall user experience.',
      'Built and integrated RESTful and GraphQL APIs, reducing data exchange latency by 40% and ensuring seamless communication between front-end and back-end systems.',
      'Integrated role-based access control, reducing unauthorized access incidents by 30%.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Apr 2019',
    until: 'Mar 2022',
    title: 'Blockchain & Web3 Developer',
    company: 'Earniverse',
    address: 'London, UK(remote)',
    site: 'https://earnimarket.io/',
    details: [
      'Built and launched an NFT marketplace for a world-famous metaverse game, maintaining it for over 3 years with consistent uptime.',
      'Built and maintained secure, scalable blockchain-based solutions for DeFi, NFTs, and tokenization, improving transaction speed by 30% and reducing costs by 20%.',
      "Collaborated with cross-functional teams to integrate blockchain technology into web and mobile platforms, resulting in a 25% increase in user adoption and a 30% improvement in transaction efficiency.",
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'May 2022',
    until: 'Feb 2025',
    title: 'Task Force Manager',
    company: "Wenzell & Fisher Hospitality Group",
    address: 'New York, US',
    site: '',
    details: [
      '',
    ],
  }),
  // VerticalTimelineElementData({
  //   type: 'work',
  //   icon: <FCBriefcase />,
  //   since: 'Nov 2022',
  //   until: 'Dec 2023',
  //   title: 'Full Stack Developer',
  //   company: 'CCL Computers',
  //   address: 'Bradford, England(Remote)',
  //   site: 'https://www.cclonline.com/',
  //   details: [
  //     'Successfully implemented React, optimizing development efficiency by 20% as our application scaled.',
  //     'Configured DynamoDB, reducing communication latency by 30% for better scalability.',
  //     'Engineered a high-performance RESTful application, enhancing realtime data streaming by 25% to meet project goals.',
  //     'Used Tailwind CSS, cutting styling time by 15% for quicker development cycles.',
  //     'Played a key role in client projects by instituting standards and processes, leading to a 20% enhancement in team efficiency.',
  //     'Accomplished a 15% increase in organic traffic by conducting in-depth keyword research and optimizing content with high-performing keywords.',
  //     'Boosted site performance by 25% through technical SEO enhancements, including website structure optimization and resolving indexing issues.',
  //   ],
  // }),
].sort(({ since: as, until: au }: any, { since: bs, until: bu }: any) => (as > bs || au > bu ? 1 : -1));

export default Experiences;
