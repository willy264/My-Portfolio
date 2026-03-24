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
    className:
      "lg:row-start-2 lg:row-span-2 md:row-span-1 col-span-1 md:col-span-6 lg:col-span-3",
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
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    img: "/grid.svg",
    imgClassName: "",
    titleClassName: "justify-start",
    spareImg: "/TechComp.webp",
    spareImgClassName: "opacity-[.3] w-80",
  },
  {
    id: 5,
    variant: "feature-link",
    title: "Currently building a React Native secure digital wallet, VERZA.",
    description: "The inside scoop",
    className:
      "lg:row-span-2 md:row-span-1 col-span-1 md:col-span-6 lg:col-span-3",
    img: "/b5.svg",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-center md:justify-start md:mt-10 lg:justify-center lg:mt-0",
    spareImg: "/grid.svg",
    linkLabel: "Visit VERZA App ->",
    linkUrl: "https://verzaapp.netlify.app/",
  },
  {
    id: 6,
    variant: "copy-contact",
    title: "Do you want to start a project together?",
    description: "",
    className:
      "lg:col-span-3 md:col-span-3 md:row-span-1 lg:row-start-4 md:row-start-3 md:col-start-4",
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
    title: "Next generation digital banking",
    description: "Taking your financial life online with Easybank.",
    image: "/project1.PNG",
    liveUrl: "https://1-easybank-landing-page-master.vercel.app",
    githubUrl: "https://github.com/willy264/1.easybank-landing-page-master.git",
    toolKeys: ["html", "css", "javascript"],
    className:
      "bg-red-500 text-purple lg:row-start-3 lg:row-span-2 md:row-span-1 col-span-1 md:col-span-6 lg:col-span-3",
  },
  {
    id: 2,
    title: "QuizMe - Quiz App",
    description:
      "A dynamic quiz application that tests your knowledge with engaging questions and instant feedback.",
    image: "/project5.PNG",
    liveUrl: "https://2-quiz-app.vercel.app",
    githubUrl: "https://github.com/willy264/2.quiz-app.git",
    toolKeys: ["html", "css", "javascript"],
  },
  {
    id: 3,
    title: "Dynamic Multistep Form - Form Application",
    description: "Collect accurate and complete data with a multi-step form.",
    image: "/project6.PNG",
    liveUrl: "https://3-multistep-form.vercel.app",
    githubUrl: "https://github.com/willy264/3.multistep-form.git",
    toolKeys: ["html", "css", "javascript"],
  },
  {
    id: 4,
    title: "AI Chatbot with JavaScript",
    description: "Experience the future of AI-powered conversations.",
    image: "/project4.PNG",
    liveUrl: "https://4chat-gpt.vercel.app/",
    githubUrl: "https://github.com/willy264/4.chat-gpt.git",
    toolKeys: ["html", "css", "javascript", "google-api"],
  },
  {
    id: 5,
    title: "Meme Factory: Meme generator application with React",
    description: "Customize memes with your own text, fonts, and random images.",
    image: "/project2.PNG",
    liveUrl: "https://7-meme-generator-react.vercel.app/",
    githubUrl: "https://github.com/willy264/7.meme-generator-react.git",
    toolKeys: ["react", "styled-components", "css"],
  },
  {
    id: 6,
    title: "TubeHub: Video Streaming Platform",
    description:
      "A React-based video streaming platform for discovering videos across multiple genres with a sleek interface.",
    image: "/project7.PNG",
    liveUrl: "https://8-youtube-clone.vercel.app/",
    githubUrl: "https://github.com/willy264/8.youtube-clone",
    toolKeys: ["react", "styled-components", "css", "youtube-api"],
  },
  {
    id: 7,
    title: "EcoFashionMart: An E-commerce Website with React",
    description:
      "Your one-stop online shop with secure payments and a modern shopping flow.",
    image: "/project3.PNG",
    liveUrl: "https://e-commerce-2kdi.vercel.app/",
    githubUrl: "https://github.com/willy264/E-Commerce.git",
    toolKeys: ["react", "nodejs", "firebase", "stripe", "tailwind"],
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
    title: "Frontend Engineer Intern",
    description:
      "Worked as a frontend engineer intern at HNG Tech, developing user-facing features with modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    description:
      "At Web3Bridge, I developed and maintained user-facing features across both frontend and backend experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Lead Frontend Developer at ICP Deca-hackathon",
    description:
      "Led frontend development for a mental health platform from concept through deployment.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Frontend Development using AI for Designs",
    description:
      "Built a frontend portfolio website during the ALX AiCE program using AI-generated design references.",
    className: "md:col-span-2",
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

