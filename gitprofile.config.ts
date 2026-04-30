// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AhmedNagy24', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    external: {
      header: 'Software Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Lixora SK Pharmaceutical Manufacturing Website',
          description:
            'Freelance e-commerce platform built with ASP.NET Core (Clean Architecture, CQRS) and React, featuring Paymob, SMSala, and AWS SES integrations plus CI/CD with GitHub Actions and Docker.',
          link: '',
        },
        {
          title: 'Fixora',
          description:
            'Graduation project delivering a scalable ASP.NET Core REST API with SignalR chat, Firebase push notifications, Hangfire automation, and CI/CD using GitHub Actions and Docker.',
          imageUrl: '/Fixora.jpg',
          link: '',
        },
        {
          title: 'ChatGPT User Reviews - Sentiment Classification',
          description:
            'Trained SimpleRNN and LSTM models to classify ChatGPT user reviews as positive or negative.',
          link: '',
        },
        {
          title: 'Handwritten Alphabet Recognition',
          description:
            'Trained Linear and Non-Linear SVM models plus a TensorFlow neural network to recognize handwritten English alphabet.',
          link: '',
        },
        {
          title: 'Student Affairs Management System',
          description:
            'Built a Django (MVT) system with a clean HTML/CSS/JS UI and jQuery (AJAX) for student affairs workflows.',
          link: '',
        },
      ],
    },
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 10, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
  },
  seo: {
    title: 'Ahmed Nagy Ramadan | Software Engineer',
    description:
      'Software Engineer specializing in ASP.NET Core, Angular, and scalable backend systems, with experience delivering full-stack solutions, integrations, and CI/CD pipelines.',
    imageURL: '',
  },
  social: {
    linkedin: 'ahmed-nagy-rd',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://ahmednagy24.github.io',
    phone: '+20 101 568 4166',
    email: 'ahmed.nagy.rd@gmail.com',
  },
  resume: {
    fileUrl: '/Ahmed Nagy-CV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C#',
    'ASP.NET Core',
    'Entity Framework Core',
    'Java',
    'Spring Boot',
    'Python',
    'Django',
    'TensorFlow',
    'TypeScript',
    'Angular',
    'HTML',
    'CSS',
    'Clean Architecture',
    'Vertical Slice Architecture',
    'Onion Architecture',
    'N-Tier Architecture',
    'CQRS',
    'Mediator Pattern',
    'Outbox Pattern',
    'Microservices',
    'Domain-Driven Design (DDD)',
    'MS SQL Server',
    'Redis',
    'RabbitMQ',
    'SignalR',
    'Hangfire',
    'CAP',
    'AWS',
    'Azure',
    'Oracle Cloud',
    'Docker',
    'Docker Compose',
    'Linux',
    'GitHub Actions',
    'Jenkins',
    'CI/CD',
    'Algorithm Design & Analysis',
    'Machine Learning',
    'NLP',
    'Scrum / Agile',
    'DevOps',
    'Arabic (Native)',
    'English (Excellent)',
    'Communication',
    'Presentation',
    'Problem-solving',
  ],
  experiences: [
    {
      company: 'Sky Ports Group',
      position: 'Software Engineer (Full-time)',
      from: 'Feb 2026',
      to: 'Present',
    },
    {
      company: 'OPUS 365',
      position: '.NET Backend Engineer (Full-time)',
      from: 'Sep 2025',
      to: 'Feb 2026',
    },
    {
      company: 'Sky Ports Group',
      position: 'Full-Stack Developer (Internship)',
      from: 'Jul 2025',
      to: 'Sep 2025',
    },
    {
      company: 'VSRP',
      position: '.NET & Web Developer (Part-time)',
      from: 'Jun 2022',
      to: 'Jul 2025',
    },
  ],
  certifications: [
    {
      year: 'Jul 2025 – Aug 2025',
      name: '.NET 8 Microservices: DDD, CQRS, Clean Architecture',
      body: 'Udemy',
    },
    {
      year: 'May 2025 – Jun 2025',
      name: 'Advanced SQL',
      body: 'Kaggle Learn',
    },
    {
      year: 'May 2025 – Jun 2025',
      name: 'Intro to Docker',
      body: 'Le Wagon',
    },
    {
      year: 'Aug 2024 – Sep 2024',
      name: 'Java Programming',
      body: 'CodSoft',
    },
    {
      year: 'Oct 2023 – Jun 2024',
      name: 'Complete C# Masterclass',
      body: 'Udemy',
    },
  ],
  educations: [
    {
      institution:
        'Faculty of Computers and Artificial Intelligence, Cairo University, Egypt',
      degree: 'B.Sc. in Computer Science (Grade: Very Good)',
      from: 'Sep 2021',
      to: 'Jul 2025',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
