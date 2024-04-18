import React, { useEffect, useState } from 'react'
import { locateInMap } from '../../utils/functions'
import { useContext } from 'react'
import { DetailsContext } from '../../context/context'

const Body3 = (props) => {
    const [long, setLong] = useState()
    const [lat, setLat] = useState()
    const [address, setaddress] = useState("")
    const [disabled, setdisabled] = useState(false)
    const value = useContext(DetailsContext)
    const [coordbool, setcoordbool] = useState(false)
    const [coordbool2, setcoordbool2] = useState(false)
    const [coordbool3, setcoordbool3] = useState(false)

    //rest states
    // const [coords, setcoords] = useState({})
    // const [addressmain, setadressmain] = useState()
    const [main, setmain] = useState({
        "coords": {
            "N": "77.2373",
            "E": "28.6542"
        },
        "address": "Khairigaon,Prem Nagar Dehradun"
    });

    useEffect(() => {
        if (coordbool) {
            // console.log("coord is true")
            // setcoords({"N":lat,"E":long})
            // setadressmain({"address":address})
            // setmain({...coords,...addressmain})
            value.setdetails({ ...value.details, ["location"]: main })
            console.log(value.details)
            // setcoordbool2(true)
        }
    }, [coordbool])

    const handleClick = async (e) => {
        e.preventDefault()
        navigator.geolocation.getCurrentPosition(async (position) => {
            setLong(position.coords.longitude)
            setLat(position.coords.latitude)
            setaddress("Kehri Gaon, Premnagar Dehradun")
            setdisabled(true)
            document.querySelector(".map").innerHTML = `<iframe width="250px" height="150px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=150px&amp;hl=en&amp;q=${position.coords.latitude},${position.coords.longitude}+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe>`
            setcoordbool(true)
        })
    }

    const handleClickMain = (e) => {
        e.preventDefault()
        props.settrigger(4)

    }


    return (
        <div className='h-[85vh] w-full flex justify-center items-center rounded-md font-[Helvetica] relative'>
            <div className="main opacity-60 h-[75vh] bg-[#37A896] w-[80%] flex justify-center items-center rounded-md absolute">
                <div className="secmain opacity-90 h-[73vh] w-[99%] bg-[#71b7ac] flex justify-center items-center rounded-md absolute">
                </div>
            </div>

            {/* Not Working */}
            {/* <input name='E' className='bg-black text-white' onChange={handleChange} type="text"/>
            <input name='F' className='bg-black text-white' onChange={handleChange} type="text"/> */}

            <div className="card h-[71vh] w-[78%] bg-[#ffffff] rounded-md flex justify-center items-center relative">
                <div className="left h-[65vh]  gap-14 w-[40%] bg-[#ECFFFD] flex flex-col justify-center items-start px-10">
                    <div className="title text-3xl font-bold pl-2 animate__animated animate__slideInLeft animate__fadeIn">
                        Contribute
                    </div>
                    <div className="sec1 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full animate__animated animate__fadeIn">1</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Personal Details</div>
                        <div className="line absolute top-[180px] w-[4px] h-[40px] left-[88px] bg-[#DDE6E5] animate__animated animate__fadeIn"></div>
                    </div>

                    <div className="sec2 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full animate__animated animate__fadeIn">2</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Items List</div>
                        <div className="line absolute top-[276px] w-[4px] h-[40px] left-[88px] bg-[#DDE6E5] animate__animated animate__fadeIn"></div>
                    </div>

                    <div className="sec3 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#37A896] p-2 w-[18%] rounded-full text-white animate__animated animate__fadeIn">3</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Pickup Location</div>
                        <div className="line absolute top-[374px] w-[4px] h-[40px] left-[88px] bg-[#37A896] animate__animated animate__fadeIn"></div>
                    </div>

                    <div className="sec3 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full animate__animated animate__fadeIn">4</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Complete</div>
                    </div>

                </div>

                <div className="form w-[55%] h-full flex flex-col justify-center items-center">
                    <form action="" className='flex flex-col justify-center gap-4'>

                        <div className="about flex flex-col gap-5">
                            <div className="about1 text-2xl font-bold animate__animated animate__slideInUp animate__fadeIn">Select a pickup location</div>
                            <div className="inputs flex flex-col gap-4">
                                {disabled ? <div><span className='mr-3 text-xl'>Your Address:-</span><input value={address} className='px-3 py-3 border-[2px] border-[#37A896] w-[400px] rounded-md' type="text" placeholder='Your Current Adddress' /></div> : ""}
                                <div className="buttonadd flex gap-5">
                                    <button onClick={handleClick} className='text-white font-bold bg-[#37A896] rounded-md px-7 py-2 text-xl animate__animated animate__slideInUp animate__fadeIn'>Get Current Location</button>
                                </div>
                            </div>
                        </div>

                        <div className='w-[300px] map'>
                            <iframe width="250px" height="150px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=150px&amp;hl=en&amp;q=${position.coords.latitude},${position.coords.longitude}+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">hiking gps</a></iframe>
                        </div>


                        <div className="line w-[30vw] h-[2px] bg-[#DDE6E5]"></div>
                        <div className="button">
                            <button onClick={handleClickMain} className='ml-[360px] text-white font-bold bg-[#37A896] rounded-md px-7 py-2 text-xl animate__animated animate__slideInUp animate__fadeIn'>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body3