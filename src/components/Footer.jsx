import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '../../data'

const Footer = () => {
  return (
    <footer className='w-full mb-[100px] md:mb-5 pb-10 h-fit overflow-hidden' id='contact'>
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img src="/footer-grid.svg" alt="grid" className='opacity-5footer0' />
      </div>
      <div className="flex flex-col items-center">
        <h1 className='heading lg:max-w-[45vw]'>
          Ready to take <span className='text-purple'>your</span> digital presence to the next level?
        </h1>
        <p className="text-white-200 text-center md:mt-10 my-5">Reach out to me today and let&apos;s discuss how I can help you achieve your goals.</p>
        <a href="mailto:daviswill264@gmail.com">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-6  text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-xl font-bold">
            Let's get in touch
            <FaLocationArrow />
          </button>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5">
        <p className="md:text-base text-sm md:font-normal font-light">Copyright © 2024 U~Iriamuzu</p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-150 bg-opacity-75 bg-black rounded-lg border border-black-300" key={profile.id}>
              <img src={profile.img} alt={profile.id} width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer