'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const VolHero = () => {
    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")
    const [sponsorpackage, setsponsorpackage] = useState("")
    // const [img, setImg] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/volunteer"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_volunteer_hero_cpation.value)
        setIndex(result.data[0].attributes.field_volunteer_hero_cpation.value)
        setTitle(result.data[0].attributes.field_volunteer_title)
        // setsponsorpackage(result.data[0].attributes.field_sponsor_program_sub_header)
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
        localStorage.setItem('VolunteerC', plainText);
        localStorage.setItem('VolunteerTitle', title);
        // localStorage.setItem('sponsorpackage', sponsorpackage);
    }

    useEffect(() => {
        FetchIndex();
        // FetchImg();
    }, [])

    const {t} = useTranslation();
    return (
        <div className="bg-[url(/img/volunteer.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full relative">
            <div className="w-full h-screen bg-[black] absolute top-0 onset-0 bg-opacity-50"></div>
            <div className="pt-[5%] px-[7%] flex w-full ">
                <div className="lg:w-[60%] flex flex-col items-center z-[300] gap-4">
                    <p className="font-bold lg:text-[50px] md:text-[48px] text-[40px] text-white leading-none">{t("VolunteerTitle")}</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="lg:text-[18px] md:text-[16px] sm:text-[12px]  text-white text-justify">{t("VolunteerC")}
                        </p>
                    </div>
                    <button className='flex bg-[#14BDE3] lg:px-[4%] rounded-2xl lg:py-2 p-2'>
                        <Link className=' lg:text-[25px] ' href={"/vform"}>Apply</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default VolHero