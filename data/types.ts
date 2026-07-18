export type NavigationIconKey = "about" | "projects" | "testimonials" | "contact";

export type SkillKey =
  | "react"
  | "threejs"
  | "framer-motion"
  | "tailwind"
  | "sass"
  | "typescript"
  | "gsap"
  | "sentry"
  | "vite"
  | "html"
  | "css"
  | "javascript"
  | "nodejs"
  | "git"
  | "firebase"
  | "stripe"
  | "styled-components"
  | "youtube-api"
  | "google-api"
  | "react-native"
  | "nextjs"
  | "nestjs"
  | "prisma"
  | "postgresql"
  | "redis"
  | "docker";

export type AboutGridVariant =
  | "image"
  | "globe"
  | "tech-stack"
  | "feature-link"
  | "copy-contact";

export type ApproachTheme = "emerald" | "midnight" | "sky";

export interface NavigationItem {
  title: string;
  href: `#${string}`;
  iconKey: NavigationIconKey;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  intro: string;
  ctaLabel: string;
  featuredSkillKeys: SkillKey[];
}

export interface AboutGridItem {
  id: number;
  variant: AboutGridVariant;
  title: string;
  description: string;
  className: string;
  img: string;
  imgClassName: string;
  titleClassName: string;
  spareImg: string;
  spareImgClassName?: string;
  skillColumns?: SkillKey[][];
  linkLabel?: string;
  linkUrl?: string;
  copyLabel?: string;
  copiedLabel?: string;
  copyValue?: string;
}

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  toolKeys: SkillKey[];
  className?: string;
}

export interface ProjectSectionContent {
  heading: string;
  accent: string;
  toggleMoreLabel: string;
  toggleLessLabel: string;
  liveLabel: string;
  githubLabel: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  description: string;
  className: string;
  thumbnail: string;
}

export interface SocialLink {
  id: number;
  platform: "github" | "x" | "linkedin";
  icon: string;
  url: string;
  label: string;
}

export interface FooterContent {
  heading: string;
  subheading: string;
  ownerName: string;
  contactEmail: string;
  contactCtaLabel: string;
}

export interface ApproachStep {
  phase: string;
  title: string;
  description: string;
  theme: ApproachTheme;
}

export interface GlobeRoute {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
}

