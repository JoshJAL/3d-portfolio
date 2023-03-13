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
  periodicTables,
  flashCards,
  pomodoroTimer,
  threejs,
  java,
  astro,
  nextjs,
  cSharp,
  RGE,
  HXL,
  OPL,
  LAS,
  simpleCalc,
  ticketingSolution,
  javaSnake,
  javaCalc,
  adminDashboard,
  textEditor,
  TIU,
  modernUI
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'experience',
    title: 'Work Experience'
  },
  {
    id: 'projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    title: 'Contact'
  },
  {
    id: 'source',
    title: 'Source',
    link: 'https://github.com/JoshJAL/3d-portfolio'
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
    testimonial:
      "He would research things he didn't learn at night and weekends and was always up for a new challenge... I recommend you consider hiring Josh.",
    name: 'Mark Ingles',
    designation: 'President',
    company: 'Rob Graham Enterprises',
    image: '/testimonialImages/markIngles.jpg'
  }
];

const projects = [
  {
    name: 'Periodic Tables',
    description:
      'A restaurant reservation system for a fictional restaurant. The user is able to create reservations for a specific date and time. The user is also able to assign a reservation to a specific table on a specific date as well as create new tables as needed.',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'Node.js',
        color: 'green-text-gradient'
      },
      {
        name: 'JavaScript',
        color: 'yellow-text-gradient'
      },
      {
        name: 'HTML',
        color: 'orange-text-gradient'
      },
      {
        name: 'CSS',
        color: 'blue-text-gradient'
      },
      {
        name: 'SQL',
        color: 'pink-text-gradient'
      }
    ],
    image: periodicTables,
    source_code_link: 'https://github.com/JoshJAL/restaurant_reservation_system'
  },
  {
    name: 'Java Snake',
    description:
      'The classic game of Snake. The player controls a snake that moves around the screen and eats apples. This program is written in Java and uses the Java Swing library to create the GUI.',
    tags: [
      {
        name: 'Java',
        color: 'orange-text-gradient'
      }
    ],
    image: javaSnake,
    source_code_link: 'https://github.com/JoshJAL/JavaSnake'
  },
  {
    name: 'Things I Use',
    description:
      "A curated list of the tech that I use. This is a static site built with Astro and React. The site features a light and a dark mode. It's purpose is not only to be a place where I can share the tech that I use, but a place for people to get to know me a little better. There are posts about the tech that I use, and why I like it so much.",
    tags: [
      {
        name: 'Astro',
        color: 'violet-text-gradient'
      },
      {
        name: 'React',
        color: 'blue-text-gradient'
      },
      {
        name: 'TypeScript',
        color: 'blue-text-gradient'
      },
      {
        name: 'JavaScript',
        color: 'yellow-text-gradient'
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient'
      },
      {
        name: 'Markdown',
        color: 'pink-text-gradient'
      }
    ],
    image: TIU,
    source_code_link: 'https://github.com/JoshJAL/what-i-use',
    hosted_application_link: 'https://things-i-use.vercel.app/'
  },
  {
    name: 'Modern UI Design',
    description:
      'A modern UI design for a fictional company. There are multiple pages that are accessible through the various buttons on the navigation bar on the left.',
    tags: [
      {
        name: 'C#',
        color: 'green-text-gradient'
      }
    ],
    image: modernUI,
    source_code_link: 'https://github.com/JoshJAL/ModernUICSharp'
  }
];

const staticPortfolio = 'https://www.joshualevine.me/';

const SOURCE = 'https://github.com/JoshJAL/3d-portfolio';

export { services, technologies, experiences, testimonials, projects, staticPortfolio, SOURCE };
