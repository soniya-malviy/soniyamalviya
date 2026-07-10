export type Link = { label: string; href: string }

export type Project = {
  name: string
  description: string
  stack: string[]
  bullets: string[]
  githubUrl?: string
  demoUrl?: string
  gradient: string
  icon?: string
  image?: string
}

export type Experience = {
  title: string
  org: string
  location?: string
  dates: string
  bullets: string[]
  demoUrl?: string
}

export const profile = {
  name: 'Soniya Malviya',
  headline:
    'Full-Stack Developer and AI/ML Enthusiast building user-centric applications and scalable systems powered by LLMs, Retrieval-Augmented Generation (RAG), and modern ML pipelines.',

  email: 'soniya.04malviya@gmail.com',

  links: [
    { label: 'GitHub', href: 'https://github.com/soniya-malviy' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/soniya-malviya-b3832a236/' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/soniyamalviya/' },
    {
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1MFoc3atRFbFut_QusslShBU5lIoBDKJE/view?usp=sharing',
    },
  ] satisfies Link[],
  education: [
    {
      school: 'Rishihood University, Sonipat, Haryana',
      degree: 'B.Tech in Computer Science & Artificial Intelligence',
      dates: 'Aug 2023 – Jul 2027',
      gpa: '8.20 / 10',
      type: 'college',
    },
    {
      school: 'Shanti Bal Mandir, Indore, MP',
      degree: 'Senior Secondary (XII) — PCM',
      dates: '2021 – 2022',
      gpa: '79%',
      type: 'school',
    },
    {
      school: 'Kendriyala Vidyalaya, Khandwa, MP',
      degree: 'Secondary (X)',
      dates: '2019 – 2020',
      gpa: '82.2%',
      type: 'school',
    },
  ] as { school: string; degree: string; dates: string; gpa: string; type: 'college' | 'school' }[],
  skills: {
    programming: ['Python', 'JavaScript', 'TypeScript'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
    backend: ['RESTful API Design', 'JWT Authentication', 'MERN Stack'],
    databases: ['MongoDB', 'PostgreSQL', 'SQL'],
    AIMl: [
      'Transformers',
      'Attention Mechanisms',
      'RAG Pipelines',
      'Machine Learning Models',
      'Vision Transformer',
    ],
    tools: ['Git', 'GitHub', 'AWS (EC2, S3)'],
    CoodingAgents: ['Codex CLI, Opencode CLI , Claude and more'],
    problemSolving: [
      'Solved 100+ Data Structures & Algorithms problems, SQL problems on LeetCode',
      'Comfortable analyzing and optimizing time and space complexity',
    ],
  },
  projects: [
    {
      name: 'IntelliDocs',
      description:
        'AI-Powered Document Intelligence System — a RAG pipeline for document-based Q&A with smart chunking, embeddings, semantic search, and citation-backed answers.',
      stack: ['LangChain', 'LlamaIndex', 'Python', 'OpenAI', 'MERN'],
      bullets: [
        'Built a Retrieval-Augmented Generation (RAG) system for document-based Q&A',
        'Implemented PDF ingestion with smart chunking, embeddings, and semantic search',
        'Reduced hallucinations by grounding responses in retrieved document context',
        'Enabled citation-backed answers linked to original document pages',
        'Backend deployed on AWS and frontend on Vercel',
      ],
      githubUrl: 'https://github.com/soniya-malviy/IntelliDocs',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    
      image: '/assets/intellidocs.png',
    },
    {
      name: 'CureConnect',
      description:
        'Full-stack healthcare appointment platform with role-based auth, doctor onboarding, and real-time booking — built on the MERN stack.',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
      bullets: [
        'Developed a full-stack healthcare platform with role-based authentication',
        'Designed REST APIs for appointment booking, user management, and doctor onboarding',
        'Implemented secure JWT-based authentication and protected routes',
        'Optimized MongoDB queries and indexing to improve API performance',
      ],
      githubUrl: 'https://github.com/soniya-malviy/CureConnectFullSatck',
      demoUrl: 'https://cure-connect-full-satck.vercel.app/',
      gradient: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
      
      image: '/assets/cureconnect.jpeg',
    },
    {
      name: 'Supermart Grocery Sales Analytics & Forecasting',
      description:
        'Through extensive exploratory analysis and statistical modeling of the transaction history, we discovered several critical drivers of sales volume and profitability',
      stack: [ 'Python', 'Pandas', 'Scikit-learn', 'Prophet', 'ARIMA', 'XGBoost', 'SQL'],
      bullets: [
        'Engineered lag features, rolling statistics, and discount impact metrics from 4-year retail dataset; evaluated 5 time-series models using TimeSeriesSplit CV',
        'Prophet achieved MAPE: 10.35%, R Sqaure: 0.86; identified 25% revenue leakage from discounting and delivered actionable inventory optimisation recommendations',
      ],
      githubUrl: 'https://github.com/soniya-malviy/Supermart-Grocery-Sale-Analytics-and-Forecasting',
      demoUrl: 'https://www.loom.com/share/8bf8b5b70e3a40f2ab576eee3458e08d',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',

      image: '/assets/supermart.png',
    },
    {
      name: 'ShopSmart AI',
      description:
        'Multimodal RAG E-Commerce Product Assistant — combines Vision AI, Vector Search, and LLM for intelligent product recommendations.',
      stack: ['Streamlit', 'FAISS', 'sentence-transformers', 'Python', 'LLM'],
      bullets: [
        'An AI-powered shopping assistant that combines Vision AI, Vector Search, and LLM',
        'to answer product queries with rich, contextual responses.',
        'Upload a product image, ask a question, and get intelligent recommendations.',
      ],
      githubUrl: 'https://github.com/soniya-malviy/ShopSmart-AI',
      demoUrl: 'https://shopsmart-ai-d3cpi8sjagcm3adbwtmyru.streamlit.app/',
      gradient: 'linear-gradient(135deg, #f5af19 0%, #f12711 100%)',
     
      image: '/assets/shopsmartai.jpeg',
    },
    {
      name: 'GRAVITY',
      description:
        'GraphQL Data Completeness Visualizer — a configuration-driven web app with interactive D3.js heatmap and an agentic AI layer.',
      stack: ['React 18', 'Vite', 'TypeScript', 'D3.js', 'Node.js', 'Groq API', 'Zustand'],
      bullets: [
        'A configuration-driven web application that visualizes data completeness across GraphQL datasets using an interactive D3.js heatmap, powered by an agentic AI layer.',
      ],
      githubUrl: 'https://github.com/soniya-malviy/Gravity-',
      demoUrl: 'https://gravity-frontend-one.vercel.app/',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    
      image: '/assets/gravity.jpeg',
    },
    {
      name: 'Approximate Computing in OS Process Scheduling',
      description:
        'The Linux CFS scheduler calls calc_load() every 5 seconds to update system load averages. This research replaces the 3-cycle IMUL with 1-cycle approximations to reduce scheduler overhead on high-core-count servers.',
      stack: ['HTML', 'CSS', 'JavaScript', 'Linux Kernel', 'C'],
      bullets: [
        'Designed and formally verified three error-bounded approximation methods (bit-shift, LUT, polynomial) for the Linux kernels calc_load() scheduler function, deriving ε-bounds via perturbation analysis and validating them against real kernel fixed-point constants across 300–500 simulated scheduler ticks.',
        'Achieved a 67% reduction in per-operation CPU cycles (3→1) with the bit-shift variant while maintaining Jains Fairness Index ≥ 0.90 across all load regimes, and benchmarked EEVDF vs. CFS scheduling latency to quantify deadline-aware scheduling tradeoffs.'
      ],
      githubUrl: 'https://github.com/soniya-malviy/OS_DEMO',
      demoUrl: 'https://soniya-malviy.github.io/OS_DEMO/cfs-approx/',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    
      image: '/assets/linux.jpeg',
    },
  ] satisfies Project[],
  experience: [
    {
      title: 'Full Stack Intern',
      org: 'IIT Roorkee',
      location: 'Remote',
      dates: 'Nov 2024 – Apr 2025',
      bullets: [
        'Worked on Viksit Bharat Project providing access to government schemes and jobs',
        'Built features to save schemes, report issues, and submit user feedback',
        'Integrated frontend and backend for smooth data flow and user experience',
      ],
      demoUrl: 'https://empowerhub.info/',
    },
    {
      title: 'Open Source Contributor',
      org: 'JupyterLab, OpenStreetMap, GSSoC',
      location: 'Remote',
      dates: 'Oct 2024 – Present',
      bullets: [
        'Merged 15+ Pull Requests during GSSoC and across JupyterLab and OpenStreetMap, enhancing developer tooling and platform usability',
        'Developed UI components, improved documentation, and resolved bugs in AI/data science tooling',
        'Tech: TypeScript, Python, React, JupyterLab Extensions, Git',
      ],
      demoUrl:
        'https://docs.google.com/document/d/1IQBpDrqBh0iieHKpgRVIc4-iI6xsSJEagniSx-p_Cgk/edit?tab=t.0',
    },
  ] satisfies Experience[],
  certifications: [
    'Foundations of Cybersecurity — Google',
    'Linear Algebra for Machine Learning — DeepLearning.AI',
    'Deloitte Australia — Cyber Job Simulation (Forage)',
  ],
  leadership: [
    'NCC Cadet, MP 36 Battalion — completed 10-day leadership training camp',
    'Led and represented a student body of 200+ peers',
  ],
} as const
