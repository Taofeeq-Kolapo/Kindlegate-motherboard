import React from 'react'
import Image from 'next/image'

const UpcomingEvent = () => {
    const event = [
        {
            img: 'img/collab.svg',
            date: '23 May, 2023',
            title: "About this event",
            content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            join: 'Join Now',
        },
        {
            img: 'img/collab.svg',
            date: '23 May, 2023',
            title: "About this event",
            content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            join: 'Join Now',
        },
        {
            img: 'img/collab.svg',
            date: '23 May, 2023',
            title: "About this event",
            content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            join: 'Join Now',
        }
    ]
    return (
        <div className='flex flex-col py-[6%] gap-9 px-[10%] bg-white'>
            <div className="w-full justify-center flex">
                <p className="lg:text-[36px] text-[20px] text-[#14242C] font-bold">Upcoming Event</p>
            </div>
            <div className='flex flex-col gap-5 w-full white'>
                {
                    event.map((e, i) => {
                        return (
                            <div key={i} className='flex lg:flex-row items-center gap-[5%] w-full rouded-[20px] shadow-md p-8'>
                                <div className='lg:w-1/2'>
                                    <Image src={e.img} className='rounded-2xl' height={300} width={400} alt='' />
                                </div>
                                <div className='flex flex-col lg:gap-4 gap-2 items-start lg:w-1/2'>
                                    <p className='lg:text-[32px] text-[16px] text-black font-bold'>{e.title}</p>
                                    <p className='text-justify lg:text-[20px] text-[10px]'>{e.content}</p>
                                    <div>
                                        <button className='text-[#2B2B2B] bg-[#E3B522] rounded-2xl lg:font-bold font-semibold lg:text-[20px] md:text-[16px] sm:text-[12px] lg:px-6 px-3 py-1'>{e.join}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default UpcomingEvent