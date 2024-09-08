
import Link from 'next/link'
import React, { useState } from 'react'
import { TbChevronDown, TbX } from 'react-icons/tb'
import { involved, tribes } from './NavData'
import Image from 'next/image'

const MobNavigation = ({ HandleCloseNav }) => {
    const [involve, setInvolve] = useState(false)
    const [tribe, setTribe] = useState(false)

    const handleclick = () => {
        setInvolve(!involve)
    }
    const handleTribe = () => {
        setTribe(!tribe)
    }

    return (
        <div className='flex flex-col gap-4 p-5 bg-white left-0 text-black font-bold fixed top-0 w-full h-[100vh] lg:hidden md:pl-0 pl-[25%]'>
            <div className='flex w-full justify-end items-center'>
                {/* <Image src={"/img/klogo.svg"} alt='' width={70} height={70} /> */}
                <TbX onClick={HandleCloseNav} className='text-3xl cursor-pointer' />
            </div>

            <a href={"/"}>HOME</a>
            <a href={"/mandate"}>OUR MANDATE</a>
            <a href={"/programs"}>PROGRAMS</a>

            {/* OUR TRIBE Section */}
            <div>
                <div onClick={handleTribe} className="flex flex-row items-center cursor-pointer w-full justify-between">
                    <p>OUR TRIBE</p>
                    <TbChevronDown className="text-2xl font-bold" />
                </div>
                {
                    tribe && (
                        <div className="flex flex-col gap-3 py-6 px-3  mt-2-black z-10">
                            {
                                tribes.map((d, i) => (
                                    <div key={i}>
                                        <Link onClick={HandleCloseNav} className="hover:bg-[#14BDE3] hover:rounded-lg hover:w-full w-full p-2" href={d.link}>{d.title}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>

            <a href={"/news"}>NEWS</a>
            <a href={"/blog"}>BLOG</a>
            <a href={"/contact"}>CONTACT US</a>

            {/* GET INVOLVED Section */}
            <div>
                <div onClick={handleclick} className="flex flex-row items-center cursor-pointer w-full justify-between gap-1">
                    <p>GET INVOLVED</p>
                    <TbChevronDown className="text-2xl font-bold" />
                </div>
                {
                    involve && (
                        <div className="flex flex-col gap-3 py-6 px-3  mt-2 z-10">
                            {
                                involved.map((d, i) => (
                                    <div key={i}>
                                        <Link onClick={HandleCloseNav} className="hover:bg-[#14BDE3] hover:rounded-lg hover:w-full w-full p-2" href={d.link}>{d.title}</Link>
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>

            <Link href={"/donate"}>
                <button className="bg-[#00A859] font-bold border-white text-white px-3 py-1 rounded-2xl">Donate</button>
            </Link>
        </div>
    )
}

export default MobNavigation

