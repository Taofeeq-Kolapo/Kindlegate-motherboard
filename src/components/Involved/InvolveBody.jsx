'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

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

    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/involve"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_roles_header_caption.value)
        setIndex(result.data[0].attributes.field_roles_header_caption.value)
        setTitle(result.data[0].attributes.field_roles_main_header)
    }

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(index, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        localStorage.setItem('involvC', plainText);
        localStorage.setItem('involveTitle', title);
    }

    useEffect(() => {
        FetchIndex();
    }, [])
    const { t } = useTranslation();
    return (
        <div className='px-[10%] flex flex-col items-center justify-center lg:my-[5%] my-[3%] '>
            <div className='flex flex-col lg:gap-7 gap-5 lg:w-[60%] w-full items-center'>
                <p className='lg:text-[36px] md:text-[23px] text-[18px] font-bold lg:w-[70%] text-center'>{t("involveTitle")}</p>
                <p className='flex lg:text-center text-justify'>{t("involvC")}</p>
                {/* <p className='flex lg:text-center text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”</p> */}
            </div>
            <div className='h-[8px] bg-[#E3B522]'></div>
            <div className='flex flex-col gap-6 py-[4%]'>
                <p className='lg:text-[40px] md:text-[24px] text-[16px] font-bold'>HERE ARE SOME WAYS TO BE A PART OF US</p>
                <div className='grid md:grid-cols-2 grid-cols-1 lg:gap-[10%] gap-5'>
                    {
                        data.map((d, i) => {
                            return (
                                <div key={i} className='flex flex-col items-center'>
                                    <div>
                                        <p className='lg:text-[20px] text-[17px] text-justify'>{d.content1}</p>
                                        <p className='lg:text-[20px] text-[17px] text-justify'>{d.content2}</p>
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