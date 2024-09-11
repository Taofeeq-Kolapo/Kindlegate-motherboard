import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'


const Footer = () => {
    const { t } = useTranslation()
    return (
        <div className='bg-[#1086A0] py-6 flex flex-col gap-4'>
            <div className='px-[10%] grid md:grid-cols-4 grid-cols-1 lg:items-start items-center gap-6  w-full'>
                <div className='flex flex-col w-full lg:items-start items-center'>
                    <Image src={"/img/klogo.svg"} alt='' width={100} height={100} />
                    <p className='text-[#F1F1F1] lg:text-[18px] md:text-[12px] w-full text-justified'>{t("footer")}</p>
                </div>
                <div className='text-white lg:text-[20px] md:text-[14px]  text-[12px] md:flex md:flex-col hidden lg:items-start gap-2 w-full'>
                    <Link href={"/contact"}>Reach Us</Link>
                    <Link href={"/aboutus"}>About Us</Link>
                    <Link href={"/contact"}>Contact Us</Link>
                </div>
                <div className='text-white lg:text-[20px] md:text-[14px] text-[12px] lg:items-start md:flex md:flex-col hidden gap-2 w-full'>
                    <Link href={"/programs"}>Programs</Link>
                    <Link href={""}>Arts</Link>
                    <Link href={""}>SDGs</Link>
                    <Link href={""}>Entrepreneurship</Link>
                </div>
                <div className='text-white lg:text-[20px] md:text-[14px] text-[12px] lg:items-start md:flex md:flex-col hidden gap-2 w-full'>
                    <Link href={""}>Resources</Link>
                    <Link href={"/blog"}>Blog</Link>
                    <Link href={""}>Privacy Policy</Link>
                    <Link href={"/news"}>News</Link>
                </div>
            </div>
            <hr />
            <div className='flex w-full items-center justify-center'>
                <div className='flex flex-row items-center gap-3'>
                    <Image src={"/img/facebook.svg"} alt='' width={30} height={30} />
                    <Image src={"/img/instagram (2).svg"} alt='' width={30} height={30} />
                    <Image src={"/img/instagram.svg"} alt='' width={30} height={30} />
                    <Image src={"/img/youtube.svg"} alt='' width={30} height={30} />
                </div>
            </div>
        </div>
    )
}

export default Footer