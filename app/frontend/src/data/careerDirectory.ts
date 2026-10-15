export interface CareerCategory {
  slug: string;
  name: string;
  description: string;
  roles: string[];
}

export const careerCategories: CareerCategory[] = [
  {
    slug: "cyber-defense-offensive-security-cloud-security",
    name: "Cyber Defense, Offensive Security & Cloud Security",
    description: "Protect systems, investigate threats, test security controls, and secure cloud environments.",
    roles: [
      "Cybersecurity Analyst", "Cybersecurity Engineer", "Security Operations Center (SOC) Analyst",
      "Information Security Analyst", "Penetration Tester", "Ethical Hacker", "Vulnerability Assessment Analyst",
      "Security Consultant", "Digital Forensics Analyst", "Incident Response Analyst", "Threat Intelligence Analyst",
      "Malware Analyst", "Application Security Engineer", "Cloud Security Engineer", "Cloud Security Architect",
      "Network Security Engineer", "Security Auditor", "Governance, Risk & Compliance (GRC) Analyst",
      "Identity and Access Management (IAM) Engineer", "Red Team Specialist", "Blue Team Specialist",
      "Security Researcher",
    ],
  },
  {
    slug: "data-engineering-analytics-databases",
    name: "Data Engineering, Analytics & Databases",
    description: "Build data pipelines, manage databases, and turn reliable data into useful insights.",
    roles: [
      "Data Analyst", "Data Scientist", "Data Engineer", "Big Data Engineer", "Database Administrator (DBA)",
      "Database Developer", "Business Intelligence (BI) Analyst", "Business Intelligence Developer",
      "Analytics Engineer", "Data Architect", "Data Warehouse Engineer", "ETL Developer", "Data Quality Analyst",
      "Data Governance Analyst", "Data Visualization Specialist", "Reporting Analyst", "SQL Developer",
      "Business Analyst (Data-focused)", "Machine Learning Data Engineer", "Cloud Data Engineer",
      "Data Operations Engineer", "Research Data Analyst",
    ],
  },
  {
    slug: "cloud-architecture-devops-platform-reliability",
    name: "Cloud Architecture, DevOps & Platform Reliability",
    description: "Design cloud infrastructure, automate software delivery, and keep production services reliable.",
    roles: [
      "Cloud Engineer", "Cloud Architect", "AWS Solutions Architect", "Azure Cloud Engineer",
      "Google Cloud Engineer", "DevOps Engineer", "Site Reliability Engineer (SRE)", "Platform Engineer",
      "Infrastructure Engineer", "Cloud Infrastructure Engineer", "Cloud Operations Engineer",
      "Kubernetes Engineer", "Containerization Engineer", "Release Engineer", "Build and Deployment Engineer",
      "Automation Engineer", "Infrastructure as Code (IaC) Engineer", "Cloud Consultant", "FinOps Engineer",
      "Systems Reliability Engineer", "CI/CD Engineer", "Cloud Migration Engineer",
    ],
  },
  {
    slug: "programming-languages-core-development",
    name: "Programming Languages & Core Development",
    description: "Develop programming fundamentals and build software, tools, and services with modern languages.",
    roles: [
      "Python Developer", "Java Developer", "JavaScript Developer", "C++ Developer", "C# Developer", "Go Developer",
      "Rust Developer", "PHP Developer", "Ruby Developer", "Software Developer", "Software Engineer",
      "Application Developer", "Systems Programmer", "API Developer", "Backend Software Engineer",
      "Embedded Software Developer", "Compiler Engineer", "Software Development Engineer", "Automation Developer",
      "Desktop Application Developer", "Technical Software Consultant", "Firmware Developer",
    ],
  },
  {
    slug: "machine-learning-deep-learning-computer-vision",
    name: "Machine Learning, Deep Learning & Computer Vision",
    description: "Train, evaluate, and deploy intelligent models for prediction, perception, and automation.",
    roles: [
      "Machine Learning Engineer", "Artificial Intelligence Engineer", "Deep Learning Engineer",
      "Computer Vision Engineer", "AI Research Scientist", "Machine Learning Researcher", "Applied AI Engineer",
      "Robotics AI Engineer", "Image Processing Engineer", "Speech Recognition Engineer",
      "Predictive Analytics Engineer", "Natural Language Processing Engineer", "MLOps Engineer",
      "AI Solutions Architect", "Autonomous Systems Engineer", "Recommendation Systems Engineer",
      "AI Model Developer", "Data Science Engineer", "Perception Engineer", "Generative AI Engineer",
    ],
  },
  {
    slug: "frontend-backend-full-stack-web",
    name: "Frontend, Backend & Full-Stack Web",
    description: "Create accessible web experiences, robust server APIs, and complete applications from interface to data layer.",
    roles: [
      "Frontend Developer", "Backend Developer", "Full-Stack Developer", "Web Developer",
      "Web Application Developer", "UI Developer", "JavaScript Developer", "React Developer", "Angular Developer",
      "Vue.js Developer", "Node.js Developer", "PHP Web Developer", "WordPress Developer", "E-commerce Developer",
      "Web Application Engineer", "API Integration Developer", "Web Performance Engineer",
      "Web Accessibility Specialist", "Web Solutions Architect", "CMS Developer", "Web UI Engineer",
    ],
  },
  {
    slug: "game-engines-graphics-interactive-development",
    name: "Game Engines, Graphics & Interactive Development",
    description: "Build games and interactive 3D experiences with engines, graphics tools, and real-time systems.",
    roles: [
      "Game Developer", "Game Programmer", "Game Designer", "Unity Developer", "Unreal Engine Developer",
      "Game Engine Programmer", "Gameplay Programmer", "Graphics Programmer", "3D Graphics Developer",
      "Computer Graphics Engineer", "Game AI Developer", "Game Physics Programmer", "AR Developer", "VR Developer",
      "Mixed Reality Developer", "XR Developer", "Technical Artist", "Game Tools Programmer",
      "Simulation Developer", "Interactive Media Developer", "Real-Time Rendering Engineer", "Game UI Developer",
    ],
  },
  {
    slug: "android-ios-cross-platform",
    name: "Android, iOS & Cross-Platform",
    description: "Design and build applications for Android, iOS, and cross-platform mobile experiences.",
    roles: [
      "Android Developer", "iOS Developer", "Mobile Application Developer", "Mobile Software Engineer",
      "Flutter Developer", "React Native Developer", "Kotlin Developer", "Swift Developer", "Mobile UI Developer",
      "Cross-Platform App Developer", "Mobile Backend Developer", "Mobile Solutions Architect",
      "Mobile Game Developer", "Mobile QA Engineer", "Mobile Automation Tester", "Wearable App Developer",
      "Mobile Security Engineer", "Mobile Application Architect", "Android Systems Developer",
      "iOS Application Engineer",
    ],
  },
  {
    slug: "blockchain-web3-fintech-infrastructure",
    name: "Blockchain, Web3 & FinTech Infrastructure",
    description: "Create blockchain applications, smart contracts, and secure infrastructure for financial products.",
    roles: [
      "Blockchain Developer", "Blockchain Engineer", "Smart Contract Developer", "Solidity Developer",
      "Web3 Developer", "Web3 Frontend Developer", "Decentralized Application (dApp) Developer",
      "Blockchain Architect", "Blockchain Security Auditor", "Cryptocurrency Systems Developer", "DeFi Developer",
      "NFT Developer", "Distributed Ledger Technology Engineer", "FinTech Software Engineer",
      "Payment Systems Engineer", "Digital Banking Developer", "Financial Systems Engineer",
      "Crypto Infrastructure Engineer", "Blockchain Protocol Engineer", "Tokenization Engineer",
      "Financial Technology Solutions Architect",
    ],
  },
  {
    slug: "networks-infrastructure-network-operations",
    name: "Networks, Infrastructure & Network Operations",
    description: "Configure, secure, and troubleshoot the networks and infrastructure that connect systems.",
    roles: [
      "Network Engineer", "Network Administrator", "Network Architect", "Network Operations Center (NOC) Engineer",
      "Network Operations Analyst", "Network Security Administrator", "Telecommunications Engineer",
      "Wireless Network Engineer", "Systems Network Engineer", "Infrastructure Administrator",
      "Network Support Engineer", "Routing and Switching Engineer", "VoIP Engineer", "Network Automation Engineer",
      "Data Center Engineer", "WAN Engineer", "LAN Administrator", "IT Infrastructure Engineer",
      "Network Reliability Engineer", "Network Performance Engineer",
    ],
  },
  {
    slug: "robotics-embedded-systems-edge-computing",
    name: "Robotics, Embedded Systems & Edge Computing",
    description: "Program connected devices, embedded hardware, and robots that sense and act in the physical world.",
    roles: [
      "Robotics Engineer", "Robotics Software Developer", "Embedded Systems Engineer", "Embedded Software Engineer",
      "Firmware Engineer", "IoT Engineer", "IoT Solutions Architect", "Automation and Control Engineer",
      "Mechatronics Engineer", "Autonomous Robotics Engineer", "Robotics Hardware Engineer",
      "Edge Computing Engineer", "Industrial Automation Engineer", "Control Systems Engineer",
      "Sensor Systems Engineer", "Hardware Design Engineer", "Microcontroller Programmer",
      "Drone Systems Engineer", "Computer Hardware Engineer", "Real-Time Systems Engineer",
      "Industrial IoT Engineer",
    ],
  },
  {
    slug: "architecture-quality-engineering-technical-leadership",
    name: "Architecture, Quality Engineering & Technical Leadership",
    description: "Design maintainable systems, strengthen software quality, and grow technical leadership capabilities.",
    roles: [
      "Software Architect", "Solutions Architect", "Enterprise Architect", "Technical Architect",
      "Application Architect", "Systems Architect", "Quality Assurance (QA) Engineer", "Software Test Engineer",
      "Automation Test Engineer", "Performance Test Engineer", "Quality Engineering Manager", "Test Architect",
      "Software Development Manager", "Engineering Manager", "Technical Lead", "Software Team Lead",
      "Principal Software Engineer", "Staff Software Engineer", "Technical Program Manager", "Engineering Director",
      "Chief Technology Officer (CTO)", "Software Delivery Manager", "Technical Project Manager",
    ],
  },
  {
    slug: "llms-nlp-generative-ai-applications",
    name: "LLMs, NLP & Generative AI Applications",
    description: "Build practical language, agent, and multimodal applications powered by generative AI.",
    roles: [
      "Generative AI Engineer", "Large Language Model (LLM) Engineer", "NLP Engineer",
      "Conversational AI Developer", "AI Application Developer", "Prompt Engineer", "AI Solutions Engineer",
      "AI Agent Developer", "AI Automation Engineer", "Retrieval-Augmented Generation (RAG) Engineer",
      "LLM Application Developer", "AI Chatbot Developer", "AI Research Engineer", "Language Model Researcher",
      "AI Integration Engineer", "Vector Database Engineer", "Speech AI Engineer", "AI Product Engineer",
      "AI Workflow Developer", "LLMOps Engineer", "AI Evaluation Engineer", "Multimodal AI Engineer",
    ],
  },
  {
    slug: "it-support-linux-systems-administration",
    name: "IT Support, Linux & Systems Administration",
    description: "Support users and administer the systems that keep technology services available and secure.",
    roles: [
      "IT Support Specialist", "IT Support Technician", "IT Help Desk Analyst", "Desktop Support Engineer",
      "Technical Support Engineer", "Systems Administrator", "Linux Systems Administrator",
      "Windows Systems Administrator", "Linux Engineer", "Systems Engineer", "IT Operations Engineer",
      "IT Infrastructure Support Analyst", "Server Administrator", "IT Service Desk Analyst",
      "IT Operations Analyst", "Technical Support Analyst", "IT Systems Analyst", "Endpoint Management Engineer",
      "Virtualization Engineer", "IT Asset Management Specialist", "Systems Support Engineer",
      "Cloud Support Engineer",
    ],
  },
  {
    slug: "product-management-agile-ai-strategy",
    name: "Product Management, Agile & AI Strategy",
    description: "Shape product direction, guide agile delivery, and turn technology and AI strategy into outcomes.",
    roles: [
      "Product Manager", "Technical Product Manager", "AI Product Manager", "Associate Product Manager",
      "Senior Product Manager", "Product Owner", "Agile Project Manager", "Scrum Master", "Agile Coach",
      "Product Operations Manager", "Technical Program Manager", "Digital Product Manager",
      "Product Strategy Manager", "AI Strategy Consultant", "AI Transformation Consultant",
      "Technology Strategy Consultant", "Product Analyst", "Business Product Analyst", "Product Growth Manager",
      "Innovation Manager", "Digital Transformation Manager", "Portfolio Manager", "Delivery Manager",
      "Chief Product Officer (CPO)",
    ],
  },
];

