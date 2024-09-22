'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const SponsorrHero = () => {
    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")
    const [sponsorpackage, setsponsorpackage] = useState("")
    // const [img, setImg] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/sponsor"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_sponsor_hero_title_caption.value)
        setIndex(result.data[0].attributes.field_sponsor_hero_title_caption.value)
        setTitle(result.data[0].attributes.field_sponsor_hero_title)
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
        localStorage.setItem('sponsorC', plainText);
        localStorage.setItem('sponsorTitle', title);
        localStorage.setItem('sponsorpackage', sponsorpackage);
    }

    useEffect(() => {
        FetchIndex();
        // FetchImg();
    }, [])

    const {t} = useTranslation();
    return (
        <div className="bg-[url(/img/sponsor.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full relative">
            <div className='absolute w-full h-screen top-0 bg-black inset-0 bg-opacity-50'></div>
            <div className="pt-[5%] px-[7%] flex w-full z-[300]">
                <div className="lg:w-[50%] w-full flex flex-col items-center gap-4">
                    <p className="font-bold text-[40px] text-white leading-none">{t("sponsorTitle")}</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="text-[18px] text-white text-justify">{t("sponsorC")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorrHero