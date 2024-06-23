
'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { TbChevronDown } from 'react-icons/tb'
import { involved, tribes } from "./NavData";
import Link from "next/link";

const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [involve, setInvolve] = useState(false)
    const [tribe, setTribe] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleclick = () => {
        setInvolve(true)
    }
    const handleTribe = () => {
        setTribe(true)
    }

    //function to close when other body is clicked
    useEffect(() => {
        const closeShowOptions = (e) => {
            if (!e.target.closest(".involve")) {
                setInvolve(false)
            }
        }
        const closeShowTribe = (e) => {
            if (!e.target.closest(".tribe")) {
                setTribe(false)
            }
        }

        if (typeof window !== "undefined") {
            typeof window !== "undefined" && document.body.addEventListener("click", closeShowOptions)
            typeof window !== "undefined" && document.body.addEventListener("click", closeShowTribe)
            return () => {
                typeof window !== "undefined" && document.body.removeEventListener("click", closeShowOptions)
                typeof window !== "undefined" && document.body.removeEventListener("click", closeShowTribe)

            }
        }
    }, [])

    return (
        <div className={`flex fixed top-0 w-full flex-row justify-between z-[500] items-center py-4 transition-all lg:px-[7%] duration-300 ${isScrolled ? 'bg-[#1086A0] backdrop-blur-md' : 'bg-transparent'}`}>
            <Image width={50} height={50} src={"/img/klogo.svg"} alt="Logo" />
            <div className="lg:flex hidden lg:gap-x-14 text-[16px]  items-center text-white font-bold">
                <div className="relative">
                    <Link href={"/"}>HOME</Link>
                </div>
                <Link href={"/mandate"}>OUR MANDATE</Link>
                <Link href={"/programs"}>PROGRAMS</Link>
                <div onClick={handleTribe} className="flex flex-row items-center cursor-pointer gap-1">
                    <p>OUR TRIBE</p>
                    <TbChevronDown className="text-2xl font-bold" />
                    {
                        tribe && (
                            <div className="lg:flex flex-col tribe hidden gap-3 py-6 px-3 border-2 border-white rounded-lg  justify-center top-14 absolute">
                                {
                                    tribes.map((d, i) => {
                                        return (
                                            <div key={i}>
                                                <Link onClick={() => setTribe(false)} className="hover:bg-[#14BDE3] hover:rounded-lg hover:w-full w-full p-2" href={d.link}>{d.title}</Link>
                                            </div>)
                                    })
                                }
                            </div>
                        )
                    }
                </div>

                <Link href={"/news"}>NEWS</Link>
                <Link href={"/blog"}>BLOG</Link>
                <Link href={"/contact"}>CONTACT US</Link>
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
            </div>
            <div>
                <button className="bg-[#00A859] font-bold border-white text-white px-3 py-1 rounded-2xl">Donate</button>
            </div>
        </div>
    );
}

export default Nav;
