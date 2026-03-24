import { aboutGridItems } from "../../data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {aboutGridItems.map((item) => (
          <BentoGridItem key={item.id} item={item} />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
