import { sectionContent, testimonials } from "../../data";
import { AnimatedTestimonials } from "./ui/animated-testimonials";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading capitalize">
        {sectionContent.testimonials.heading}
        <span className="text-purple"> {sectionContent.testimonials.accent}</span>
      </h1>
      <div className="mt-10 flex flex-col items-center max-lg:mt-10">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Clients;
