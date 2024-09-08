import React from 'react'
import Image from 'next/image'

const ContactInfo = () => {
    return (
        <div className='bg-[#00586B] px-[5%] flex flex-col gap-5 py-[5%] text-white rounded-b-[20px]'>
            <div className="w-full justify-center mb-6 lg:ml-[5%] flex">
                <p className="lg:text-[36px] text-[20px] text-white font-bold">CONTACT INFORMATION</p>
            </div>
            <div className='w-full flex lg:flex-row flex-col lg:justify-around gap-6'>
                <div className='flex flex-col lg:items-center gap-4'>
                    <div className='flex flex-col lg:items-center'>
                        <p className='lg:text-[32px] text-[20px] text-white font-bold'>Address</p>
                        <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                    </div>
                    <div className='flex flex-col lg:items-center leading-none'>
                        <p className='font-bold lg:text-[20px] text-[16px] '>The Grey Gate, Olushola Agbaje, Off Road 13</p>
                        <p className='font-bold lg:text-[20px] text-[16px]'>lekki Phase I, Lagos, Nigeria.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:items-center gap-4'>
                    <div className='flex flex-col lg:items-center'>
                        <p className='lg:text-[32px] text-[20px] text-white font-bold'>Phone and Email</p>
                        <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                    </div>
                    <div className='flex flex-col lg:items-center leading-none'>
                        <p className='font-bold lg:text-[20px] text-[16px]'>+234 818 038 0006</p>
                        <p className='font-bold lg:text-[20px] text-[16px]'>info@kindlegatefoundation.org</p>
                    </div>
                </div>
                <div className='flex flex-col lg:items-start  gap-4'>
                    <div className='flex flex-col lg:items-center'>
                        <p className='lg:text-[32px] text-[20px] text-white font-bold'>Social Media</p>
                        <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                    </div>
                    <div className='flex lg:items-center w-full lg:justify-center'>
                        <div className='flex flex-row gap-1 lg:items-center'>
                            <Image src={"/img/facebook.svg"} alt='' width={30} height={30} />
                            <Image src={"/img/instagram (2).svg"} alt='' width={30} height={30} />
                            <Image src={"/img/instagram.svg"} alt='' width={30} height={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo