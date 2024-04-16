import './App.css'
import Navbar from './components/UniversalComp/Navbar'
import HeroSec from './components/HomeComp/HeroSec'
import Mid from './components/HomeComp/Mid'
import Card1 from './components/HomeComp/Card1'
import Card2 from './components/HomeComp/Card2'
import Card3 from './components/HomeComp/Card3'
import Mid2 from './components/HomeComp/Mid2'
import Footer from './components/UniversalComp/Footer'
import { useState, useEffect } from 'react'
import { DetailsContext } from './context/context'
import Contribution from './pages/Contribution'

function App() {
  const [con, setcon] = useState(true)
  const [details, setdetails] = useState({
    "personal": {
      "fname": "",
      "lname": "",
      "phone": "",
      "email": ""
    },
    "items": {
      "name": "",
      "types": "",
      "file": []
    },
    "location": {
      "coords": {
        "N": "",
        "E": ""
      },
      "address": ""
    }
  })

  return (
    <>
      <DetailsContext.Provider value={{ details, setdetails }}>
        {con ? <div><img className='w-full h-[100vh] absolute opacity-100' src="src/assets/image.png" alt="" />
          <div className='w-full h-[100vh] absolute z-10 opacity-80 bg-black'></div>
          <Navbar color="none" />
          <HeroSec setcon={setcon} />
          <Mid />
          <div className="line absolute h-[1100px] w-[10px] bg-black left-[209px] top-[1000px]"></div>
          <Card1 />
          <Card2 />
          <Card3 />
          <Mid2 />
          <Footer /></div> : <Contribution />}
      </DetailsContext.Provider>
    </>
  )
}

export default App
