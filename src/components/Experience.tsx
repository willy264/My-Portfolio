import { sectionContent, workExperience } from "../../data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading">
        {sectionContent.experience.heading}
        <span className="text-purple"> {sectionContent.experience.accent}</span>
      </h1>
      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            containerClassName={undefined}
            borderClassName={undefined}
            className="flex-1 border-neutral-200 bg-purple-100 text-white dark:border-slate-800"
          >
            <div className="flex flex-col gap-2 p-3 py-6 lg:flex-row lg:items-center lg:p-10 md:p-5">
              <img src={card.thumbnail} alt={card.title} className="w-16 md:w-20 lg:w-32" />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">{card.title}</h1>
                <p className="mt-3 text-start font-semibold text-white-100">{card.description}</p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
