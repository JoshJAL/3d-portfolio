import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  astro,
  nextjs,
  cSharp,
  RGE,
  HXL,
  OPL,
  LAS
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

const services = [
  {
    title: 'Web Developer',
    icon: web
  },
  {
    title: 'Backend Developer',
    icon: backend
  },
  {
    title: 'React Native Developer',
    icon: mobile
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'Java',
    icon: java
  },
  {
    name: 'C Sharp',
    icon: cSharp
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Next JS',
    icon: nextjs
  },
  {
    name: 'Astro',
    icon: astro
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'Three JS',
    icon: threejs
  },
  {
    name: 'git',
    icon: git
  }
];

const experiences = [
  {
    title: 'Customer Service and Video Editor',
    company_name: 'Levine Apparel Solutions',
    icon: LAS,
    iconBg: '#f5faff',
    date: 'Aug 2015 - Sept 2019',
    points: [
      'Edited video for company YouTube channel to support marketing and sales initiatives.',
      'Managed overseas customer care and dispersal of information.',
      'Communicated over various time zones via phone and email.'
    ]
  },
  {
    title: 'Legal Intern',
    company_name: 'Open Palm Law',
    icon: OPL,
    iconBg: 'white',
    date: 'Dec 2019 - Aug 2020',
    points: [
      'Provided operational support to ensure smooth and effective client services running a law firm.',
      'Reviewed court documents for errors and possible advantages.',
      'Investigated past law to prove a common law marriage validity.'
    ]
  },
  {
    title: 'Enrollment Specialist',
    company_name: 'HealthXL',
    icon: HXL,
    iconBg: '#E6DEDD',
    date: 'Aug 2021 - Mar 2022',
    points: [
      'Ensured retainment of patients over various offices by communicating directly with patients.',
      'Handled and evaluated customer inquiries and complaints.',
      'Provided assistance to other related departments to promote teamwork and efficiency.'
    ]
  },
  {
    title: 'Full-Stack JavaScript Developer',
    company_name: 'Rob Graham Enterprises',
    icon: RGE,
    iconBg: '#383E56',
    date: 'May 2022 - Nov 2022',
    points: [
      'Developing and maintaining web applications using Next.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, marketing, and other developers to create high-quality products.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'Participating in code reviews and providing constructive feedback to other developers.'
    ]
  }
];

const testimonials = [
  {
    testimonial: 'I thought it was impossible to make a website as beautiful as our product, but Josh proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    testimonial: "I've never met a web developer who truly cares about their clients' success like Josh does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    testimonial: "After Josh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg'
  }
];

const projects = [
  {
    name: 'Car Rent',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient'
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient'
      }
    ],
    image: carrent,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient'
      },
      {
        name: 'restapi',
        color: 'green-text-gradient'
      },
      {
        name: 'scss',
        color: 'pink-text-gradient'
      }
    ],
    image: jobit,
    source_code_link: 'https://github.com/'
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient'
      },
      {
        name: 'supabase',
        color: 'green-text-gradient'
      },
      {
        name: 'css',
        color: 'pink-text-gradient'
      }
    ],
    image: tripguide,
    source_code_link: 'https://github.com/'
  }
];

const staticPortfolio = 'https://www.joshualevine.me/';

export { services, technologies, experiences, testimonials, projects, staticPortfolio };
