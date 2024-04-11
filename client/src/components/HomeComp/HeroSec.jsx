import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const HeroSec = (props) => {
  const navigate=useNavigate()
  const [email, setemail] = useState("")

  const handleChange=(e)=>{
    setemail(e.target.value)
  }

  const handleClick=() => {
    props.setcon(false)
    props.setemail(email)
  }
  

  return (
    <div className='main h-[85vh] w-full text-white relative z-20 flex'>
      <div className="left w-[65vw] flex flex-col gap-28 pl-24 justify-center h-[85vh]">
        <div className="heading text-7xl font-bold">
          <div className="head1">Turn Trash into Treasure,</div>
          <div className="head2">Providing free Pickups</div>
        </div>
        <div className="para flex flex-col gap-3">
          <div className="pick text-4xl">
            Schedule a Pickup
          </div>
          <div className="points">
            <form className='flex gap-10' action="">
              <input onChange={handleChange} className='py-1 pl-3 pr-40 text-black rounded-md flex justify-center items-center' type="email" value={email} placeholder='examplemail@gmail.com' />
              <input onClick={handleClick} type="button" value="Next" className='bg-black px-10 py-2 cursor-pointer rounded-md text-2xl' />
            </form>
          </div>
        </div>
      </div>

      <div className="right w-[30vw] flex flex-col relative justify-center items-center">
        <div className="image">
          <img className='w-[500px] h-[500px] relative top-[-100px]' src="src/assets/heart.png" alt="" />
        </div>
        <div className="button">
          <button className='rounded-md px-5 py-2 bg-yellow-400 top-[-100px] relative text-black text-xl'>Explore more</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSec
