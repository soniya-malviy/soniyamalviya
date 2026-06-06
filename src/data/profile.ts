export type Link = { label: string; href: string }

export type Project = {
  name: string
  stack: string[]
  bullets: string[]
  githubUrl?: string
  demoUrl?: string
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
  headline: 'Full-Stack Developer and AI/ML Enthusiast building user-centric applications and scalable systems powered by LLMs, Retrieval-Augmented Generation (RAG), and modern ML pipelines.',
  
  email: 'soniya.04malviya@gmail.com',
  
  links: [
    { label: 'GitHub', href: 'https://github.com/soniya-malviy' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/soniya-malviya-b3832a236/' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/soniyamalviya/' },
    {
      label: 'Resume',
      href: '../public/soniya_malviya_.pdf',
    },
  ] satisfies Link[],
  education: [
    {
      school: 'Rishihood University, Sonipat, Haryana',
      degree: 'B.Tech in Computer Science & Artificial Intelligence',
      dates: 'Aug 2023 – Jul 2027',
      gpa: '8.01 / 10',
    },
  ],
  skills: {
    programming: ['Python', 'JavaScript', 'TypeScript'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
    backend: ['RESTful API Design', 'JWT Authentication', 'MERN Stack'],
    databases: ['MongoDB', 'PostgreSQL', 'SQL'],
    AIMl: ['Transformers', 'Attention Mechanisms', 'RAG Pipelines', 'Machine Learning Models', 'Vision Transformer'],
    tools: ['Git', 'GitHub', 'AWS (EC2, S3)'],
    CoodingAgents:['Codex CLI, Opencode CLI , Claude and more'],
    problemSolving: [
      'Solved 100+ Data Structures & Algorithms problems, SQL problems on LeetCode',
      'Comfortable analyzing and optimizing time and space complexity',
    ],
  },
  projects: [
    {
      name: 'IntelliDocs — AI-Powered Document Intelligence System',
      stack: ['LangChain', 'LlamaIndex', 'Python', 'OpenAI', 'MERN'],
      bullets: [
        'Built a Retrieval-Augmented Generation (RAG) system for document-based Q&A',
        'Implemented PDF ingestion with smart chunking, embeddings, and semantic search',
        'Reduced hallucinations by grounding responses in retrieved document context',
        'Enabled citation-backed answers linked to original document pages',
        'Backend deployed on AWS and frontend on Vercel'
      ],
      githubUrl: 'https://github.com/soniya-malviy/IntelliDocs',
  
    },
    {
      name: 'CureConnect — Healthcare Appointment Platform',
      stack: ['MongoDB', 'Express', 'React', 'Node.js'],
      bullets: [
        'Developed a full-stack healthcare platform with role-based authentication',
        'Designed REST APIs for appointment booking, user management, and doctor onboarding',
        'Implemented secure JWT-based authentication and protected routes',
        'Optimized MongoDB queries and indexing to improve API performance',
      ],
      githubUrl: 'https://github.com/soniya-malviy/CureConnectFullSatck',
      demoUrl: 'https://cure-connect-full-satck.vercel.app/',
    },
    {
      name: 'Train GPT-2 Transformer from Scratch',
      stack: ['Python', 'Kaggle'],
      bullets: [
        'Implemented multi-head self-attention and scaled dot-product attention',
        'Gained hands-on understanding of transformer internals and sequence modeling',
      ],
      githubUrl: 'https://github.com/soniya-malviy/Train-GPT-2-Transformer-from-Scratch',
    },
     {
      name: 'ShopSmart AI — Multimodal RAG E-Commerce Product Assistant',
      stack: ['Streamlit', 'FAISS (local)', 'sentence-transformers (all-MiniLM-L6-v2)', 'Python 3.9+', 'LLM'],
      bullets: [
        'An AI-powered shopping assistant that combines Vision AI, Vector Search, and LLM',
        'to answer product queries with rich, contextual responses. ',
        'Upload a product image, ask a question, and get intelligent recommendations.',
      ],
      githubUrl: 'https://github.com/soniya-malviy/ShopSmart-AI',
      demoUrl: 'https://shopsmart-ai-d3cpi8sjagcm3adbwtmyru.streamlit.app/',
    },
     {
      name: 'GRAVITY - GraphQL Data Completeness Visualizer',
      stack: [
        'Frontend: React 18 + Vite + TypeScript + Tailwind CSS + D3.js',
'Backend: Node.js + Express (Proxy & AI Routes',
'AI Layer: Groq API (Schema Analysis, Anomaly Detection, NL Query)',
'State: Zustand'
      ],
      bullets: [
        'A configuration-driven web application that visualizes data completeness across GraphQL datasets using an interactive D3.js heatmap, powered by an agentic AI layer.'
      ],
      githubUrl: 'https://github.com/soniya-malviy/Gravity-',
      demoUrl: 'https://gravity-frontend-one.vercel.app/',
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
      demoUrl: 'https://empowerhub.info/'
    },
    {
      title: 'Open Source Contributor',
      org: 'JupyterLab, OpenStreetMap, GSSoC',
      location: 'Remote',
      dates: 'Oct 2024 – Present',
      bullets: ['Merged 15+ Pull Requests during GSSoC and across JupyterLab and OpenStreetMap, enhancing developer tooling and platform usability',
        'Developed UI components, improved documentation, and resolved bugs in AI/data science tooling',
        'Tech: TypeScript, Python, React, JupyterLab Extensions, Git'
      ],
      demoUrl:"https://docs.google.com/document/d/1IQBpDrqBh0iieHKpgRVIc4-iI6xsSJEagniSx-p_Cgk/edit?tab=t.0"
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

