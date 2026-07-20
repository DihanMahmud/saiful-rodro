// =========================================================
// Saiful Islam — Personal Portfolio Data
// AI-Enabled Software Engineer
// =========================================================

// Core skills organized by expertise level
export const skills = {
  primary: [
    { name: "Node.js", level: 95, category: "Backend" },
    { name: "Python", level: 90, category: "Backend" },
    { name: "JavaScript (ES6+)", level: 95, category: "Languages" },
    { name: "TypeScript", level: 85, category: "Languages" },
    { name: "Express.js", level: 92, category: "Frameworks" },
    { name: "Next.js", level: 88, category: "Frameworks" },
  ],
  ai: [
    { name: "LangChain", level: 85, category: "AI/ML" },
    { name: "OpenAI API", level: 90, category: "AI/ML" },
    { name: "RAG Systems", level: 82, category: "AI/ML" },
    { name: "LLMs", level: 88, category: "AI/ML" },
    { name: "Vector Databases", level: 80, category: "AI/ML" },
    { name: "Pinecone", level: 78, category: "AI/ML" },
  ],
  databases: [
    { name: "PostgreSQL", level: 88, category: "Databases" },
    { name: "MongoDB", level: 92, category: "Databases" },
    { name: "Redis", level: 82, category: "Databases" },
    { name: "MySQL", level: 80, category: "Databases" },
  ],
  devops: [
    { name: "Docker", level: 85, category: "DevOps" },
    { name: "AWS (EC2, Lambda, S3)", level: 78, category: "DevOps" },
    { name: "CI/CD Pipelines", level: 85, category: "DevOps" },
    { name: "Linux", level: 88, category: "DevOps" },
    { name: "Nginx", level: 80, category: "DevOps" },
  ],
};

// Featured projects - AI/GenAI focused
export const projects = [
  {
    id: "intelitalk",
    name: "InteliTalk",
    tagline: "AI-Powered University Assistant",
    description:
      "An intelligent conversational assistant built for university environments. Uses LangChain and GPT models with RAG for context-aware interactions, helping students and faculty get instant answers to campus-related queries.",
    features: [
      "RAG-based context-aware conversations",
      "LangChain + OpenAI GPT integration",
      "University-specific knowledge base",
      "Real-time response streaming",
      "Docker containerized deployment",
    ],
    tech: ["Node.js", "LangChain", "OpenAI", "PostgreSQL", "Docker"],
    liveDemo: "https://youtu.be/R0p2bsoRuso?si=lbnyavn_ZTtBvFnk",
    github: "https://github.com/dev-saiful/InteliTalk",
    category: "AI/GenAI",
    highlight: true,
  },
  {
    id: "url-shortener",
    name: "URL Shortener Service",
    tagline: "Production-Ready URL Management",
    description:
      "A scalable URL shortening service built with NestJS, Redis, and PostgreSQL. Features JWT authentication, rate limiting, analytics tracking, and high-performance redirect handling.",
    features: [
      "NestJS architecture",
      "Redis caching for instant redirects",
      "JWT authentication system",
      "Rate limiting & abuse prevention",
      "Click analytics & tracking",
    ],
    tech: ["NestJS", "Redis", "PostgreSQL", "JWT", "TypeScript"],
    liveDemo: "#",
    github: "https://github.com/dev-saiful",
    category: "Backend",
    highlight: true,
  },
  {
    id: "codecollab",
    name: "CodeCollab",
    tagline: "Developer Q&A Platform",
    description:
      "A collaborative Q&A platform for developers built with the MERN stack. Features Codeforces rating-based answer restrictions, voting system, and CI/CD deployment on Azure.",
    features: [
      "Codeforces rating integration",
      "Voting & comment system",
      "CI/CD pipeline on Azure",
      "Real-time notifications",
      "User reputation system",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Azure"],
    liveDemo: "https://codecollab-ochre.vercel.app",
    github: "https://github.com/dev-saiful/codecolab-server",
    category: "Full Stack",
    highlight: false,
  },
  {
    id: "nasstore",
    name: "NasStore",
    tagline: "Full-Stack eCommerce Solution",
    description:
      "A complete eCommerce platform with product management, cart system, user authentication, order processing, and payment gateway integration.",
    features: [
      "Product catalog & search",
      "Shopping cart management",
      "Payment gateway integration",
      "Order tracking system",
      "Admin dashboard",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Stripe"],
    liveDemo: "https://nasstore.vercel.app",
    github: "https://github.com/dev-saiful/nasShop-server",
    category: "Full Stack",
    highlight: false,
  },
  {
    id: "nasa-mission",
    name: "NASA Mission Control",
    tagline: "Space Data Analysis Platform",
    description:
      "A data analysis platform that processes NASA CSV datasets to identify habitable planets. Built with MERN stack, PM2 process management, and Docker containerization.",
    features: [
      "CSV dataset processing",
      "Planet habitability analysis",
      "PM2 process management",
      "Docker deployment",
      "Data visualization",
    ],
    tech: ["MongoDB", "Express.js", "React", "Node.js", "Docker"],
    liveDemo: "https://accused-barbee-sadman-shaon-51afef37.koyeb.app",
    github: "https://github.com/dev-saiful/Nasa_Project",
    category: "Data Science",
    highlight: false,
  },
];

// Social links
export const socialLinks = {
  github: "https://github.com/dev-saiful",
  linkedin: "https://www.linkedin.com/in/dev-saiful/",
  twitter: "https://x.com/dev_saiful",
  facebook: "https://www.facebook.com/jsdev.saiful",
  email: "hello@saifulislam.com",
};

// Personal stats for hero section
export const personalStats = [
  { value: 15, suffix: "+", label: "Businesses Helped" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 40, suffix: "%", label: "Avg Efficiency Gain" },
  { value: 24, suffix: "h", label: "Response Time" },
];

// Certification badges
export const certifications = [
  {
    name: "API Design in Node.js",
    issuer: "FrontendMasters",
    icon: "code",
  },
  {
    name: "Generative AI: Introduction",
    issuer: "IBM",
    icon: "brain",
  },
  {
    name: "Complete NodeJS Developer",
    issuer: "Zero to Mastery",
    icon: "server",
  },
];
