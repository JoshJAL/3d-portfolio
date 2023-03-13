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
    name: 'Flashcard-O-Matic',
    description:
      'A flashcard making app for taking notes and studying any subject. Moving into as digitally focused an age as we are, I believe that it is time to start upgrading our ways of studying. This app allows for the user to create decks of flashcards focused on any subject. There are front and back parts of the card for the user to utilize in any way that they wish. The user can create, delete and edit flashcards and decks as they see fit. There is a breadcrumb feature at the top of each page to ensure that the user is always able to revert to any page if they wish to do so.',
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
      }
    ],
    image: flashCards,
    source_code_link: 'https://github.com/JoshJAL/FlashCards'
  },
  {
    name: 'Pomodoro Timer',
    description:
      'A study timer built around the Pomodoro Technique with a "Focus" timer and a "Break" timer. After the time has elapsed for either the "Focus" or "Break" phase an alarm will play informing the user that it is time to either take a break or get back to work. I use this personally and find that it greatly aids in countering burnout when working on large projects.',
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
      }
    ],
    image: pomodoroTimer,
    source_code_link: 'https://github.com/JoshJAL/Pomodoro-Timer-Project'
  },
  {
    name: 'Simple JavaScript Calculator',
    description:
      'A simple calculator application that can add, subtract, multiply and divide. Intended for simple mathematical problems.',
    tags: [
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
      }
    ],
    image: simpleCalc,
    source_code_link: 'https://github.com/JoshJAL/simpleCalculator',
    hosted_application_link: 'https://joshjal.github.io/simpleCalculator/'
  },
  {
    name: 'Ticketing Solution',
    description:
      'A scalable ticketing solution for use within any company or organization. The application is password protected and developers are the only ones able to whitelist accounts that can gain access and sign up to use the system. Interactions with the application are different based on the type of user; developer, quality assurance, or general user.',
    tags: [
      {
        name: 'TypeScript',
        color: 'blue-text-gradient'
      },
      {
        name: 'JavaScript',
        color: 'yellow-text-gradient'
      },
      {
        name: 'Next.js',
        color: 'green-text-gradient'
      },
      {
        name: 'HTML',
        color: 'orange-text-gradient'
      },
      {
        name: 'CSS',
        color: 'blue-text-gradient'
      }
    ],
    image: ticketingSolution,
    source_code_link: 'https://github.com/JoshJAL/ticketingSolution'
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
    name: 'Java Calculator',
    description:
      'A simple calculator application written in Java. The calculator can perform basic arithmetic operations like addition, subtraction, multiplication, and division.',
    tags: [
      {
        name: 'Java',
        color: 'orange-text-gradient'
      }
    ],
    image: javaCalc,
    source_code_link: 'https://github.com/JoshJAL/JavaCalculator'
  },
  {
    name: 'Admin Dashboard',
    description:
      'An admin dashboard for a fake e-commerce website. This dashboard will allow the admin to view, create, edit and delete products, categories and users. The admin will also be able to view the orders that have been placed and change the status of the order. The admin will also be able to view the analytics of the website.',
    tags: [
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
      }
    ],
    image: adminDashboard,
    source_code_link: 'https://admin-dashboard-six-lake.vercel.app/',
    hosted_application_link: 'https://joshjal.github.io/admin-dashboard/'
  },
  {
    name: 'Text Editor',
    description:
      'A simple text editor written in Java that allows the user to open, edit and save text files. The user can also change the font size, font style and font color.',
    tags: [
      {
        name: 'Java',
        color: 'orange-text-gradient'
      }
    ],
    image: textEditor,
    source_code_link: 'https://github.com/JoshJAL/JavaTextEditor'
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
