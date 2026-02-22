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
      href: '../public/Soniya_Malviya_Resume.pdf',
    },
  ] satisfies Link[],
  education: [
    {
      school: 'Rishihood University, Sonipat, Haryana',
      degree: 'B.Tech in Computer Science & Artificial Intelligence',
      dates: 'Aug 2023 – Jul 2027',
      gpa: '8.5 / 10',
    },
  ],
  skills: {
    programming: ['Python', 'JavaScript', 'TypeScript'],
    frameworks: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
    backend: ['RESTful API Design', 'JWT Authentication'],
    databases: ['MongoDB', 'PostgreSQL', 'SQL'],
    aiMl: ['Transformers', 'Attention Mechanisms', 'RAG Pipelines'],
    tools: ['Git', 'GitHub', 'AWS (EC2, S3)', 'Linux'],
    problemSolving: [
      'Solved 100+ Data Structures & Algorithms problems, SQL problems on LeetCode',
      'Strong in Arrays, Strings, Trees, Graphs, Recursion, Dynamic Programming',
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
      ],
      githubUrl: 'https://github.com/soniya-malviy/IntelliDocs',
      demoUrl: 'https://intelli-docs-ten.vercel.app',
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
      title: 'Mentor',
      org: 'GirlScript Summer of Code',
      location: 'Remote',
      dates: 'Oct 2024 – Nov 2024',
      bullets: ['Mentored contributors and reviewed code for quality and scalability'],
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

