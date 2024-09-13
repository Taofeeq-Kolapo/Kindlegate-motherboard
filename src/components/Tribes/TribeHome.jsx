'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const TribeHome = () => {
    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/tribe"
        const response = await axios.get(base_url)
        const result = response.data
        // console.log(result)
        // console.log(result.data)
        setIndex(result.data[0].attributes.field_our_tribe_hero_caption.value)
        setTitle(result.data[0].attributes.field_our_tribe_hero_title)
    }

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(index, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        localStorage.setItem('tribeC', plainText);
        localStorage.setItem('tribeTitle', title);
    }

    useEffect(() => {
        FetchIndex();
    }, [])

    const {t} = useTranslation();
    return (
        <div className="bg-[url(/img/tribe.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
            <div className="pt-[5%] px-[7%] flex w-full lg:justify-start justify-center">
                <div className="lg:w-[50%] flex flex-col items-center gap-4">
                    <p className="font-bold lg:text-[50px] md:text-[48px] text-[40px] text-white leading-none">{t("tribeTitle")}</p>
                    <div className="flex flex-col items-center lg:w-[80%] md:w-[356px] ">
                        <p className="lg:text-[18px] md:text-[16px] sm:text-[12px] text-white text-center">{t("tribeC")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TribeHome