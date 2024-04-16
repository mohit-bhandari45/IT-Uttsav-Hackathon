import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { DetailsContext } from '../../context/context';
import 'animate.css';

const HeroSec = (props) => {
  const [first, setfirst] = useState(0)
  const [emailmain, setemailmain] = useState("")
  const value = useContext(DetailsContext)


  const handleChange = (e) => {
    value.setdetails({...value.details,["personal"]:{...value.details.personal,[e.target.name]:e.target.value}})
  }
  
  const handleClick = () => {
    props.setcon(false)
  }

  return (
    <div className='main h-[85vh] w-full text-white relative z-20 flex'>
      <div className="left w-[65vw] flex flex-col gap-28 pl-24 justify-center h-[85vh]">
        <div className="heading text-7xl font-bold">
          <div className="head1 animate__animated animate__slideInLeft">Turn Trash into Treasure,</div>
          <div className="head2 animate__animated animate__slideInLeft">Providing free Pickups</div>
        </div>
        <div className="para flex flex-col gap-3">
          <div className="head1 animate__animated animate__slideInLeft pick text-4xl">
            Schedule a Pickup
          </div>
          <div className="points">
            <form className='flex gap-10' action="">
              <input name='email' onChange={handleChange} className='animate__animated animate__slideInUp py-1 pl-3 pr-40 text-black rounded-md flex justify-center items-center' type="email" placeholder='examplemail@gmail.com' />
              <input onClick={handleClick} type="button" value="Next" className='animate__animated animate__fadeInUp  bg-black px-10 py-2 cursor-pointer rounded-md text-2xl' />
            </form>
          </div>
        </div>
      </div>

      <div className="right w-[30vw] flex flex-col relative justify-center items-center">
        <div className="image">
          <img className='w-[500px] h-[500px] relative top-[-100px] animate__animated animate__fadeIn' src="src/assets/heart.png" alt="" />
        </div>
        <div className="button">
          <button className='rounded-md px-5 py-2 bg-yellow-400 top-[-100px] relative text-black text-xl animate__animated animate__slideInUp'>Explore more</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSec
