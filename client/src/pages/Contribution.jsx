import React, { useState,useEffect } from 'react'
import Navbar from '../components/UniversalComp/Navbar'
import Footer from '../components/UniversalComp/Footer'
import Body from '../components/ContributeComp/Body'


const Contribution = (props) => {

  return (
    <>
      <Navbar color="black" />
      <Body email={props.email}/>
      <Footer />
    </>
  )
}

export default Contribution