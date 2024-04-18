import React from 'react'

const Mid2 = () => {
    return (
        <div className='flex relative flex-col items-center h-[600px] gap-10 bg-[#ECFFFD] w-full py-5'>
            <div className="image absolute top-[-289px] left-[400px]">
                <img src="src/assets/black-removebg-preview.png" className='w-[700px]' alt="" />
            </div>
            <div className="heading text-5xl font-bold text-white relative z-20">
                Organisations with us
            </div>
            <div className="section flex gap-20 justify-center items- px-40 h-full w-full relative">
                <div className="image bg-white rounded-xl shadow-xl relative w-[800px] h-[440px]">
                    <img className='w-[580px] h-[380px] absolute top-2 left-2' src="src/assets/Screenshot 2024-04-18 100926.png" alt="" />
                    <form action="">
                        <input type="text" className='bg-transparent pt-[400px] pl-[10px]' placeholder='Palini Foundation'/>
                    </form>
                </div>
                <div className="para w-[700px] flex flex-col gap-10 pt-2">
                    <div className="title text-6xl">
                        Palini Foundation
                    </div>
                    <div className="para w-[350px] text-xl text-balance">
                    The Palini Foundation, established in October 2023 by a consortium of law students and committed social advocates, is a non-governmental organization dedicated to ameliorating societal issues and leveraging their expertise for communal betterment.
                    </div>
                    <div className="button">
                        <button className='text-xl font-bold text-white bg-black px-5 py-2 rounded-md'>Explore Organisation </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mid2
