import React from 'react'

const Card1 = () => {
    return (
        <div className='flex gap-10 py-16 justify-center font-[Helvetica] relative'>
            <div className="num bg-black w-[70px] h-[70px] rounded-full text-white flex justify-center items-center text-2xl">1</div>
            <div className="mid flex flex-col gap-6 pt-1">
                <div className="heading font-bold text-[40px]">Collect all your waste for pickup</div>
                <div className="paras flex flex-col gap-10">
                    <div className="para1 text-2xl w-[400px] text-[#0A0E1C]">Organise dry and wet wastes into separate components</div>
                    <div className="funs">
                        <div className="para2 text-2xl pb-3 text-[#0A0E1C]">Cut out plastics for recycling</div>
                        <button className='bg-[#FAB328] py-2 px-3 rounded-md text-xl w-36'>Know How</button>
                    </div>
                </div>
            </div>
            <div className="image relative">
                <img className='relative w-[400px] h-[400px]' src="src/assets/recycle-removebg-preview.png" alt="" />
            </div>
        </div>
    )
}

export default Card1
