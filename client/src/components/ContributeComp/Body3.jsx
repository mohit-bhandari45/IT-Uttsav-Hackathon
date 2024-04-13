import React from 'react'

const Body3 = (props) => {
    return (
        <div className='h-[85vh] w-full flex justify-center items-center rounded-md font-[Helvetica] relative'>
            <div className="main opacity-60 h-[75vh] bg-[#37A896] w-[80%] flex justify-center items-center rounded-md absolute">
                <div className="secmain opacity-90 h-[73vh] w-[99%] bg-[#71b7ac] flex justify-center items-center rounded-md absolute">
                </div>
            </div>
            <div className="card h-[71vh] w-[78%] bg-[#ffffff] rounded-md flex justify-center items-center relative">
                <div className="left h-[65vh]  gap-14 w-[40%] bg-[#ECFFFD] flex flex-col justify-center items-start px-10">
                    <div className="title text-3xl font-bold pl-2">
                        Contribute
                    </div>
                    <div className="sec1 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full">1</div>
                        <div className="para w-[200px] text-xl">Personal Details</div>
                        <div className="line absolute top-[180px] w-[4px] h-[40px] left-[88px] bg-[#DDE6E5]"></div>
                    </div>

                    <div className="sec2 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full">2</div>
                        <div className="para w-[200px] text-xl">Items List</div>
                        <div className="line absolute top-[276px] w-[4px] h-[40px] left-[88px] bg-[#DDE6E5]"></div>
                    </div>

                    <div className="sec3 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#37A896] p-2 w-[18%] rounded-full text-white">3</div>
                        <div className="para w-[200px] text-xl">Pickup Location</div>
                        <div className="line absolute top-[374px] w-[4px] h-[40px] left-[88px] bg-[#37A896]"></div>
                    </div>

                    <div className="sec3 flex justify-center items-center gap-5">
                        <div className="flex justify-center items-center font-bold num bg-[#DDE6E5] p-2 w-[18%] rounded-full ">4</div>
                        <div className="para w-[200px] text-xl">Complete</div>
                    </div>

                </div>

                <div className="form w-[55%] h-full flex flex-col justify-center items-center">
                    <form action="" className='flex flex-col justify-center gap-4'>

                        <div className="about flex flex-col gap-3">
                            <div className="about1 text-xl">Select a pickup location</div>
                            <div className="inputs flex flex-col gap-4">
                                <input className='px-3 py-3 border-[2px] border-[#37A896] w-[300px] rounded-md' type="text" placeholder='Items Present(General)' />
                                <div className="buttonadd"><button className='text-white font-bold bg-[#37A896] rounded-md px-7 py-2 text-xl'>Get Current Location</button></div>
                            </div>
                        </div>

                        <div className="image w-[330px] py-5 text-xl text-gray-400">
                            <img className='w-[250px] h-[150px]' src="https://imgs.search.brave.com/utZe9vubUtiPLUqnJcK91yeEdg50i9vrZJKpilRXt4k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM5/MjM1NjM0NS9waG90/by9jaXR5LXN0cmVl/dC1tYXAuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVktQjNN/QkhVTXNtUDlKZk1z/eU5DQmp5U25rQnVJ/WXdmVHhIZW15VjZq/QzQ9" alt="" />
                        </div>
                        

                        <div className="line w-[30vw] h-[2px] bg-[#DDE6E5]"></div>
                        <div className="button">
                            <button onClick={()=>props.settrigger(4)} className='ml-[360px] text-white font-bold bg-[#37A896] rounded-md px-7 py-2 text-xl'>Next</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Body3