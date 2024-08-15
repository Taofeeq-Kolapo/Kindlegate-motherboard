import Link from 'next/link'
import React from 'react'

const VolHero = () => {
    return (
        <div className="bg-[url(/img/volunteer.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full relative">
            <div className="w-full h-screen bg-[black] absolute top-0 onset-0 bg-opacity-50"></div>
            <div className="pt-[5%] px-[7%] flex w-full ">
                <div className="lg:w-[60%] flex flex-col items-center z-[300] gap-4">
                    <p className="font-bold lg:text-[64px] md:text-[48px] text-[40px] text-white leading-none">OUR VOLUNTEERS</p>
                    <div className="flex flex-col items-center ">
                        <p className="lg:text-[20px] md:text-[16px] sm:text-[12px] text-white text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                        </p>
                    </div>
                    <button className='flex bg-[#14BDE3] lg:px-[4%] rounded-2xl lg:py-3 p-2'>
                        <Link className=' lg:text-[25px] ' href={"/vform"}>Apply</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VolHero