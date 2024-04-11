import './App.css'
import Navbar from './components/UniversalComp/Navbar'
import HeroSec from './components/HomeComp/HeroSec'
import Mid from './components/HomeComp/Mid'
import Card1 from './components/HomeComp/Card1'
import Card2 from './components/HomeComp/Card2'
import Card3 from './components/HomeComp/Card3'
import Mid2 from './components/HomeComp/Mid2'
import Footer from './components/UniversalComp/Footer'

function App() {
  
  return (
    <>
      <img className='w-full h-[100vh] absolute opacity-100' src="src/assets/image.png" alt="" />
      <div className='w-full h-[100vh] absolute z-10 opacity-80 bg-black'></div>
      <Navbar color="none"/>
      <HeroSec />
      <Mid />
      <div className="line absolute h-[1100px] w-[10px] bg-black left-[209px] top-[1000px]">

      </div>
      <Card1/>
      <Card2/>
      <Card3/>
      <Mid2/>
      <Footer/>
    </>
  )
}

export default App
