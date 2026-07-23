import { globeRoutes } from "./globe-routes";
import type {
  AboutGridItem,
  ApproachStep,
  ExperienceItem,
  FooterContent,
  HeroContent,
  NavigationItem,
  ProjectItem,
  ProjectSectionContent,
  SkillKey,
  SocialLink,
  TestimonialItem,
} from "./types";

const contactEmail = "daviswill264@gmail.com";

export const skillLabels: Record<SkillKey, string> = {
  react: "React",
  tailwind: "Tailwind CSS",
  sass: "Sass",
  typescript: "TypeScript",
  gsap: "GSAP",
  sentry: "Sentry",
  vite: "Vite",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  nodejs: "Node.js",
  stripe: "Stripe",
  "styled-components": "Styled Components",
  "youtube-api": "YouTube API",
  "google-api": "Google API",
  "react-native": "React Native",
  nextjs: "Next.js",
  nestjs: "NestJS",
  prisma: "Prisma",
  postgresql: "PostgreSQL",
  redis: "Redis",
  docker: "Docker",
};

export const navigation: NavigationItem[] = [
  {
    title: "About",
    href: "#about",
    iconKey: "about",
  },
  {
    title: "Projects",
    href: "#projects",
    iconKey: "projects",
  },
  {
    title: "Testimonials",
    href: "#testimonials",
    iconKey: "testimonials",
  },
  {
    title: "Contact",
    href: "#contact",
    iconKey: "contact",
  },
];

export const heroContent: HeroContent = {
  eyebrow: "Full-stack product engineering",
  headline: "Building complete products, from interface to infrastructure.",
  intro: "Hi! I'm Williams Akinwamide, a full-stack developer based in Nigeria.",
  ctaLabel: "Show my work",
  featuredSkillKeys: [
    "typescript",
    "react",
    "nextjs",
    "tailwind",
    "nodejs",
    "nestjs",
    "prisma",
    "postgresql",
  ],
};

export const aboutGridItems: AboutGridItem[] = [
  {
    id: 1,
    variant: "image",
    title: "I prioritize client collaboration, fostering open communication.",
    description: "",
    className: "col-span-1 md:col-span-6 lg:col-span-3 lg:row-span-2",
    img: "/CollaboComp.webp",
    imgClassName: "w-full h-full opacity-[.4]",
    titleClassName: "justify-end",
    spareImg: "",
  },
  {
    id: 2,
    variant: "globe",
    title: "I'm very flexible with time zone communications.",
    description: "",
    className: "col-span-1 md:col-span-3",
    img: "",
    imgClassName: "",
    titleClassName: "justify-start",
    spareImg: "",
  },
  {
    id: 3,
    variant: "tech-stack",
    title: "My tech stack",
    description: "Frontend, Backend, Mobile Apps, data, and infrastructure.",
    className: "col-span-1 md:col-span-3",
    img: "",
    imgClassName: "",
    titleClassName: "justify-center",
    spareImg: "",
    skillColumns: [
      ["typescript", "react", "nextjs", "tailwind"],
      ["nodejs", "nestjs", "prisma", "react-native"],
      ["postgresql", "redis", "docker"],
    ],
  },
  {
    id: 4,
    variant: "image",
    title: "Full-stack engineer focused on reliable, production-ready systems.",
    description: "",
    className: "col-span-1 md:col-span-3 lg:col-span-3",
    img: "/grid.svg",
    imgClassName: "",
    titleClassName: "justify-start",
    spareImg: "/TechComp.webp",
    spareImgClassName: "opacity-[.3] w-80",
  },
  {
    id: 5,
    variant: "feature-link",
    title: "Currently building Trueworth, an AI-powered full-stack property valuation platform.",
    description: "The inside scoop",
    className: "col-span-1 md:col-span-6 lg:col-span-3 lg:row-span-2",
    img: "/Screenshot 2026-06-05 083539.png",
    imgClassName: "absolute inset-0 h-full w-full object-cover object-top opacity-50",
    titleClassName:
      "justify-center md:justify-start md:mt-10 lg:justify-center lg:mt-0",
    spareImg: "",
    linkLabel: "View Trueworth Repo ->",
    linkUrl: "https://github.com/raxcy2000/Trueworth",
  },
  {
    id: 6,
    variant: "copy-contact",
    title: "Do you want to start a project together?",
    description: "",
    className: "col-span-1 md:col-span-3 lg:col-span-3",
    img: "",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    spareImg: "",
    copyLabel: "Copy my email",
    copiedLabel: "Email copied",
    copyValue: contactEmail,
  },
];

