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
    since: 'Sep 2015',
    until: 'Mar 2018',
    title: 'Bachelor of Computer Science',
    company: 'Khoury College of Computer Sciences',
    address: 'Boston, MA, US',
    site: 'https://www.khoury.northeastern.edu/',
    details: ['Computer Science', 'Computer Graphics', 'Web Programming'],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Apr 2018',
    until: 'Sep 2019',
    title: 'Frontend Developer Intern',
    company: 'Spenny For Hire',
    address: 'Alberta, Canada(on-site)',
    site: 'https://spennyforhire.ca/',
    details: [
      'Realized a 10% increase in page loading speed through code optimization.',
      'Ensured a 20% improvement in cross-browser compatibility and mobile responsiveness through comprehensive testing with tools like Cypress.',
      'Played a key role in expanding the service portfolio, resulting in a 20% increase in service offerings.',
      'Enhanced service personalization, contributing to a 30% increase in revenue from personalized service packages.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Oct 2019',
    until: 'Feb 2021',
    title: 'Freelance Developer',
    company: 'Upwork',
    address: 'Canada',
    site: 'https://www.upwork.com/',
    details: [
      'Completed multiple frontend development projects on Upwork, focusing on creating responsive and user-friendly websites using HTML, CSS, JavaScript, React, and Vue.js.',
      'Accomplished backend developer with a track record of delivering solutions for clients by implementing server-side logic, database integration, and API development using technologies such as Node.js, Express, and MongoDB.',
      "Provided SEO optimization services to improve clients' online visibility and search engine rankings, implementing strategies for keyword research, on-page optimization, and content marketing.",
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Oct 2020',
    until: 'Oct 2022',
    title: 'SEO Specialist',
    company: "Macy's",
    address: 'New York, US(remote)',
    site: 'https://www.macys.com/',
    details: [
      'Performed a thorough technical audit of the website to identify and address critical issues for improved SEO performance.',
      'Executed internal optimization techniques to enhance website functionality and user experience.',
      'Created a strong semantic core to optimize keyword usage and improve search engine visibility.',
      'Monitored industry trends and analyzed competitors to stay ahead in SEO strategies.',
      'Established clear guidelines for content creation to maintain consistency and relevance.',
      'Implemented successful link building campaigns to boost website authority and search engine rankings.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Nov 2022',
    until: 'Dec 2023',
    title: 'Full Stack Developer',
    company: 'CCL Computers',
    address: 'Bradford, England(Remote)',
    site: 'https://www.cclonline.com/',
    details: [
      'Successfully implemented React, optimizing development efficiency by 20% as our application scaled.',
      'Configured DynamoDB, reducing communication latency by 30% for better scalability.',
      'Engineered a high-performance RESTful application, enhancing realtime data streaming by 25% to meet project goals.',
      'Used Tailwind CSS, cutting styling time by 15% for quicker development cycles.',
      'Played a key role in client projects by instituting standards and processes, leading to a 20% enhancement in team efficiency.',
      'Accomplished a 15% increase in organic traffic by conducting in-depth keyword research and optimizing content with high-performing keywords.',
      'Boosted site performance by 25% through technical SEO enhancements, including website structure optimization and resolving indexing issues.',
    ],
  }),
].sort(({ since: as, until: au }: any, { since: bs, until: bu }: any) => (as > bs || au > bu ? 1 : -1));

export default Experiences;
