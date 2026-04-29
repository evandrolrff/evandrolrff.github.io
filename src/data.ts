// ─── Types ───────────────────────────────────────────────────────

export interface Stat { value: string; label: string }
export interface Experience { role: string; company: string; period: string; location: string; bullets: string[] }
export interface Education { degree: string; institution: string; period: string; url: string; highlight?: boolean }
export interface Project { title: string; description: string; url: string; tags: string[]; status?: string }
export interface SkillGroup { category: string; items: string[] }
export interface ResearchArea { title: string; description: string; keywords: string[] }
export interface Publication { title: string; venue: string; year: string; url?: string }
export interface FAQ { question: string; answer: string }
export interface Social { label: string; url: string; handle?: string }

// ─── Bio ─────────────────────────────────────────────────────────

export const bio = {
  name: 'Evandro Fensterseifer',
  monogram: 'EF',
  headline: ['Computer', 'Scientist', '& Engineer'],
  tagline: 'Bridging academic research and software engineering to build things that matter.',
  location: 'Santa Maria, RS — Brazil',
  available: true,
}

// ─── Stats ───────────────────────────────────────────────────────

export const stats: Stat[] = [
  { value: '10+', label: 'Years in tech' },
  { value: 'M.Sc.', label: 'Computer Science' },
  { value: '4+', label: 'Degrees & certs' },
  { value: 'ML/NLP', label: 'Research focus' },
]

// ─── Experience ──────────────────────────────────────────────────

export const experience: Experience[] = [
  {
    role: 'Technical Education Teacher',
    company: 'UFSM — Special Teacher Training',
    period: '2023 – 2024',
    location: 'Santa Maria, BR',
    bullets: [
      'Taught software development and computer science fundamentals to technical students',
      'Developed didactic materials integrating theory with hands-on programming practice',
      'Mentored students on individual projects and academic pathways',
    ],
  },
  {
    role: 'Researcher — Software Engineering & ML',
    company: 'PPGCC / UFSM',
    period: '2019 – 2022',
    location: 'Santa Maria, BR',
    bullets: [
      'Conducted research on process improvement in Software Engineering using ML and NLP techniques',
      'Applied Data Mining methods to extract insights from software project datasets',
      'Published findings and participated in academic conferences in the field',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Various projects',
    period: '2015 – 2019',
    location: 'Santa Maria, BR',
    bullets: [
      'Developed desktop and web applications in C# and C++ for diverse business domains',
      'Performed Quality Assurance activities — test planning, execution and defect tracking',
      'Delivered mobile and web solutions with focus on usability and reliability',
    ],
  },
]

// ─── Education ───────────────────────────────────────────────────

export const education: Education[] = [
  {
    degree: "Bachelor's — Special Teacher Training Program",
    institution: 'Federal University of Santa Maria',
    period: '2023 – 2024',
    url: 'https://www.ufsm.br/cursos/graduacao/santa-maria/programa-especial-de-graduacao',
  },
  {
    degree: "Master's in Computer Science",
    institution: 'Federal University of Santa Maria',
    period: '2019 – 2022',
    url: 'https://www.ufsm.br/cursos/pos-graduacao/santa-maria/ppgcc',
    highlight: true,
  },
  {
    degree: "Bachelor's in Information Systems",
    institution: 'Federal University of Santa Maria',
    period: '2013 – 2018',
    url: 'https://www.ufsm.br/cursos/graduacao/santa-maria/sistemas-de-informacao',
  },
  {
    degree: 'Computer Technician',
    institution: 'Federal University of Santa Maria',
    period: '2012 – 2015',
    url: 'https://www.ufsm.br/cursos/tecnico/santa-maria/informatica',
  },
]

// ─── Projects ────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: 'Pretty Sales',
    description:
      'Point-of-sale application covering user, product, sale and payment management with SQLite backend. Built to be lightweight and self-contained.',
    url: 'https://github.com/evandrolrff/-prettySales',
    tags: ['C#', 'SQLite', 'Desktop', 'POS'],
    status: 'v1.0',
  },
  {
    title: 'Virtual Assistant',
    description:
      'Conversational assistant exploring NLP techniques and natural language understanding, aligned with my graduate research in applied ML.',
    url: 'https://github.com/evandrolrff/VirtualAssistant',
    tags: ['Python', 'NLP', 'AI', 'ML'],
    status: 'In Progress',
  },
]

