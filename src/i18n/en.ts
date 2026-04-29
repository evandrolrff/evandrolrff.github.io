export default {
  // ── Nav ──────────────────────────────────────────────
  nav: {
    home:       'Home',
    experience: 'Experience',
    research:   'Research',
    skills:     'Skills',
    projects:   'Projects',
    faq:        'FAQ',
    contact:    'Contact',
    cta:        "Let's Talk",
  },

  // ── Hero ─────────────────────────────────────────────
  hero: {
    available:  'Available for collaboration',
    greeting:   "Hi, I'm Evandro",
    headline:   ['Computer', 'Scientist', '& Engineer'],
    tagline:    'Bridging academic research and software engineering to build things that matter.',
    cta:        'Get in Touch ↗',
    ctaSecond:  'View Projects',
    scroll:     'scroll',
    stats: [
      { value: '10+',   label: 'Years in tech' },
      { value: 'M.Sc.', label: 'Computer Science' },
      { value: '4+',    label: 'Degrees & certs' },
      { value: 'ML/NLP',label: 'Research focus' },
    ],
  },

  // ── Experience ────────────────────────────────────────
  experience: {
    eyebrow:  'My Journey',
    heading:  'Experience & Formation',
    tabExp:   'Experience',
    tabEdu:   'Education',
    items: [
      {
        role:     'Technical Education Teacher',
        company:  'UFSM — Special Teacher Training',
        period:   '2023 – 2024',
        location: 'Santa Maria, BR',
        bullets: [
          'Taught software development and computer science fundamentals to technical students.',
          'Developed didactic materials integrating theory with hands-on programming practice.',
          'Mentored students on individual projects and academic pathways.',
        ],
      },
      {
        role:     'Researcher — Software Engineering & ML',
        company:  'PPGCC / UFSM',
        period:   '2019 – 2022',
        location: 'Santa Maria, BR',
        bullets: [
          'Conducted research on process improvement in Software Engineering using ML and NLP techniques.',
          'Applied Data Mining methods to extract insights from software project datasets.',
          'Published findings and participated in academic conferences in the field.',
        ],
      },
      {
        role:     'Software Developer',
        company:  'Various projects',
        period:   '2015 – 2019',
        location: 'Santa Maria, BR',
        bullets: [
          'Developed desktop and web applications in C# and C++ for diverse business domains.',
          'Performed Quality Assurance activities — test planning, execution and defect tracking.',
          'Delivered mobile and web solutions with focus on usability and reliability.',
        ],
      },
    ],
    education: [
      { degree: "Bachelor's — Special Teacher Training Program", institution: 'Federal University of Santa Maria', period: '2023 – 2024' },
      { degree: "Master's in Computer Science",                  institution: 'Federal University of Santa Maria', period: '2019 – 2022', highlight: true },
      { degree: "Bachelor's in Information Systems",             institution: 'Federal University of Santa Maria', period: '2013 – 2018' },
      { degree: 'Computer Technician',                           institution: 'Federal University of Santa Maria', period: '2012 – 2015' },
    ],
  },

  // ── Research ──────────────────────────────────────────
  research: {
    eyebrow:      'Academic Work',
    heading:      'Research',
    pubHeading:   'Publications',
    pubVenue:     'Federal University of Santa Maria',
    areas: [
      {
        title:       'Process Improvement in Software Engineering',
        description: 'Investigation of techniques to identify patterns and anomalies in software development processes, using data-driven approaches to suggest improvements.',
        keywords:    ['CMMI', 'MPS.BR', 'Process Mining', 'Metrics'],
      },
      {
        title:       'Natural Language Processing for SE',
        description: 'Application of NLP methods to software engineering artifacts — requirements documents, bug reports, code comments — to automate classification and analysis.',
        keywords:    ['Text Classification', 'Embeddings', 'BERT', 'Information Extraction'],
      },
      {
        title:       'Machine Learning in Project Management',
        description: 'Using ML models to predict project outcomes, estimate effort, and detect risk indicators early in the software development lifecycle.',
        keywords:    ['Effort Estimation', 'Risk Prediction', 'Classification', 'Regression'],
      },
    ],
    publications: [
      {
        title: "Master's Dissertation — Process Improvement in Software Engineering via Data Mining and NLP",
        venue: 'PPGCC, Federal University of Santa Maria',
        year:  '2022',
      },
    ],
  },

  // ── Skills ────────────────────────────────────────────
  skills: {
    eyebrow: 'Expertise',
    heading: 'My Skillset',
  },

  // ── Projects ──────────────────────────────────────────
  projects: {
    eyebrow: 'Selected Work',
    heading: 'Featured Projects',
    items: [
      {
        title:       'Pretty Sales',
        description: 'Point-of-sale application covering user, product, sale and payment management with SQLite backend. Built to be lightweight and self-contained.',
        tags:        ['C#', 'SQLite', 'Desktop', 'POS'],
        status:      'v1.0',
      },
      {
        title:       'Virtual Assistant',
        description: 'Conversational assistant exploring NLP techniques and natural language understanding, aligned with my graduate research in applied ML.',
        tags:        ['Python', 'NLP', 'AI', 'ML'],
        status:      'In Progress',
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────
  faq: {
    eyebrow: 'Common Questions',
    heading: 'Frequently Asked',
    items: [
      {
        question: 'What is your main area of expertise?',
        answer:   'I sit at the intersection of software engineering and applied research. On the engineering side I build desktop, web and mobile applications. On the research side, I apply Machine Learning and NLP to solve Software Engineering challenges — process improvement, effort estimation, and artifact analysis.',
      },
      {
        question: 'Are you open to research collaborations or academic work?',
        answer:   "Absolutely. I am interested in collaborative research in Software Engineering, ML/NLP, and Project Management. If you have an interesting problem or ongoing project, don't hesitate to reach out.",
      },
      {
        question: 'What programming languages do you work with?',
        answer:   'My primary languages are Python (for ML/data work), C# and C++ (systems and desktop), and TypeScript/JavaScript (web). I also write SQL daily and am comfortable picking up new languages when the project calls for it.',
      },
      {
        question: 'Do you take on freelance or consulting work?',
        answer:   'Yes. I am available for software development projects, technical consulting, and quality assurance work. I prefer projects where there is an interesting engineering or research challenge involved.',
      },
      {
        question: 'Where can I read your research?',
        answer:   'My academic profile is on the Lattes platform (CNPq), which indexes Brazilian academic production. You can find my dissertation and other academic work there.',
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────
  contact: {
    eyebrow:   'Get in Touch',
    heading:   'Contact',
    lead:      'Whether you have a research idea, a project in mind, or simply want to talk about software and science — my inbox is open.',
    available: 'Available for new opportunities',
    cta:       ['Let\'s build something', 'great together.'],
    linkedin:  'Connect on LinkedIn ↗',
    github:    'View GitHub ↗',
    footer:    'Vue · TypeScript · Vite',
  },
}
