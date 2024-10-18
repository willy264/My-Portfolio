import './App.css'
import Hero from './components/Hero'
import Grid from './components/Grid'
import RecentProjects from './components/RecentProjects'
import Clients from './components/Clients'
import { FloatingNav } from './components/ui/FloatingNav'
import { FaHome } from 'react-icons/fa'
import { navItems } from '../data'

function App() {

  return (
    <main className='relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
      </div>
    </main>
  )
}

export default App