export interface CareerRole {
  slug: string;
  name: string;
  category: CareerCategory;
}

export const careerRoles: CareerRole[] = careerCategories.flatMap((category) =>
  category.roles.map((name) => ({
    slug: slugify(name),
    name,
    category,
  })),
);

export const featuredCareerRoles = [
  ["data-engineering-analytics-databases", "Data Analyst"],
  ["cyber-defense-offensive-security-cloud-security", "Cybersecurity Analyst"],
  ["cloud-architecture-devops-platform-reliability", "Cloud Engineer"],
  ["programming-languages-core-development", "Software Engineer"],
  ["machine-learning-deep-learning-computer-vision", "Machine Learning Engineer"],
  ["frontend-backend-full-stack-web", "Frontend Developer"],
  ["game-engines-graphics-interactive-development", "Game Developer"],
  ["android-ios-cross-platform", "Android Developer"],
  ["robotics-embedded-systems-edge-computing", "Robotics Engineer"],
  ["product-management-agile-ai-strategy", "Product Manager"],
].flatMap(([categorySlug, roleName]) => {
  const category = careerCategories.find((item) => item.slug === categorySlug);
  const role = category?.roles.find((item) => item === roleName);
  return category && role ? [{slug: slugify(role), name: role, category}] : [];
});

export function slugify(value: string): string {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function getCareerRolePath(category: CareerCategory, role: string): string {
  return `/careers/category/${category.slug}/role/${slugify(role)}`;
}

export function getCareerCategoryPath(category: CareerCategory): string {
  return `/careers/category/${category.slug}`;
}

export function getCareerSkillPath(skill: string): string {
  return `/careers/skill/${slugify(skill)}`;
}

export function findCareerCategory(slug: string): CareerCategory | undefined {
  return careerCategories.find((category) => category.slug === slug);
}

export function findCareerRole(categorySlug: string, roleSlug: string): CareerRole | undefined {
  return careerRoles.find((role) => role.category.slug === categorySlug && role.slug === roleSlug);
}
