import React, { useEffect, useState } from 'react'
import { uploadApi, uploaduserdata } from '../../Apis/api'
import { useContext } from 'react'
import { DetailsContext } from '../../context/context'

const Body4 = (props) => {
    const value = useContext(DetailsContext)

    useEffect(() => {
      console.log(props.con)
    }, [])
    

    const handleClick = async (e) => {
        e.preventDefault()
        let a = await fetch(uploaduserdata, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(value.details)
        })
        console.log(await a.text());
        props.setcon(true)
    }


    return (
        <div className='h-[85vh] w-full flex justify-center items-center rounded-md font-[Helvetica] relative'>
            <div className="main opacity-60 h-[75vh] bg-[#37A896] w-[80%] flex justify-center items-center rounded-md absolute">
                <div className="secmain opacity-90 h-[73vh] w-[99%] bg-[#71b7ac] flex justify-center items-center rounded-md absolute">
                </div>
            </div>
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
                        <div className="flex justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full animate__animated animate__fadeIn">3</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Pickup Location</div>
                        <div className="line absolute top-[374px] w-[4px] h-[40px] left-[88px] bg-[#DDE6E5] animate__animated animate__fadeIn"></div>
                    </div>

                    <div className="sec3 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#37A896] p-2 w-[18%] rounded-full text-white animate__animated animate__fadeIn">4</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Complete</div>
                    </div>

                </div>

                <div className="form w-[55%] h-full flex flex-col justify-center items-center">
                    <form action="" className='flex flex-col justify-center gap-28'>

                        <div className="about flex flex-col gap-8">
                            <div className="about1 text-2xl font-bold animate__animated animate__slideInUp animate__fadeIn">Thanks for Your Contribution!</div>
                            <div className="paras flex flex-col gap-8">
                                <div className="para1 w-[360px] text-xl animate__animated animate__slideInUp animate__fadeIn">Additional details will be provided to you via your email:</div>
                                <div className="email text-[#37A896] animate__animated animate__slideInUp animate__fadeIn">user-email@gmail.com</div>
                            </div>
                        </div>

                        <div className="lines">
                            <div className="line w-[30vw] h-[2px] bg-[#DDE6E5]"></div>
                            <div className="button">
                                <button onClick={handleClick} className='ml-[360px] text-white my-4 font-bold bg-[#37A896] rounded-md px-7 py-2 text-xl animate__animated animate__slideInUp animate__fadeIn'>Next</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body4