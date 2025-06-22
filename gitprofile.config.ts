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
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Fixora',
          description:
            'Fixora is designed to be a comprehensive platform for both craftsmen and customers. Craftsmen can display their services and skills to a broad audience, while customers can view the profiles of available craftsmen, and search for specific services. Customers can book craftsmen for various tasks, ensuring they find the right professional for home repairs and improvements.',
          imageUrl:
            '/Fixora.jpg',
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
    title: 'Portfolio of Ahmed Nagy',
    description: 'Motivated and detail-oriented Computer Science graduate with a solid foundation in data structures, algorithms, and software development principles. Proficient in Java, Python, and SQL, with hands-on experience building backend systems and web applications through academic projects and internships. Strong problem-solving skills, a passion for clean and efficient code, and a desire to contribute to collaborative and innovative development teams.',
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
    website: '',
    phone: '+201015684166',
    email: 'ahmed.nagy.rd@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1n_bsm_vv4r2BB3VOUGerJphsDCKy710i/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C/C++',
    'C#',
    'JavaScript',
    'ASP.Net',
    'Entity Framework',
    '.Net Core',
    'Problem solving',
    'AWS',
    'Azure',
    'Oracle Cloud',
    'Software Engineering',
    'CSS',
    'Software Testing',
    'Advanced Database',
    'MS SQL Server',
    'Algorithm design and analysis',
    'Linux',
    'Java',
    'Spring Boot',
    'Machine Learning',
    'NLP',
    'Python',
    'Django',
    'Scrum',
    'DevOps',
    'CI/CD',
  ],
  experiences: [
    {
      company: 'CodSoft',
      position: 'Intern',
      from: 'Aug 2024',
      to: 'Sep 2024',
      companyLink: 'https://www.codsoft.in/',
    },
  ],
  certifications: [
    
  ],
  educations: [
    {
      institution: 'Cairo University - Faculty of Computers and Artificial Intelligence',
      degree: 'Bachelor’s degree in Computer Science',
      from: '2021',
      to: '2025',
    },
  ],
  publications: [
    
  ],
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
