import './App.css'
import './index.css'
// import { navItems } from '../data'
import { FloatingNav } from './components/ui/FloatingNav'
import Hero from './components/Hero'
import Grid from './components/Grid'
import RecentProjects from './components/RecentProjects'
import Clients from './components/Clients'
import Experience from './components/Experience'
import Approach from './components/Approach'
import Footer from './components/Footer'
import { FaEnvelopesBulk, FaPhoneVolume, FaQuoteLeft, FaUserAstronaut } from 'react-icons/fa6'
import { FloatingDock } from './components/ui/Floating-dock'
// import Cursor from './components/Cursor'

const navItems = [
  { 
    title: 'About',
    href: "#about", 
    icon: <FaUserAstronaut  className="h-4 w-4 text-neutral-500 dark:text-white" />,
   },
  { 
    title: "Projects", 
    href: "#projects",
    icon: <FaEnvelopesBulk  className="h-5 w-5 text-neutral-500 dark:text-white" />,

  },
  { 
    title: "Testimonials", 
    href: "#testimonials",
    icon: <FaQuoteLeft  className="h-5 w-5 text-neutral-500 dark:text-white" />,

  },
  { 
    title: "Contact", 
    href: "#contact",
    icon: <FaPhoneVolume  className="h-4 w-4 text-neutral-500 dark:text-white" />,

  },
];

function App() {

  return (
    <main className='relative bg-purple-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
      <div className="max-w-7xl w-full">
      {/* <Cursor /> */}
        {/* <FloatingNav navItems={navItems} /> */}
        <FloatingDock items={navItems} /> 
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  )
}

export default App