export const projectsSectionContent: ProjectSectionContent = {
  heading: "A small selection of",
  accent: "recent projects",
  toggleMoreLabel: "View More",
  toggleLessLabel: "View Less",
  liveLabel: "Try now ->",
  githubLabel: "GitHub Link",
};

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Sluice",
    description:
      "A live operations layer for CKB Fiber Network nodes that visualizes channel liquidity, preflights payments with dry-run route probes, and automates circular rebalancing.",
    image: "/project-sluice.png",
    liveUrl: "https://sluice.drreamer.digital/",
    githubUrl: "https://github.com/Maxima24/sluice",
    toolKeys: [
      "nextjs",
      "react",
      "tailwind",
      "typescript",
      "nestjs",
      "prisma",
      "postgresql",
      "redis",
      "docker",
    ],
  },
  {
    id: 2,
    title: "Conduit",
    description:
      "A full-stack reliability layer for Monnify and other webhooks, with exactly-once ingestion, queued notification retries, dead-letter replay, and end-to-end reconciliation.",
    image: "/project-conduit.png",
    liveUrl: "https://conduit-sage.vercel.app/",
    githubUrl: "https://github.com/hackathon-by-hgs/Conduit/",
    toolKeys: [
      "nextjs",
      "react",
      "tailwind",
      "typescript",
      "nestjs",
      "prisma",
      "postgresql",
      "redis",
      "docker",
    ],
  },
  {
    id: 3,
    title: "Forge",
    description:
      "The main landing page for Forge, a modern decentralized web platform built to empower developers with seamless integration.",
    image: "/project-forge.png",
    liveUrl: "https://forge-fe-landing.vercel.app/",
    githubUrl: "https://github.com/hackathon-by-hgs/forge_fe/tree/master/apps/landing",
    toolKeys: ["react", "nextjs", "tailwind", "typescript"],
  },
  {
    id: 4,
    title: "Market Narrative",
    description:
      "A live market data and analytics platform delivering narrative-driven insights with real-time tracking.",
    image: "/project-narrative.png",
    liveUrl: "https://marketnarrativelive.vercel.app/",
    githubUrl: "https://github.com/willy264/narrative_frontend/tree/main/frontend_app",
    toolKeys: ["nextjs", "react", "tailwind", "typescript"],
  },
  {
    id: 5,
    title: "Ontiver",
    description:
      "Verify Once, Reuse Everywhere. A seamless identity and verification platform for the modern web.",
    image: "/project-ontiver.png",
    liveUrl: "https://ontiver.com/",
    githubUrl: "https://github.com/joinverza/Ontiver",
    toolKeys: ["nextjs", "react", "tailwind", "typescript"],
  },
  {
    id: 6,
    title: "SwiftyDrop Guard",
    description:
      "A Telegram-first crypto safety dashboard combining verified airdrop discovery, Gemini-powered scam intelligence, wallet risk analysis, task tracking, and gamified community rankings.",
    image: "/project-swiftydrop-guard.png",
    liveUrl: "https://swifty-swart.vercel.app/",
    githubUrl: "https://github.com/willy264/swifty",
    toolKeys: ["nextjs", "react", "tailwind", "typescript", "gsap"],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Williams is a talented and dedicated developer. His ability to quickly learn and adapt to new technologies is impressive, and working with him was a pleasure.",
    name: "Faraq Salami",
    designation: "Studied with him at Dataskills Computer School",
    image: "/OIP (17).jpeg",
  },
  {
    quote:
      "Collaborating with Williams was a great experience. He is a talented developer, a strong team player, and always willing to help.",
    name: "Emmanuel Joseph",
    designation: "Co-hacker in the ICP Deca-hackathon",
    image: "/OIP (15).jpeg",
  },
  {
    quote:
      "Working alongside Williams made a real difference to our project. His dedication, expertise, and collaborative spirit had a meaningful impact on our success.",
    name: "Qudus Salami",
    designation: "Co-hacker in the ICP Deca-hackathon",
    image: "/OIP (16).jpeg",
  },
];

export const workExperience: ExperienceItem[] = [
  {
    id: 1,
    title: "Full-Stack Web3 Developer",
    description:
      "Built end-to-end Web3 products for the WCHL Global Hackathon with ICP HUBS Network, connecting React and TypeScript interfaces to blockchain authentication, backend services, and deployment-ready workflows.",
    className: "md:col-span-4 lg:col-span-8",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Full-Stack Developer",
    description:
      "At Web3Bridge, I built Web3 and e-commerce products across responsive interfaces, API-backed workflows, state management, and Stripe payment integrations.",
    className: "md:col-span-2 lg:col-span-4",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI-Assisted Full-Stack Developer",
    description:
      "During the ALX Africa AiCE program, I used AI-assisted engineering workflows to design and build product interfaces, API integrations, and maintainable application architecture.",
    className: "md:col-span-2 lg:col-span-4",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Full-Stack Developer",
    description:
      "Since 2022, I have delivered TypeScript applications spanning responsive frontends, Node.js APIs, PostgreSQL-backed data, wallet integrations, dashboards, and production deployment.",
    className: "md:col-span-4 lg:col-span-8",
    thumbnail: "/exp4.svg",
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "github",
    icon: "/git.svg",
    url: "https://github.com/willy264",
    label: "GitHub",
  },
  {
    id: 2,
    platform: "x",
    icon: "/twit.svg",
    url: "https://x.com/william_da3447",
    label: "X",
  },
  {
    id: 3,
    platform: "linkedin",
    icon: "/link.svg",
    url: "https://www.linkedin.com/in/williams-akinwamide-112784283/",
    label: "LinkedIn",
  },
];

export const footerContent: FooterContent = {
  heading: "Ready to take your product from idea to production?",
  subheading:
    "Let's discuss the interface, APIs, data, and infrastructure needed to ship it well.",
  ownerName: "Williams Akinwamide",
  contactEmail,
  contactCtaLabel: "Send an email",
};

export const approachSteps: ApproachStep[] = [
  {
    phase: "Phase 1",
    title: "Discovery & Architecture",
    description:
      "We'll define the product goals, user flows, data model, system boundaries, integrations, and delivery plan.",
    theme: "emerald",
  },
  {
    phase: "Phase 2",
    title: "Build & Integration",
    description:
      "I build the interface, APIs, database workflows, and third-party integrations while sharing clear progress updates.",
    theme: "midnight",
  },
  {
    phase: "Phase 3",
    title: "Validation & Launch",
    description:
      "The complete system is tested across frontend and backend, refined, monitored, and deployed for production use.",
    theme: "sky",
  },
];

export const sectionContent = {
  testimonials: {
    heading: "Testimonials from",
    accent: "satisfied clients",
  },
  experience: {
    heading: "My",
    accent: "Work Experience",
  },
  approach: {
    heading: "My",
    accent: "Approach",
  },
};

export const serviceAreaRoutes = globeRoutes;
