import Link from 'next/link'
import React, { useState } from 'react'
import { TbChevronDown, TbX } from 'react-icons/tb'
import { involved, tribes } from './NavData'
import Image from 'next/image'

const MobNavigation = ({HandleCloseNav}) => {
    const [involve, setInvolve] = useState(false)
    const [tribe, setTribe] = useState(false)

    const handleclick = () => {
        setInvolve(true)
    }
    const handleTribe = () => {
        setTribe(true)
    }
    return (
        <div className='flex flex-col gap-4 p-5 bg-black left-0 text-white absolute top-0 w-full h-screen lg:hidden '>
            <div className='flex w-full justify-between items-center'>
                <Image src={"/img/klogo.svg"} alt='' width={70} height={70}/>
                <TbX onClick={HandleCloseNav} className='text-3xl cursor-pointer'/>
            </div>
            
            <div className="relative">
                <a href={"/"}>HOME</a>
            </div>
            <a href={"/mandate"}>OUR MANDATE</a>
            <a href={"/programs"}>PROGRAMS</a>
            <div onClick={handleTribe} className="flex flex-row items-center cursor-pointer gap-1">
                <p>OUR TRIBE</p>
                <TbChevronDown className="text-2xl font-bold" />
                {
                    tribe && (
                        <div className="lg:flex flex-col tribe hidden gap-3  backdrop:blur-lg py-6 px-3 border-2 border-white rounded-lg  justify-center top-14 absolute">
                            {
                                tribes.map((d, i) => {
                                    return (
                                        <div key={i}>
                                            <Link onClick={HandleCloseNav}className="hover:bg-[#14BDE3] hover:rounded-lg hover:w-full w-full p-2" href={d.link}>{d.title}</Link>
                                        </div>)
                                })
                            }
                        </div>
                    )
                }
            </div>

            <a href={"/news"}>NEWS</a>
            <a  href={"/blog"}>BLOG</a>
            <a  href={"/contact"}>CONTACT US</a>
            {/* <div></div> */}
            <div onClick={handleclick} className="flex flex-row items-center cursor-pointer gap-1">
                <p>GET INVOLVED</p>
                <TbChevronDown className="text-2xl font-bold" />
                {
                    involve && (
                        <div className="lg:flex flex-col involve hidden gap-3 py-6 px-3 border-2 border-white rounded-lg  justify-center top-14 absolute">
                            {
                                involved.map((d, i) => {
                                    return (
                                        <div key={i}>
                                            <Link className="hover:bg-[#14BDE3] hover:rounded-lg hover:w-full w-full p-2" href={d.link}>{d.title}</Link>
                                        </div>)
                                })
                            }
                        </div>
                    )
                }
            </div>
            <Link href={"/donate"}>
                <button className="bg-[#00A859] lg:block hidden font-bold border-white text-white px-3 py-1 rounded-2xl">Donate</button>
            </Link>
        </div>
    )
}

export default MobNavigation