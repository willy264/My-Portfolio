import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

// import { gridItems } from '../../data'

const Grid = () => {

  const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:row-start-2 lg:row-span-2 md:row-span-1 col-span-1 md:col-span-6 lg:col-span-3",
      imgClassName: "w-full h-full opacity-[.4]",
      titleClassName: "justify-end",
      img: "/CollaboComp.webp",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "col-span-1 md:col-span-3",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "col-span-1 md:col-span-3",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-3 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/TechComp.webp",
      spareImgClassName: 'opacity-[.3] w-80',
    },
  
    {
      id: 5,
      title: "Currently building a React Native secure digital wallet - VERZA.",
      description: "The Inside Scoop",
      className: "lg:row-span-2 md:row-span-1 col-span-1 md:col-span-6 lg:col-span-3",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start md:mt-10 lg:justify-center lg:mt-0",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-3 md:col-span-3 md:row-span-1 lg:row-start-4  md:row-start-3 md:col-start-4",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];

  return (
    <section id='about'>
      <BentoGrid>
        {gridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg, spareImgClassName}, i) => 
          <BentoGridItem 
            id={id}
            key={i}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
            spareImgClassName={spareImgClassName}
          />
        )}
      </BentoGrid>
    </section>
  )
}

export default Grid
