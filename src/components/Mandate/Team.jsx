import React from 'react'
import Image from 'next/image'

const Team = () => {

    const trustee = [
        {
            img: "/img/Avatard.svg",
            post: 'TRUSTEES',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'BOARD OF DIRECTORS',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'GOVERNING COUNCIL',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'VOLUNTEERS',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'SPONSORS',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'MENTORS',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
    ]
    return (
        <div className='flex flex-col px-[10%] lg:my-[5%] lg:gap-10 items-center'>
            <div className='flex lg:flex-col flex-row lg:items-center w-full'>
                <div className='flex flex-col lg:justify-center lg:items-center items-start lg:w-full  w-[30%]'>
                    <p className='text-[#1E1E1E] lg:text-[36px] font-bold '>Our Team</p>
                    <p className='h-1 lg:w-[135.2px] w-[66px] rounded-full bg-[#E3B522]'></p>
                </div>
                <div className='lg:text-[20px] md:text-[16px] text-[14px] lg:w-[70%] w-[70%] lg:text-center text-start flex flex-col gap-5'>
                    <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                    <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                    <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                    <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                </div>
            </div>

            <div className='w-full grid lg:grid-cols-3 mt-7 md:grid-cols-2 grid-cols-1 gap-6 lg:w-[70%] lg:gap-[10%]'>
                {
                    trustee.map((d, i) => {
                        return (
                            <div key={i} className='flex flex-col w-full'>
                                <div className='bg-[#E3B522] pt-4 flex justify-center items-end'>
                                    <Image src={d.img} alt='' width={150} height={200} />
                                </div>
                                <div className='flex justify-center py-2 bg-[#14BDE3]'>
                                    <p className='font-bold'>{d.post}</p>
                                </div>
                                <div className='bg-white border-1 border-black'>
                                    <p className='font-semibold'>{d.name}</p>
                                    <p>{d.desc}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full flex justify-center my-8 flex-col items-center gap-5' >
                <div className='flex flex-col items-center'>
                    <p className='text-[36px] text-[#1E1E1E] font-bold '>Our Partners</p>
                    <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                </div>
                <div>
                    <Image src={"/img/majorpartnerlogo.svg"} alt='' width={450} height={450} className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Team