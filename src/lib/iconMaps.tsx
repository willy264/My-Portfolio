import type { ReactNode } from "react";
import { FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from "react-icons/fa";
import {
  FaEnvelopesBulk,
  FaPhoneVolume,
  FaQuoteLeft,
  FaUserAstronaut,
} from "react-icons/fa6";
import {
  SiGoogle,
  SiGreensock,
  SiDocker,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiSass,
  SiSentry,
  SiStripe,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiYoutube,
} from "react-icons/si";
import type { NavigationIconKey, SkillKey } from "../../data/types";

const navigationIconClassName = "text-neutral-500 dark:text-white";

export const navigationIconMap: Record<NavigationIconKey, ReactNode> = {
  about: <FaUserAstronaut className={`h-4 w-4 ${navigationIconClassName}`} />,
  projects: <FaEnvelopesBulk className={`h-5 w-5 ${navigationIconClassName}`} />,
  testimonials: <FaQuoteLeft className={`h-5 w-5 ${navigationIconClassName}`} />,
  contact: <FaPhoneVolume className={`h-4 w-4 ${navigationIconClassName}`} />,
};

export const skillIconMap: Record<SkillKey, ReactNode> = {
  react: <FaReact className="text-2xl text-blue-500" />,
  tailwind: <SiTailwindcss className="text-2xl text-blue-400" />,
  sass: <SiSass className="text-2xl text-pink-500" />,
  typescript: <SiTypescript className="text-2xl text-blue-600" />,
  gsap: <SiGreensock className="text-2xl text-green-500" />,
  sentry: <SiSentry className="text-2xl text-gray-400" />,
  vite: <SiVite className="text-2xl text-yellow-300" />,
  html: <FaHtml5 className="text-2xl text-orange-500" />,
  css: <FaCss3Alt className="text-2xl text-blue-600" />,
  javascript: <FaJsSquare className="text-2xl text-yellow-500" />,
  nodejs: <FaNodeJs className="text-2xl text-green-600" />,
  stripe: <SiStripe className="text-2xl text-indigo-500" />,
  "styled-components": <SiStyledcomponents className="text-2xl text-pink-500" />,
  "youtube-api": <SiYoutube className="text-2xl text-red-500" />,
  "google-api": <SiGoogle className="text-2xl text-blue-500" />,
  "react-native": <FaReact className="text-2xl text-sky-400" />,
  nextjs: <SiNextdotjs className="text-2xl text-white" />,
  nestjs: <SiNestjs className="text-2xl text-red-500" />,
  prisma: <SiPrisma className="text-2xl text-slate-200" />,
  postgresql: <SiPostgresql className="text-2xl text-blue-400" />,
  redis: <SiRedis className="text-2xl text-red-500" />,
  docker: <SiDocker className="text-2xl text-sky-400" />,
};
