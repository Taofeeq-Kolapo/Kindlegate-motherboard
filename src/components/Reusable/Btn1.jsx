import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Btn1 = ({ text, link }) => {
    return (
        <Link href={link}>
            <button className="bg-[#14BDE3] text-black lg:text-[22px] lg:w-[361px] w-[150px] font-bold h-[60px] rounded-[56px]">{text}</button>
        </Link>
    )
}
export const Btn3 = ({ text, link }) => {
    return (
        <Link href={link}>
            <button className="bg-[#14BDE3] text-black lg:text-[22px] lg:w-[231px] w-[150px] font-bold h-[60px] rounded-[56px]">{text}</button>
        </Link>
    )
}
export const Btn2 = ({ text }) => {
    return (
        <div>
            <button className="bg-[#E3B522] text-black lg:w-[361px] w-[252px] font-bold h-[60px] rounded-[56px]">{text}</button>
        </div>
    )
}
export const MissionProps = ({ title, content }) => {
    return (
        <div className="flex flex-col justify-end items-end">
            <div className='flex w-full justify-end '>
                <span className='flex flex-col gap-1 items-center'>
                    <p className='text-[32px] font-bold'>{title}</p>
                    <p className='bg-[#E3B522] h-1 w-[90%] rounded-3xl'></p>
                </span>
            </div>
            <p className='flex text-justify text-[20px] lg:w-[550px] md:w-[438px] sm:w-[321px]'>{content}</p>
        </div>
    )
}

export const Whatwedo = ({ img, role, text1, text2, text3 }) => {
    return (
        <div className="flex lg:flex-row flex-col w-full gap-[6%] lg:px-0 px-[10%] justify-between items-center">
            <div className="flex flex-col gap-2 items-center lg:w-[40%]">
                <Image src={img} alt="" className="w-full" width={300} height={300} />
                <div className='flex flex-col gap-1 items-center'>
                    <p className='lg:text-[20px] text-[16px] text-[#1E1E1E] font-bold '>{role}</p>
                    <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-[60%] mt-3 lg:text-justify text-center w-full lg:text-[20px] md:text-[16px] text-[10px] ">
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
        </div>
    )
}
export const TeamProps = ({ img, role, text1, text2, text3, btntext, teamLink }) => {
    return (
        <div id={teamLink} className="flex lg:flex-row flex-col w-full justify-between lg:items-start">
            <div className="flex flex-col gap-2 items-center lg:w-[60%]">
                <Image src={img} alt="" className="" width={300} height={300} />
                <div className='flex flex-col items-center'>
                    <p className='text-[20px] text-[#1E1E1E] font-bold '>{role}</p>
                    <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                </div>
            </div>
            <div className="flex flex-col w-full items-center  gap-3">
                <div className="flex flex-col gap-4 lg:w-full">
                    <p>{text1}</p>
                    <p>{text2}</p>
                    <p>{text3}</p>
                </div>
                <Btn3
                    link={""}
                    text={btntext}
                />
            </div>
        </div>
    )
}


