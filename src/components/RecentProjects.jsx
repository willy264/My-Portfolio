import React from 'react'
import { projects } from '../../data'
// import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'


const RecentProjects = () => {
  return (
    <div className='py-20 mt-20' id='projects'>
      <h1 className="heading">
        A small selection of {''}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-[0px]">
        {projects.map(({ id, title, des, img, iconLists, link, glink }) => (
          <div key={id} className=' sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
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
                <div className="flex justify-between items-center mt-20">
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
                    <span>Github Link</span> 
                    <FaLocationArrow /> 
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
            {/* <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] h-[30vh] w-[80vw] overflow-hidden mb-10 rounded-2xl'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className='z-10 absolute bottom-0 w-[500px] -skew-x-12 brightness-90' />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists ? iconLists.map((icon, index) => (
                    <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform: `translateX(-${5 * index * 2})`}}>
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  )) : ''}
                </div>
                <div className="flex justify-center items-center">
                  <a href={glink} target='_blank' className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Github Link</a>
                  <FaLocationArrow className='ms-3' color='#cbacf9' />
                </div>
              </div>
            </PinContainer> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects