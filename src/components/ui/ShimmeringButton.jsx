import React from 'react'

const ShimmeringButton = ({
  title = String, 
  icon = React.ReactNode, 
  otherClasses = String, 
  handleClick = () => {},
}
) => {
  return (
    <button className={`inline-flex h-12 animate-shimmer items-center justify-center gap-1 rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 py-6  text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-slate-700 focus:ring-offset-2 focus:ring-offset-slate-700 text-lg font-bold z-20 ${otherClasses}`} onClick={handleClick}>
      {icon}
      <span>{title}</span> 
    </button>
  )
}

export default ShimmeringButton