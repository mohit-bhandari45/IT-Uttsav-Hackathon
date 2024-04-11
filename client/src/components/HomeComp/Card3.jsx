import React from 'react'

const Card3 = () => {
    return (
        <div className='flex gap-10 justify-start font-[Helvetica] pl-44 top-[-250px] relative h-[400px]'>
            <div className="num bg-black w-[75px] h-[75px] rounded-full text-white flex justify-center items-center text-2xl relative z-10">3</div>
            <div className="second flex flex-col gap-6 pt-2">
                <div className="heading font-bold text-[40px]">Get Updates on where your waste goes </div>
                <div className="body relative flex justify-center items-center">
                    <div className="image relative top-[100px]">
                        <img className='relative w-[600px] h-[600px] left-[-140px] top-[-150px]' src="src/assets/man-removebg-preview.png" alt="" />
                    </div>
                    <div className="para text-3xl w-[600px] flex flex-col gap-10 relative top-[-40px] left-[-150px]">
                        <div className="para1 w-[500px]">
                            Organisations listed will provide updates  on your <span className='font-bold'>recycled wastes & provide recycled</span>
                        </div>
                        <div className="para2 relative top-[35px]">
                            These are usually <span className='font-bold'>Non-Profit Wellfare Organisations</span> listed here on Ecohaul
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3
