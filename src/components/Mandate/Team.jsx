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
            post: 'TRUSTEES',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'TRUSTEES',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'TRUSTEES',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'TRUSTEES',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
        {
            img: "/img/Avatard.svg",
            post: 'TRUSTEES',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina"
        },
    ]
    return (
        <div className='flex flex-col px-[10%] lg:my-[5%] lg:gap-10 '>
            <div className='w-full flex justify-center'>
                <p className='text-[36px] text-[#1E1E1E] font-bold'>Our Team</p>
            </div>
            <div className='flex flex-col gap-3'>
                <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
            </div>

            <div className='w-full grid grid-cols-3 gap-[10%]'>
                {
                    trustee.map((d, i) => {
                        return (
                            <div key={i} className='flex flex-col w-full'>
                                <div className='bg-[#E3B522] p-4 flex justify-center items-center'>
                                    <Image src={d.img} alt='' width={200} height={200} />
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
            <div className='w-full flex justify-center mt-8 flex-col items-center gap-5' >
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