import { link } from 'framer-motion/client'
import './App.css'
import Hero from './components/Hero'
import Grid from './components/Grid'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { FloatingNav } from './components/ui/FloatingNav'
import { FaHome } from 'react-icons/fa'

function App() {

  return (
    <main className='relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className="max-w-7xl w-full">
        <Router>
          <Routes>
            <Route path='/' element={ <FloatingNav navItems={[
                {name: 'Home', link: '/', icon: <FaHome />}
              ]} />} />
          </Routes>
        </Router>
        <Hero />
        <Grid />
      </div>
    </main>
  )
}

export default App
