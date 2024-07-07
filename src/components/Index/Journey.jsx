import React from 'react'
import { Btn1 } from '../Reusable/Btn1'
import Image from 'next/image'

const Journey = () => {
    return (
        <div className='lg:pl-[10%] px-[10%] flex lg:flex-row py-6 gap-11 items-center bg-[#E3B522] justify-between'>
            <div className='flex flex-col gap-6'>
                <p className='text-[#1D1D1D] text-[25px] font-bold'>THE JOURNEY TO BUILDING A BETTER WORLD STARTS HERE WITH YOU</p>
                <p className='font-semibold text-black lg:w-[80%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.</p>
                <Btn1
                    text={"GET INVOLVED"}
                    link={"/involved"}
                />
            </div>
            <Image className='lg:block relative right-[-13%] hidden' src={"/img/half2.svg"} width={200} height={200} alt='' />
        </div>
    )
}

export default Journey