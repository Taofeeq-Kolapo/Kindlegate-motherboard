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
                <p className="text-[36px] text-[#14242C] font-bold">Upcoming Event</p>
            </div>
            <div className='flex flex-col gap-5 w-full white'>
                {
                    event.map((e, i) => {
                        return (
                            <div key={i} className='flex lg:flex-row flex-col items-center gap-[5%] w-full rouded-[20px] shadow-md p-8'>
                                <div className=' w-1/2'>
                                    <Image src={e.img} className='rounded-2xl' height={300} width={400} alt='' />
                                </div>
                                <div className='flex flex-col gap-4  lg:w-1/2'>
                                    <p className='text-[32px] text-black font-bold'>{e.title}</p>
                                    <p>{e.content}</p>
                                    <div>
                                        <button className='text-[#2B2B2B] bg-[#E3B522] rounded-2xl font-bold text-[20px] px-6 py-1'>{e.join}</button>
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