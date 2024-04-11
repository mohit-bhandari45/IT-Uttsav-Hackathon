import React from 'react'

const Card2 = () => {
    return (
        <div className='flex gap-10 py-5 justify-start font-[Helvetica] pl-44 relative top-0'>
            <div className="num bg-black w-[75px] h-[75px] rounded-full text-white flex justify-center items-center text-2xl relative z-10">2</div>
            <div className="second flex flex-col gap-6 pt-2">
                <div className="heading font-bold text-[40px]">Register your Pickup Details</div>
                <div className="mid relative flex justify-center items-center">
                    <div className="image object-contain">
                        <img className='w-[700px] h-[700px] relative top-[-180px] left-[-150px]' src="src/assets/card-removebg-preview.png" alt="" />
                    </div>
                    <div className="para1 text-3xl w-[400px] relative top-[-180px] left-[-150px]">Pickup Zones are assigned where most other choose to pickup on.</div>
                </div>
                <div className="button relative top-[-300px]">
                    <button className='bg-[#FAB328] py-2 px-6 rounded-md text-xl'>Schedule my Pickup</button>
                </div>
            </div>
        </div>
    )
}

export default Card2
