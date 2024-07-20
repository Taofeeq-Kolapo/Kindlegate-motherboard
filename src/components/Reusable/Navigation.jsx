
'use client';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { TbChevronDown } from 'react-icons/tb'
import { involved, tribes } from "./NavData";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import MobNavigation from "./MobNav";
import Button2 from "./Buttn";
import OurTribebtn from "./Ourtribe";


const Nav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNav, setMobileNav] = useState(false)

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

    const Openmobilenav = () => {
        setMobileNav(!mobileNav)
    }
    const handleClosenow = () => {
        setMobileNav(false)
    }

    return (
        <div className={`flex fixed top-0 w-full flex-row justify-between z-[500] items-center py-4 transition-all px-[7%] duration-300 ${isScrolled ? 'bg-[#1086A0] backdrop-blur-md' : 'bg-transparent'}`}>
            <Image width={80} height={80} src={"/img/klogo.svg"} alt="Logo" />
            <div className="lg:flex hidden lg:gap-x-20 text-[14px]  items-center text-white font-bold">
                <div className="relative">
                    <Link href={"/"}>HOME</Link>
                </div>
                <Link href={"/mandate"}>OUR MANDATE</Link>
                <Link href={"/programs"}>PROGRAMS</Link>
                <OurTribebtn/>

                <Link href={"/news"}>NEWS</Link>
                <Link href={"/blog"}>BLOG</Link>
                <Link href={"/contact"}>CONTACT US</Link>
                {/* <div></div> */}
                <Button2/>
            </div>
            <Link href={"/donate"}>
                <button className="bg-[#00A859] lg:block hidden font-bold border-[2px] border-white text-white px-3 py-1 rounded-2xl">Donate</button>
            </Link>
            <div onClick={Openmobilenav} className="bg-[#1086A0] lg:hidden flex w-[30px] h-[30px] justify-center items-center cursor-pointer">
                <RxHamburgerMenu className="text-xl font-bold" />
            </div>

            {
                mobileNav && (
                    <MobNavigation HandleCloseNav={handleClosenow} />
                )
            }

        </div>
    );
}

export default Nav;
