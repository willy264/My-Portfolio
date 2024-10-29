import React from 'react'
import { projects } from '../../data'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'


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
            <PinContainer title={link} href={link}>
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
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects