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

export const Experiences = [
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: '2009.4',
    until: '2013.3',
    title: 'Bachelor in Computer Science',
    company: 'Kyoto University',
    address: 'Yoshidahonmachi, Sakyo Ward, Kyoto, 606-8501, Japan',
    site: 'https://www.kyoto-u.ac.jp/en',
    details: ['Computer Science', 'Computer Graphics', 'Web Programming'],
  }),
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: '2013.4',
    until: '2016.8',
    title: 'Master Degree in Library & Information Science',
    company: 'The University of Hong Kong',
    address: 'Pok Fu Lam, Hong Kong',
    site: 'https://www.hku.hk',
    details: ['Data Analysis', 'Database Management System', 'Information Retrieval System'],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2017.2',
    until: '2019.11',
    title: 'Java Developer',
    company: 'Hipster',
    address: '60 Kaki Bukit Pl, #10-14, Singapore 415979',
    site: 'https://hipster-inc.com',
    details: [
      'Supported back-end for software and hardware accounting system written using Java 1.7, MySQL, HTML, and JavaScript.',
      'Migrated web app from Struts to Struts2.',
      'Optimized bunch of SQL queries to MySQL DB.',
      'Replaced huge parts of a legacy project (mixed Java, JSP, JDBC) with modern Struts, Spring and iBatis-based implementation.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2020.2',
    until: '2022.3',
    title: 'Laravel Developer',
    company: 'Centreville Tech, LLC',
    address: '38 Court Square West, Centreville, AL 35042',
    site: 'https://centrevilletech.com/',
    details: [
      'Presented eCommerce, PHP, and MySQL web development for small-business clients.',
      'Developed expandable and maintainable pages in HTML and CSS.',
      'Developed new sites for small- to medium-sized businesses using XAMPP, Linux, Apache, MySQL, and PHP, developing virtual host and web applications.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: '2022.4',
    until: '2023.3',
    title: 'MERN Stack Developer',
    company: 'InterCode',
    address: '69a, Bohdan Khmelnytskyi str. Chernivtsi, Ukraine',
    site: 'https://intercode.com',
    details: [
      'Various projects and bug fixes on the front and back ends, using React, Express, and MongoDB.',
      'Developed APIs in many languages and frameworks for consumption by web applications and other clients. Notable projects include a Node.js API built (using Express).',
      'Designed and developed a Canvas app for purchase request initiations and approvals.',
    ],
  }),
].sort(({ since: as, until: au }: any, { since: bs, until: bu }: any) => (as > bs || au > bu ? 1 : -1));
