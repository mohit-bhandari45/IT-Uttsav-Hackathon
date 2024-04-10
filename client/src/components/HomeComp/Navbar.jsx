import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[15vh] flex justify-between items-center px-14 text-white font-[Helvetica] relative z-20'>
      <div className="logos flex justify-center items-center">
        <img className='w-20 h-20' src="src/assets/Untitled_design-removebg-preview.png" alt="" />
        <div className="text text-2xl font-extrabold">EcoHaul</div>
      </div>
      <div className="tags flex gap-14 text-xl font-bold">
        <div className="1">Contribute</div>
        <div className="2">Organisation</div>
        <div className="3">Contact Us</div>
      </div>
    </div>
  )
}

export default Navbar
