import React from 'react'
import Image from 'next/image'

const Value = () => {
    return (
        <div className='flex flex-col bg-[#00586B] rounded-xl p-6 lg:gap-0 gap-4 '>
            <p className='lg:w-[40%] lg:text-[40px] text-[30px] font-bold text-white'>OUR VALUE ADDING ROADMAP <span className='border-b-2 border-[#E3B522] '>(HESS MANDATE)</span></p>
            <div className='flex lg:flex-row flex-col items-center relative'>
                <div className='lg:w-[40%] w-full lg:absolute g:left-[14%]'>
                    <div className='flex flex-col gap-2 p-4 bg-[#4B4B4B] rounded-lg lg:w-full '>
                        <p>Healthy communities:</p>
                        <p>We believe when our communities are healthy and Eco-friendly, people thrive. Consequently, often many of the services that keep people healthy are difficult to access for the people who need them most. We will facilitate enabling environments to promote creativity, innovation and collaboration for healthcare causes and objectives. We will ensure that through our community networks every Hungry Citizen within our reach gets Food Assistance and the Homeless get a clean living environment with access to disease prevention medicine.</p>
                    </div>
                </div>
                <div className='flex lg:justify-end w-full lg:pr-[12%]'>
                    <Image src={"/img/outdoor.svg"} className='w-[532px] h-[572px]' width={250} height={250} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Value