import './App.css'
import './index.css'
import { navItems } from '../data'
import { FloatingNav } from './components/ui/FloatingNav'
import Hero from './components/Hero'
import Grid from './components/Grid'
import RecentProjects from './components/RecentProjects'
import Clients from './components/Clients'
import Experience from './components/Experience'
import Approach from './components/Approach'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

function App() {

  return (
    <main className='relative bg-purple-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip'>
      <div className="max-w-7xl w-full">
      <Cursor />
        <FloatingNav navItems={navItems} />
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