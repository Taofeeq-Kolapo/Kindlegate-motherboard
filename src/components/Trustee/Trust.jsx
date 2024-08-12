import Image from 'next/image'
import React from 'react'

const Trust = () => {
    const Data = [
        {
            img: "/img/AvatarD.svg",
            title: "LOREM IPSUM",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.aecenas porttitor congue massa.Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.Fusce est.Vivamus a tellus.Pellentesque habitant "
        },
        {
            img: "/img/AvatarD.svg",
            title: "LOREM IPSUM",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.aecenas porttitor congue massa.Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.Fusce est.Vivamus a tellus.Pellentesque habitant "
        },
        {
            img: "/img/AvatarD.svg",
            title: "LOREM IPSUM",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.aecenas porttitor congue massa.Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.Fusce est.Vivamus a tellus.Pellentesque habitant "
        },
        {
            img: "/img/AvatarD.svg",
            title: "LOREM IPSUM",
            content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.aecenas porttitor congue massa.Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.Fusce est.Vivamus a tellus.Pellentesque habitant "
        }
    ]
    return (
        <div className='flex flex-col gap-7 py-[4%]'>
            <div className='w-full items-center justify-center flex'>
                <div className='flex flex-col items-center'>
                    <p className='text-[20px] text-[#1E1E1E] font-bold '>THE EXECUTIVES</p>
                    <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                </div>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-[6%] gap-4 w-full px-[10%] lg:mb-[2%]'>
                {
                    Data.map((d, i) => {
                        return (
                            <div key={i} className='flex flex-col items-center'>
                                <Image src={d.img} width={300} height={300} alt='' />
                                <div className='flex flex-col items-center'>
                                    <p className='text-[20px] text-[#1E1E1E] font-bold '>{d.title}</p>
                                    <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                                </div>
                                <p className='w-[70%]'>{d.content}</p>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Trust