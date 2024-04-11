import React from 'react'

const Footer = () => {
    return (
        <div className='h-[600px] bg-black text-white flex justify-center items-center relative gap-60'>
            <div className="left flex flex-col justify-center items-center relative">
                <div className="heading text-6xl font-bold text-[#FAF3E1]">
                    ECOHAUL
                </div>
                <div className="image w-[300px] h-[300px]">
                    <img src="src/assets/Untitled_design-removebg-preview.png" alt="" />
                </div>
                <div className="button">
                    <button className='bg-[#FAB328] px-10 py-4 rounded-xl text-2xl text-black'>Learn More</button>
                </div>
            </div>
            <div className="middle flex flex-col gap-10 justify-start items-center">
                <div className="heading text-4xl font-bold text-[#FAF3E1]">
                    Enquiries
                </div>
                <div className="para1 w-[150px] ">
                    Contact No. <div></div>
                    For Anyone: <div></div>
                    +(91)9720557588
                    eco.haul@gmail.com
                </div>
                <div className="para2 w-[150px] ">
                    For Organisations: <div></div>
                    +(91)1352763651
                    eco.haul.org@gmail.com
                </div>
            </div>
            <div className="right flex flex-col gap-10 pb-12">
                <div className="heading text-4xl font-bold text-[#FAF3E1]">
                    FAQS
                </div>
                <div className="questions flex flex-col gap-5">
                    <div className="1">How to Contribute</div>
                    <div className="2">Learning about where it goes</div>
                    <div className="3">Enlisting your organization?</div>
                    <div className="4">Benefits</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
