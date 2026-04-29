export default {
  // ── Nav ──────────────────────────────────────────────
  nav: {
    home:       'Início',
    experience: 'Experiência',
    research:   'Pesquisa',
    skills:     'Habilidades',
    projects:   'Projetos',
    faq:        'FAQ',
    contact:    'Contato',
    cta:        'Fale Comigo',
  },

  // ── Hero ─────────────────────────────────────────────
  hero: {
    available:  'Disponível para colaborações',
    greeting:   'Olá, eu sou o Evandro',
    headline:   ['Cientista da', 'Computação', '& Engenheiro'],
    tagline:    'Unindo pesquisa acadêmica e engenharia de software para construir coisas que importam.',
    cta:        'Entre em Contato ↗',
    ctaSecond:  'Ver Projetos',
    scroll:     'rolar',
    stats: [
      { value: '10+',    label: 'Anos em tech' },
      { value: 'M.Sc.',  label: 'Ciência da Computação' },
      { value: '4+',     label: 'Formações' },
      { value: 'ML/NLP', label: 'Foco de pesquisa' },
    ],
  },

  // ── Experience ────────────────────────────────────────
  experience: {
    eyebrow:  'Minha Trajetória',
    heading:  'Experiência & Formação',
    tabExp:   'Experiência',
    tabEdu:   'Educação',
    items: [
      {
        role:     'Professor de Educação Técnica',
        company:  'UFSM — Programa Especial de Graduação',
        period:   '2023 – 2024',
        location: 'Santa Maria, BR',
        bullets: [
          'Ministrei disciplinas de desenvolvimento de software e fundamentos de ciência da computação a alunos técnicos.',
          'Desenvolvi materiais didáticos integrando teoria com prática de programação.',
          'Orientei alunos em projetos individuais e trajetórias acadêmicas.',
        ],
      },
      {
        role:     'Pesquisador — Engenharia de Software & ML',
        company:  'PPGCC / UFSM',
        period:   '2019 – 2022',
        location: 'Santa Maria, BR',
        bullets: [
          'Pesquisei melhoria de processos em Engenharia de Software com técnicas de ML e PLN.',
          'Apliquei mineração de dados para extrair insights de conjuntos de dados de projetos de software.',
          'Publiquei resultados e participei de conferências acadêmicas na área.',
        ],
      },
      {
        role:     'Desenvolvedor de Software',
        company:  'Projetos diversos',
        period:   '2015 – 2019',
        location: 'Santa Maria, BR',
        bullets: [
          'Desenvolvi aplicações desktop e web em C# e C++ para diversos domínios de negócio.',
          'Realizei atividades de Garantia da Qualidade — planejamento de testes, execução e rastreamento de defeitos.',
          'Entreguei soluções mobile e web com foco em usabilidade e confiabilidade.',
        ],
      },
    ],
    education: [
      { degree: 'Licenciatura — Programa Especial de Graduação',  institution: 'Universidade Federal de Santa Maria', period: '2023 – 2024' },
      { degree: 'Mestrado em Ciência da Computação',              institution: 'Universidade Federal de Santa Maria', period: '2019 – 2022', highlight: true },
      { degree: 'Bacharelado em Sistemas de Informação',          institution: 'Universidade Federal de Santa Maria', period: '2013 – 2018' },
      { degree: 'Técnico em Informática',                         institution: 'Universidade Federal de Santa Maria', period: '2012 – 2015' },
    ],
  },

  // ── Research ──────────────────────────────────────────
  research: {
    eyebrow:    'Trabalho Acadêmico',
    heading:    'Pesquisa',
    pubHeading: 'Publicações',
    pubVenue:   'Universidade Federal de Santa Maria',
    areas: [
      {
        title:       'Melhoria de Processos em Engenharia de Software',
        description: 'Investigação de técnicas para identificar padrões e anomalias em processos de desenvolvimento de software, usando abordagens orientadas a dados para sugerir melhorias.',
        keywords:    ['CMMI', 'MPS.BR', 'Process Mining', 'Métricas'],
      },
      {
        title:       'Processamento de Linguagem Natural para ES',
        description: 'Aplicação de métodos de PLN em artefatos de engenharia de software — documentos de requisitos, relatórios de bugs, comentários de código — para automatizar classificação e análise.',
        keywords:    ['Classificação de Texto', 'Embeddings', 'BERT', 'Extração de Informação'],
      },
      {
        title:       'Aprendizado de Máquina em Gerência de Projetos',
        description: 'Uso de modelos de ML para prever resultados de projetos, estimar esforço e detectar indicadores de risco de forma antecipada no ciclo de vida do desenvolvimento de software.',
        keywords:    ['Estimativa de Esforço', 'Predição de Risco', 'Classificação', 'Regressão'],
      },
    ],
    publications: [
      {
        title: 'Dissertação de Mestrado — Melhoria de Processos em Engenharia de Software via Mineração de Dados e PLN',
        venue: 'PPGCC, Universidade Federal de Santa Maria',
        year:  '2022',
      },
    ],
  },

  // ── Skills ────────────────────────────────────────────
  skills: {
    eyebrow: 'Especialidades',
    heading: 'Minhas Habilidades',
  },

  // ── Projects ──────────────────────────────────────────
  projects: {
    eyebrow: 'Trabalhos Selecionados',
    heading: 'Projetos em Destaque',
    items: [
      {
        title:       'Pretty Sales',
        description: 'Aplicação de ponto de venda com gerenciamento de usuários, produtos, vendas e pagamentos, usando SQLite como backend. Leve e independente de instalações externas.',
        tags:        ['C#', 'SQLite', 'Desktop', 'PDV'],
        status:      'v1.0',
      },
      {
        title:       'Assistente Virtual',
        description: 'Assistente conversacional explorando técnicas de PLN e compreensão de linguagem natural, alinhado com minha pesquisa de pós-graduação em ML aplicado.',
        tags:        ['Python', 'PLN', 'IA', 'ML'],
        status:      'Em andamento',
      },
    ],
  },

  // ── FAQ ───────────────────────────────────────────────
  faq: {
    eyebrow: 'Perguntas Frequentes',
    heading: 'FAQ',
    items: [
      {
        question: 'Qual é sua principal área de especialização?',
        answer:   'Atuo na interseção entre engenharia de software e pesquisa aplicada. No lado da engenharia, construo aplicações desktop, web e mobile. No lado da pesquisa, aplico Machine Learning e PLN para resolver desafios de Engenharia de Software — melhoria de processos, estimativa de esforço e análise de artefatos.',
      },
      {
        question: 'Você está aberto a colaborações em pesquisa ou trabalho acadêmico?',
        answer:   'Com certeza. Tenho interesse em pesquisa colaborativa em Engenharia de Software, ML/PLN e Gerência de Projetos. Se você tem um problema interessante ou um projeto em andamento, entre em contato.',
      },
      {
        question: 'Com quais linguagens de programação você trabalha?',
        answer:   'Minhas linguagens principais são Python (para trabalho com ML/dados), C# e C++ (sistemas e desktop) e TypeScript/JavaScript (web). Também utilizo SQL diariamente e estou confortável em aprender novas linguagens quando o projeto exige.',
      },
      {
        question: 'Você aceita trabalhos freelance ou consultoria?',
        answer:   'Sim. Estou disponível para projetos de desenvolvimento de software, consultoria técnica e trabalhos de garantia de qualidade. Prefiro projetos que envolvam desafios interessantes de engenharia ou pesquisa.',
      },
      {
        question: 'Onde posso ler suas pesquisas?',
        answer:   'Meu perfil acadêmico está na plataforma Lattes (CNPq), que indexa a produção acadêmica brasileira. Lá você encontra minha dissertação e outros trabalhos acadêmicos.',
      },
    ],
  },

  // ── Contact ───────────────────────────────────────────
  contact: {
    eyebrow:   'Entre em Contato',
    heading:   'Contato',
    lead:      'Se você tem uma ideia de pesquisa, um projeto em mente ou simplesmente quer conversar sobre software e ciência — minha caixa de entrada está aberta.',
    available: 'Disponível para novas oportunidades',
    cta:       ['Vamos construir algo', 'incrível juntos.'],
    linkedin:  'Conectar no LinkedIn ↗',
    github:    'Ver GitHub ↗',
    footer:    'Vue · TypeScript · Vite',
  },
}
