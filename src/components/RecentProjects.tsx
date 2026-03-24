import { useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaChevronDown } from "react-icons/fa";
import { projects, projectsSectionContent, skillLabels } from "../../data";
import { skillIconMap } from "../lib/iconMaps";
import { cn } from "../lib/utils";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import ShimmeringButton from "./ui/ShimmeringButton";

const RecentProjects = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div className="relative mt-20 py-20 transition-all" id="projects">
      <h1 className="mb-10 text-center text-3xl font-bold capitalize">
        {projectsSectionContent.heading}{" "}
        <span className="text-purple">{projectsSectionContent.accent}</span>
      </h1>

      <div
        className={cn(
          "grid grid-cols-1 justify-items-center gap-x-16 gap-y-20 transition-all ease-in-out [transition-duration:10s] lg:grid-cols-2 max-sm:gap-10",
          {
            "max-h-[800px] overflow-hidden": !isExpanded,
            "max-h-full": isExpanded,
          },
        )}
      >
        {projects.map(({ id, title, description, image, liveUrl, githubUrl, toolKeys, className }) => (
          <div
            key={id}
            className="flex h-[32rem] items-center justify-center w-[80vw] sm:w-[570px]"
          >
            {!isExpanded ? (
              <div className="absolute inset-x-0 top-[100px] bottom-0 z-30 bg-gradient-to-t from-[#09030cd8] via-[#09030c22] to-transparent opacity-30 transition-all"></div>
            ) : null}

            <CardContainer className="inter-var" containerClassName={undefined}>
              <CardBody
                className={cn(
                  "group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]",
                  className,
                )}
              >
                <CardItem translateZ={50} className="text-lg font-bold text-neutral-600 dark:text-white md:text-xl">
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ={60}
                  className="mt-2 max-w-sm text-xs text-neutral-500 dark:text-neutral-300 md:text-sm"
                >
                  {description}
                </CardItem>
                <CardItem translateZ={100} className="mt-4 w-full">
                  <img
                    src={image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt={title}
                  />
                </CardItem>
                <div className="mt-4 flex gap-4">
                  {toolKeys.map((toolKey) => (
                    <div key={toolKey} title={skillLabels[toolKey]}>
                      {skillIconMap[toolKey]}
                    </div>
                  ))}
                </div>
                <div className="mt-10 flex items-center justify-between md:mt-20">
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                  >
                    {projectsSectionContent.liveLabel}
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="a"
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                  >
                    <span>{projectsSectionContent.githubLabel}</span>
                    <FaChevronDown />
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>

      <div className="relative z-40 mt-10 flex justify-center">
        <ShimmeringButton
          title={isExpanded ? projectsSectionContent.toggleLessLabel : projectsSectionContent.toggleMoreLabel}
          icon={
            isExpanded ? (
              <FaAngleDoubleUp className="ml-2 pr-1" />
            ) : (
              <FaAngleDoubleDown className="ml-2 pr-1" />
            )
          }
          otherClasses="z-40 flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-md transition-transform ease-in-out hover:bg-purple-700"
          handleClick={toggleExpand}
        />
      </div>
    </div>
  );
};

export default RecentProjects;
