import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MentorBody = () => {
    const data = [
        {
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        }
    ]
    return (
        <div className='px-[10%] flex flex-col items-center justify-center lg:my-[5%] my-[3%] '>
            <div className='flex flex-col lg:gap-7 gap-5 lg:w-[60%] w-full items-center'>
                <p className='lg:text-[36px] md:text-[23px] text-[18px] font-bold lg:w-[70%] text-center'>Become a Mentor</p>
                <p className='flex lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”</p>
                <p className='flex lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”</p>

                <div className='w-full flex justify-center'>
                    <Link href={"/apply"}>
                        <button className='px-10 py-3 rounded-[56px] bg-[#14BDE3] font-bold'>Apply</button>
                    </Link>
                </div>
            </div>
            <div className='flex flex-col gap-6 py-[4%]'>
                <p className='lg:text-[40px] md:text-[24px] text-[16px] font-bold'>Our Sponsorship Package</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[10%] gap-5'>
                    {
                        data.map((d, i) => {
                            return (
                                <div key={i} className='flex flex-col items-center justify-center'>
                                    <div className='flex flex-col items-center gap-3'>
                                        <Image src={d.img} width={300} height={300} alt='' />
                                        <p className='lg:text-2xl text-xl font-bold'>{d.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MentorBody