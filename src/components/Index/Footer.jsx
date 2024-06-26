import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='bg-[#1086A0] py-6 flex flex-col gap-4'>
            <div className='px-[10%] grid lg:grid-cols-4 grid-cols-1 lg:items-start items-center gap-6  w-full'>
                <div className='flex flex-col w-full lg:items-start items-center'>
                    <Image src={"/img/klogo.svg"} alt='' width={100} height={100} />
                    <p className='text-[#F1F1F1]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, </p>
                </div>
                <div className='text-white text-[20px] flex flex-col lg:items-start items-center gap-2 w-full'>
                    <Link href={""}>Reach Us</Link>
                    <Link href={""}>About Us</Link>
                    <Link href={""}>Contact Us</Link>
                </div>
                <div className='text-white text-[20px] lg:items-start items-center flex flex-col gap-2 w-full'>
                    <Link href={""}>Programs</Link>
                    <Link href={""}>Arts</Link>
                    <Link href={""}>SDGs</Link>
                    <Link href={""}>Entrepreneurship</Link>
                </div>
                <div className='text-white text-[20px] lg:items-start items-center flex flex-col gap-2 w-full'>
                    <Link href={""}>Resources</Link>
                    <Link href={""}>Blog</Link>
                    <Link href={""}>Privacy Policy</Link>
                    <Link href={""}>News</Link>
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