// ─── Skills ──────────────────────────────────────────────────────

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['Python', 'C#', 'C++', 'TypeScript', 'JavaScript', 'SQL'] },
  { category: 'Research & ML', items: ['Machine Learning', 'NLP', 'Data Mining', 'Scikit-learn', 'NLTK', 'Pandas'] },
  { category: 'Web & Mobile', items: ['Vue.js', 'React', 'Node.js', 'HTML/CSS', 'REST APIs'] },
  { category: 'Engineering', items: ['Software Architecture', 'Quality Assurance', 'Agile/Scrum', 'Git', 'Docker'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB'] },
  { category: 'Tools', items: ['VS Code', 'Jupyter', 'Postman', 'GitHub Actions', 'Linux'] },
]

// ─── Research ────────────────────────────────────────────────────

export const research: ResearchArea[] = [
  {
    title: 'Process Improvement in Software Engineering',
    description:
      'Investigation of techniques to identify patterns and anomalies in software development processes, using data-driven approaches to suggest improvements.',
    keywords: ['CMMI', 'MPS.BR', 'Process Mining', 'Metrics'],
  },
  {
    title: 'Natural Language Processing for SE',
    description:
      'Application of NLP methods to software engineering artifacts — requirements documents, bug reports, code comments — to automate classification and analysis.',
    keywords: ['Text Classification', 'Embeddings', 'BERT', 'Information Extraction'],
  },
  {
    title: 'Machine Learning in Project Management',
    description:
      'Using ML models to predict project outcomes, estimate effort, and detect risk indicators early in the software development lifecycle.',
    keywords: ['Effort Estimation', 'Risk Prediction', 'Classification', 'Regression'],
  },
]

export const publications: Publication[] = [
  {
    title: 'Master\'s Dissertation — Process Improvement in Software Engineering via Data Mining and NLP',
    venue: 'PPGCC, Federal University of Santa Maria',
    year: '2022',
    url: 'http://lattes.cnpq.br/9397689282024193',
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  {
    question: 'What is your main area of expertise?',
    answer:
      'I sit at the intersection of software engineering and applied research. On the engineering side I build desktop, web and mobile applications. On the research side, I apply Machine Learning and NLP to solve Software Engineering challenges — process improvement, effort estimation, and artifact analysis.',
  },
  {
    question: 'Are you open to research collaborations or academic work?',
    answer:
      'Absolutely. I am interested in collaborative research in Software Engineering, ML/NLP, and Project Management. If you have an interesting problem or ongoing project, feel free to reach out.',
  },
  {
    question: 'What programming languages do you work with?',
    answer:
      'My primary languages are Python (for ML/data work), C# and C++ (systems and desktop), and TypeScript/JavaScript (web). I also write SQL daily and am comfortable picking up new languages when the project calls for it.',
  },
  {
    question: 'Do you take on freelance or consulting work?',
    answer:
      'Yes. I am available for software development projects, technical consulting, and quality assurance work. I prefer projects where there is an interesting engineering or research challenge involved.',
  },
  {
    question: 'Where can I read your research?',
    answer:
      'My academic profile is on the Lattes platform (CNPq), which indexes Brazilian academic production. You can find my dissertation and other academic work there.',
  },
]

// ─── Socials ─────────────────────────────────────────────────────

export const socials: Social[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/evandro-luis-rosa-fensterseifer-filho-912919208/', handle: 'evandrolrff' },
  { label: 'GitHub',   url: 'https://github.com/evandrolrff', handle: 'evandrolrff' },
  { label: 'Lattes',   url: 'http://lattes.cnpq.br/9397689282024193', handle: 'CNPq Lattes' },
]
