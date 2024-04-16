import React, { useContext, useRef } from 'react'
import { useState, useEffect } from 'react'
import { DetailsContext } from '../../context/context'
import { uploadApi } from '../../Apis/api'
import axios from 'axios'

const Body2 = (props) => {

    const value = useContext(DetailsContext)
    const [height1, setheight1] = useState(75)
    const [height2, setheight2] = useState(73)
    const [height3, setheight3] = useState(70)
    const [files, setfiles] = useState([])
    const [fileImages, setfileImages] = useState([])
    const ref = useRef()

    const handleclick = async (e) => {
        e.preventDefault();

        //this is not working,i don't know why
        // value.setdetails({
        //     ...value.details,
        //     ["items"]: {
        //         ...value.details.items,
        //         ["file"]: [...value.details.items.file,files]
        //     }
        // })

        console.log(value.details)
        const formData = new FormData();
        for (let fileInput of fileImages) {
            formData.append('files', fileInput);
        }
        let a = await fetch(uploadApi, {
            method: 'POST',
            body: formData
        })
        console.log(await a.text());
        console.log("over")
        props.settrigger(3)
    }

    const handlechange = (e) => {
        value.setdetails({ ...value.details, ["items"]: { ...value.details.items, [e.target.name]: e.target.value } })
    }

    const handlechange2 = async (e) => {
        setfileImages([...fileImages, e.target.files[0]])
        setfiles([...files, e.target.value])
        value.setdetails({
            ...value.details,
            ["items"]: {
                ...value.details.items,
                ["file"]: [...value.details.items.file,e.target.value]
            }
        })
    }

    useEffect(() => {
        setheight1(height1 + 2)
        setheight2(height2 + 2)
        setheight3(height3 + 2)
    }, [files])


    return (
        <div className='h-[85vh] w-full flex justify-center items-center rounded-md font-[Helvetica] relative'>
            <div style={{ height: height1 + "vh" }} className="main opacity-60 bg-[#37A896] w-[80%] flex justify-center items-center rounded-md absolute">
                <div style={{ height: height2 + "vh" }} className="secmain opacity-90 w-[99%] bg-[#71b7ac] flex justify-center items-center rounded-md absolute">
                </div>
            </div>
            <div style={{ height: height3 + "vh" }} className="card h-[71vh] w-[78%] bg-[#ffffff] rounded-md flex justify-center items-center relative">
                <div className="left h-[65vh]  gap-14 w-[40%] bg-[#ECFFFD] flex flex-col justify-center items-start px-10">
                    <div className="title text-3xl font-bold pl-2 animate__animated animate__slideInLeft animate__fadeIn">
                        Contribute
                    </div>
                    <div className="sec1 flex justify-center items-center gap-5">
                        <div className="flex animate__animated animate__fadeIn justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full">1</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Personal Details</div>
                        <div className="line animate__animated animate__fadeIn absolute top-[190px] w-[4px] h-[40px] left-[88px] bg-[#DDE6E5]"></div>
                    </div>

                    <div className="sec2 flex justify-center items-center gap-5">
                        <div className="flex animate__animated animate__fadeIn justify-center items-center font-bold num bg-[#37A896] p-2 w-[18%] rounded-full text-white">2</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Items List</div>
                        <div className="line animate__animated animate__fadeIn absolute top-[286px] w-[4px] h-[40px] left-[88px] bg-[#37A896]"></div>
                    </div>

                    <div className="sec3 flex justify-center items-center gap-5">
                        <div className="flex animate__animated animate__fadeIn justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full ">3</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Pickup Location</div>
                        <div className="line animate__animated animate__fadeIn absolute top-[384px] w-[4px] h-[40px] left-[88px] bg-[#DDE6E5]"></div>
                    </div>

                    <div className="sec3 flex justify-center items-center gap-5">
                        <div className="flex animate__animated animate__fadeIn justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full ">4</div>
                        <div className="para w-[200px] text-xl animate__animated animate__slideInLeft animate__fadeIn">Complete</div>
                    </div>

                </div>

                <div className="form w-[55%] h-full flex flex-col justify-center items-center">
                    <form action="" className='flex flex-col justify-center gap-7'>

                        <div className="about flex flex-col gap-3">
                            <div className="about1 text-xl animate__animated animate__slideInUp animate__fadeIn">Wastes to Add(Optional)</div>
                            <div className="inputs flex flex-col gap-4">
                                <input  name="name" onChange={handlechange} className='px-3 animate__animated animate__slideInUp animate__fadeIn py-3 border-[2px] border-[#37A896] w-[300px] rounded-md' type="text" placeholder='Items Present(General)' />
                                <input name="types" onChange={handlechange} className='px-3 animate__animated animate__slideInUp animate__fadeIn py-3 border-[2px] border-[#37A896] w-[300px] rounded-md' type="text" placeholder='Type of items' />
                            </div>

                        </div>

                        <div className='images'>
                            {files.map((item) => {
                                return <div className="imagename">
                                    {item}
                                </div>
                            })}
                        </div>

                        <div className="image w-[330px] py-2 border-dashed border-[2px] border-[#37A896] rounded-md text-xl px-3 text-gray-400">
                            <div className="heading">
                                <input ref={ref} onChange={handlechange2} name="file" className='files cursor-pointer block w-full text-lg text-gray-900 border animate__animated animate__fadeIn border-gray-300 rounded-lg bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400' type="file" placeholder='Attach Image' id="" />                            </div>
                        </div>
                        <div className="buttonadd"><button className='text-white animate__animated animate__slideInUp animate__fadeIn font-bold bg-[#37A896] rounded-md px-5 py-1 text-xl'>Upload</button></div>

                        <div className="line w-[30vw] h-[2px] bg-[#DDE6E5]"></div>
                        <div className="button">
                            <button onClick={handleclick} className='ml-[360px] text-white animate__animated animate__slideInUp animate__fadeIn font-bold bg-[#37A896] rounded-md px-7 py-2 text-xl'>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body2
