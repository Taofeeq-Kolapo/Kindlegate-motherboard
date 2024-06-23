import Image from "next/image";
import React from "react";

export const Btn1 = ({ text }) => {
    return (
        <div>
            <button className="bg-[#14BDE3] text-black w-[361px] font-bold h-[60px] rounded-[56px]">{text}</button>
        </div>
    )
}
export const Btn2 = ({ text }) => {
    return (
        <div>
            <button className="bg-[#E3B522] text-black w-[361px] font-bold h-[60px] rounded-[56px]">{text}</button>
        </div>
    )
}
export const MissionProps = ({ title, content }) => {
    return (
        <div >
            <div className='flex w-full justify-end'>
                <span className='flex flex-col gap-1 items-center'>
                    <p className='text-[32px] font-bold'>{title}</p>
                    <p className='bg-[#E3B522] h-1 w-[90%] rounded-3xl'></p>
                </span>
            </div>
            <p className='flex text-justify'>{content}</p>
        </div>
    )
}

export const Whatwedo = ({ img, role, text1, text2, text3 }) => {
    return (
        <div className="flex lg:flex-row flex-col w-full gap-[6%] justify-between items-center">
            <div className="flex flex-col gap-2 items-center lg:w-[40%]">
                <Image src={img} alt="" className="w-full" width={300} height={300} />
                <div className='flex flex-col items-center'>
                    <p className='text-[20px] text-[#1E1E1E] font-bold '>{role}</p>
                    <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-[60%]">
                <p>{text1}</p>
                <p>{text2}</p>
                <p>{text3}</p>
            </div>
        </div>
    )
}
export const TeamProps = ({ img, role, text1, text2, text3, btntext }) => {
    return (
        <div className="flex lg:flex-row flex-col w-full justify-between items-start">
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
                <Btn1
                    text={btntext}
                />
            </div>
        </div>
    )
}


