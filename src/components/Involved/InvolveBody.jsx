import React from 'react'
import Link from 'next/link'
import { url } from 'inspector'

const InvolveBody = () => {
    const data = [
        {
            content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
            content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
            Link: "VOLUNTEER",
            url: "/volunteer"
        },
        {
            content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
            content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
            Link: "PARTNER",
            url: "/parters"
        },
        {
            content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
            content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
            Link: "MENTOR",
            url: "/mentor"
        },
        {
            content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
            content2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
            Link: "SPONSOR",
            url: "/sponsor"
        },

    ]
    return (
        <div className='px-[10%] flex flex-col items-center justify-center lg:my-[5%] my-[3%] '>
            <div className='flex flex-col lg:gap-7 gap-5 lg:w-[60%] w-full items-center'>
                <p className='lg:text-[36px] md:text-[23px] text-[18px] font-bold lg:w-[70%] text-center'>VOLUNTEER, PARTNER, MENTOR OR SPONSOR</p>
                <p className='flex text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”</p>
                <p className='flex text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”</p>
            </div>
            <div className='h-[8px] bg-[#E3B522]'></div>
            <div className='flex flex-col gap-6 py-[4%]'>
                <p className='lg:text-[40px] md:text-[24px] text-[16px] font-bold'>HERE ARE SOME WAYS TO BE A PART OF US</p>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-[10%]'>
                    {
                        data.map((d, i) => {
                            return (
                                <div key={i} className='flex flex-col items-center'>
                                    <div>
                                        <p className='lg:text-[20px] text-[15px] text-justify'>{d.content1}</p>
                                        <p className='lg:text-[20px] text-[15px] text-justify'>{d.content2}</p>
                                    </div>
                                    <Link href={d.url}>
                                        <button className='lg:px-[56px] font-bold bg-[#E3B522] rounded-[56px] px-[30px] py-[8px] lg:py-[16px]'>{d.Link}</button>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default InvolveBody