import React, { useState,useEffect } from 'react'
import Navbar from '../components/UniversalComp/Navbar'
import Footer from '../components/UniversalComp/Footer'
import Body1 from '../components/ContributeComp/Body1'
import Body2 from '../components/ContributeComp/Body2'
import Body3 from '../components/ContributeComp/Body3'
import Body4 from '../components/ContributeComp/Body4'


const Contribution = () => {
  const [trigger, settrigger] = useState(1)

  return (
    <>
      <Navbar color="black" />
      {trigger===1?<Body1 settrigger={settrigger}/>:""}
      {trigger===2?<Body2 settrigger={settrigger}/>:""}
      {trigger===3?<Body3 settrigger={settrigger}/>:""}
      {trigger===4?<Body4/>:""}
      <Footer/>
    </>
  )
}

export default Contribution