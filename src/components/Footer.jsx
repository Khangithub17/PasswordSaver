import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center fixed bottom-0 w-full'>
        <div className="logo font-bold text-white text-2xl">
          <span className="text-green-700"> &lt;</span>
          Pass <span className="text-green-700"> Saver</span>
          <span className="text-green-700"> /&gt;</span>
        </div>
        <div className='flex justify-center items-center'>

        
      Created with <img className='w-10 max-2 ' src="/public/heart.png" alt="" /> by codewithkhan
    </div>
    </div>
  )
}

export default Footer
