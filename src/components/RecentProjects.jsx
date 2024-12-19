import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import {
  SiThreedotjs,
  SiFramer,
  SiFirebase,
  SiTailwindcss,
  SiSass,
  SiTypescript,
  SiGoogle,
  SiGreensock,
  SiSentry,
  SiStripe,
  SiVite,
  SiStyledcomponents,
} from "react-icons/si";
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import { cn } from "../lib/utils";
import ShimmeringButton from './ui/ShimmeringButton';
import { FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Next generation digital banking",
    des: "Taking your financial life online with Easybank",
    img: "/project1.PNG",
    link: "https://1-easybank-landing-page-master.vercel.app",
    glink: "https://github.com/willy264/1.easybank-landing-page-master.git",
    tools: ['HTML', 'CSS', 'JavaScript'],
    className: "bg-red-500 text-purple lg:row-start-3 lg:row-span-2 md:row-span-1 col-span-1 md:col-span-6 lg:col-span-3",
  },
  {
    id: 2,
    title: "QuizMe - Quiz App",
    des: "A dynamic quiz application that tests your knowledge with engaging questions and instant feedback",
    img: "/project5.PNG",
    link: "https://2-quiz-app.vercel.app",
    glink: "https://github.com/willy264/2.quiz-app.git",
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    title: "Dynamic Multistep Form - Form Application",
    des: "Collect accurate and complete data with our multi-step form.",
    img: "/project6.PNG",
    link: "https://3-multistep-form.vercel.app",
    glink: "https://github.com/willy264/3.multistep-form.git",
    tools: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    title: "AI Chatbot with JavaScript",
    des: "Experience the future of AI-powered conversations.",
    img: "/project4.PNG",
    link: "https://4chat-gpt.vercel.app/",
    glink: "https://github.com/willy264/4.chat-gpt.git",
    tools: ['HTML', 'CSS', 'JavaScript', 'Google API'],
  },
  {
    id: 5,
    title: "Meme Factory: Meme generator application with React",
    des: "Customize memes with your own text, fonts and random images",
    img: "/project2.PNG",
    link: "https://7-meme-generator-react.vercel.app/",
    glink: "https://github.com/willy264/7.meme-generator-react.git",
    tools: ['React', 'Styled Components', 'CSS'],
  },
  {
    id: 6,
    title: "EcoFashionMart: An E-commerce Website with React",
    des: "Your one-stop online shop, explore a wide range of products. Enjoy convenient online shopping, secure payments using stripe.",
    img: "/project3.PNG",
    link: "https://e-commerce-2kdi.vercel.app/",
    glink: "https://github.com/willy264/E-Commerce.git",
    tools: ['React', 'NodeJS', 'Firebase', 'Stripe', 'Tailwind'],
  },
];

const toolIcons = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  JavaScript: <FaJsSquare className="text-yellow-500 text-2xl" />,
  HTML: <FaHtml5 className="text-orange-500 text-2xl" />,
  CSS: <FaCss3Alt className="text-blue-600 text-2xl" />,
  NodeJS: <FaNodeJs className="text-green-600 text-2xl" />,
  Git: <FaGitAlt className="text-red-500 text-2xl" />,
  "Three.js": <SiThreedotjs className="text-teal-500 text-2xl" />,
  FramerMotion: <SiFramer className="text-purple-500 text-2xl" />,
  Firebase: <SiFirebase className="text-orange-500 text-2xl" />,
  Tailwind: <SiTailwindcss className="text-blue-400 text-2xl" />,
  Sass: <SiSass className="text-pink-500 text-2xl" />,
  TypeScript: <SiTypescript className="text-blue-600 text-2xl" />,
  "Google API": <SiGoogle className="text-blue-500 text-2xl" />,
  GSAP: <SiGreensock className="text-green-500 text-2xl" />,
  Sentry: <SiSentry className="text-gray-500 text-2xl" />,
  Stripe: <SiStripe className="text-indigo-500 text-2xl" />,
  Vite: <SiVite className="text-purple-400 text-2xl" />,
  "Styled Components": <SiStyledcomponents className="text-pink-500 text-2xl" />,
};

const RecentProjects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="py-20 mt-20 relative transition-all" id="projects">
      <h1 className="text-3xl font-bold text-center mb-10 capitalize">
        A small selection of{' '}
        <span className="text-purple">recent projects</span>
      </h1>

      <div
        className={cn(
          "grid lg:grid-cols-2 grid-cols-1 justify-items-center gap-x-16 gap-y-20 max-sm:gap-10 transition-all ease-in-out duration-[10s]",
          {
            "max-h-[800px] overflow-hidden": !isExpanded,
            "max-h-full": isExpanded,
          }
        )}
      >
        {projects.map(({ id, title, des, img, link, glink, tools, className }) => (
          <div key={id} className="h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            {!isExpanded && (
              <div className="absolute inset-x-0 top-[100px] bottom-0 bg-gradient-to-t from-[#09030cd8] via-[#09030c22] to-transparent opacity-30 z-30 transition-all"></div>
            )}

            <CardContainer className="inter-var">
              <CardBody
                className={cn(
                  "bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border",
                  className
                )}
              >
                <CardItem
                  translateZ="50"
                  className="md:text-xl text-lg font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 md:text-sm text-xs max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src={img}
                    height="1000"
                    as="img"
                    href={link}
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <div className="flex gap-4 mt-4">
                  {tools.map((tool) => (
                    <div key={tool}>{toolIcons[tool]}</div>
                  ))}
                </div>
                <div className="flex justify-between items-center md:mt-20 mt-10">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={link}
                    target="__blank"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={glink}
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold flex gap-1 justify-center items-center"
                  >
                    <span>GitHub Link</span>
                    <FaChevronDown />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10 z-40 relative">
        <ShimmeringButton 
          title={isExpanded ? 'View Less' : 'View More'}
          icon={isExpanded ? <FaAngleDoubleUp className="ml-2 pr-1" /> : <FaAngleDoubleDown className="ml-2 pr-1" />}
          otherClasses={"flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg shadow-md transition-transform ease-in-out z-40"}
          handleClick={toggleExpand}
        />
      </div>
    </div>
  );
};

export default RecentProjects;
