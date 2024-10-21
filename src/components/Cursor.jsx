import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";


const Cursor = () => {

  const [position, setPosition] = useState({x:0, y:0})
  const [moved, setMoved] = useState(false)

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({x:e.clientX, y:e.clientY})
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  return (
    <motion.div 
      className='w-[20px] h-[20px] border border-solid border-white fixed z-[999]  bg-transparent rounded-full'
      animate={{x:position.x-45, y:position.y-3}}  
      transition={{ type: 'spring', stiffness: 80, damping: 10 }}
    ></motion.div>

    // <div>
      
    // </div>
  )
}

export default Cursor