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
  threejs: "Three.js",
  "framer-motion": "Framer Motion",
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
  git: "Git",
  firebase: "Firebase",
  stripe: "Stripe",
  "styled-components": "Styled Components",
  "youtube-api": "YouTube API",
  "google-api": "Google API",
  "react-native": "React Native",
  nextjs: "Next.js",
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
  eyebrow: "Dynamic web magic with React.js",
  headline: "Designing the future, one pixel at a time.",
  intro: "Hi! I'm Williams Akinwamide, a React.js developer based in Nigeria.",
  ctaLabel: "Show my work",
  featuredSkillKeys: [
    "react",
    "threejs",
    "framer-motion",
    "tailwind",
    "sass",
    "gsap",
    "sentry",
    "vite",
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
    description: "I constantly try to improve.",
    className: "col-span-1 md:col-span-3",
    img: "",
    imgClassName: "",
    titleClassName: "justify-center",
    spareImg: "",
    skillColumns: [
      ["javascript", "typescript", "nextjs", "react"],
      ["react-native", "threejs", "firebase", "git"],
      ["tailwind", "framer-motion", "gsap"],
    ],
  },
  {
    id: 4,
    variant: "image",
    title: "Tech enthusiast with a passion for development.",
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
    title: "Currently building Trueworth, an AI-powered property valuation platform.",
    description: "The inside scoop",
    className: "col-span-1 md:col-span-6 lg:col-span-3 lg:row-span-2",
    img: "/project-trueworth.png",
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
    title: "0gRamp",
    description:
      "A production-ready Web3 onboarding platform focused on frictionless ramp and wallet interactions.",
    image: "/project-0gramp.png",
    liveUrl: "https://0g-ramp.vercel.app/",
    githubUrl: "https://github.com/willy264/0gRamp",
    toolKeys: ["react", "vite", "tailwind", "typescript", "framer-motion"],
  },
  {
    id: 2,
    title: "MentalVerse",
    description:
      "A mental wellness product experience built for the ICP ecosystem with interactive flows and clean UX.",
    image: "/project-mentalverse.png",
    liveUrl: "https://mentalverse.vercel.app/",
    githubUrl: "https://github.com/MentalverseICP/MentalVerse",
    toolKeys: ["react", "typescript", "javascript", "nodejs", "css"],
  },
  {
    id: 3,
    title: "Riverr Finance",
    description:
      "A modern finance dashboard experience with token-focused workflows and responsive data-driven UI.",
    image: "/project-riverr.png",
    liveUrl: "https://joljv-6aaaa-aaaah-qqbmq-cai.icp0.io/dashboard",
    githubUrl: "https://github.com/RiverrFinance/Riverr-frontend",
    toolKeys: ["react", "vite", "tailwind", "typescript"],
  },
  {
    id: 4,
    title: "Flux",
    description:
      "A polished frontend system with reusable components, smooth interactions, and a scalable Next.js setup.",
    image: "/project-flux.png",
    liveUrl: "https://flux-ashy-nine.vercel.app/",
    githubUrl: "https://github.com/Maxima24/flux-frontend",
    toolKeys: ["nextjs", "react", "tailwind", "typescript", "framer-motion", "threejs"],
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "Williams is a talented and dedicated frontend developer. His ability to quickly learn and adapt to new technologies is impressive, and working with him was a pleasure.",
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
    title: "Senior Frontend Developer",
    description:
      "Led frontend delivery for the WCHL Global Hackathon with ICP HUBS Network, building decentralized ICP interfaces with React, TypeScript, blockchain authentication, and performance-focused UI decisions.",
    className: "md:col-span-4 lg:col-span-8",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "React Developer",
    description:
      "At Web3Bridge, I built scalable Web3 and e-commerce frontends, integrated Stripe payment flows, added Zustand-based state management, and aligned frontend delivery with backend APIs.",
    className: "md:col-span-2 lg:col-span-4",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI-Driven Frontend Developer",
    description:
      "During the ALX Africa AiCE program, I developed a frontend portfolio with AI-assisted design workflows, improving visual consistency, speed, and implementation quality across the interface.",
    className: "md:col-span-2 lg:col-span-4",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Freelance Frontend Developer",
    description:
      "Since 2022, I have delivered responsive React and TypeScript applications with Tailwind CSS, wallet integrations, DeFi dashboards, and client-facing product work with strong delivery and communication.",
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
  heading: "Ready to take your digital presence to the next level?",
  subheading:
    "Reach out today and let's discuss how I can help you achieve your goals.",
  ownerName: "Williams Akinwamide",
  contactEmail,
  contactCtaLabel: "Send an email",
};

export const approachSteps: ApproachStep[] = [
  {
    phase: "Phase 1",
    title: "Planning & Strategy",
    description:
      "We'll collaborate to map out your website's goals, target audience, structure, and key functionality.",
    theme: "emerald",
  },
  {
    phase: "Phase 2",
    title: "Development & Progress Update",
    description:
      "Once the plan is approved, I move into implementation and keep you updated from initial sketches to polished code.",
    theme: "midnight",
  },
  {
    phase: "Phase 3",
    title: "Development & Launch",
    description:
      "This is where the approved design becomes a working product, ready to be tested, refined, and launched.",
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
