import { socialMedia } from '../../data'
import { GrConnect } from 'react-icons/gr'
import ShimmeringButton from './ui/ShimmeringButton'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10 h-fit overflow-hidden' id='contact'>
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className='opacity-30 w-full h-full' />
      </div>

      <div className="flex flex-col items-center">
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 text-center md:mt-10 my-5">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5 relative">
        <a href="mailto:daviswill264@gmail.com">
          <ShimmeringButton icon={<GrConnect />} />
        </a>
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 Williams</p>
        <div className="flex md:grid items-center md:gap-3 gap-6 md:absolute md:bottom-16">
          {socialMedia.map((profile) => (
            <a href={profile.link} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black rounded-lg border border-black-300" key={profile.id}>
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer