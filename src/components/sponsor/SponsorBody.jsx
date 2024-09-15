'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const SponsorBody = () => {
    const data = [
        {
            content1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Maecenas porttitor",
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            content1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Maecenas porttitor",
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            content1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Maecenas porttitor",
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            content1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Maecenas porttitor",
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            content1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Maecenas porttitor",
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        },
        {
            content1: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Maecenas porttitor",
            title: "LOREM IPSUM",
            img: "/img/Avatard.svg"
        }
    ]

    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")
    const [sponsorpackage, setsponsorpackage] = useState("")
    // const [img, setImg] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/sponsor/sponsorevent"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_sponsor_program_header_cap.value)
        setIndex(result.data[0].attributes.field_sponsor_program_header_cap.value)
        setTitle(result.data[0].attributes.field_sponsor_program_header)
        setsponsorpackage(result.data[0].attributes.field_sponsor_program_sub_header)
    }
    // const FetchImg = async () => {
    //     const base_url = "/api/mothership/blog/blogimg"
    //     const response = await axios.get(base_url)
    //     const result = response.data
    //     console.log(result.data.attributes.uri.url)
    //     setImg(result.data.attributes.uri.url)
    // }

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(index, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        localStorage.setItem('sponsoreventC', plainText);
        localStorage.setItem('sponsoreventTitle', title);
        localStorage.setItem('sponsoreventpackage', sponsorpackage);
    }

    useEffect(() => {
        FetchIndex();
        // FetchImg();
    }, [])

    const {t} = useTranslation();
    return (
        <div className='px-[10%] flex flex-col items-center justify-center lg:my-[5%] my-[3%] '>
            <div className='flex flex-col lg:gap-7 gap-5 lg:w-[60%] w-full items-center'>
                <p className='lg:text-[36px] md:text-[23px] text-[18px] font-bold lg:w-[70%] text-center'>{t("sponsoreventTitle")}</p>
                <p className='flex lg:text-center text-justify'>{t("sponsoreventC")}</p>

                <div className='w-full flex justify-center'>
                    <Link href={"/apply"}>
                        <button className='px-10 py-3 rounded-[56px] bg-[#14BDE3] font-bold'>Apply</button>
                    </Link>
                </div>
            </div>

            <div className='flex flex-col gap-6 py-[4%]'>
                <p className='lg:text-[40px] md:text-[24px] text-[16px] font-bold'>{t("sponsoreventpackage")}</p>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[10%] gap-5'>
                    {
                        data.map((d, i) => {
                            return (
                                <div key={i} className='flex flex-col items-center border border-black rounded-lg p-3 justify-center'>
                                    <div className='flex flex-col items-center gap-3'>
                                        <p className='lg:text-2xl text-xl font-bold'>{d.title}</p>
                                        <Image src={d.img} width={300} height={300} alt='' />
                                        <p className='lg:text-[20px] text-[17px] text-justify'>{d.content1}</p>
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

export default SponsorBody