'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ProgHero = () => {
    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/program/hero"
        const response = await axios.get(base_url)
        const result = response.data
        // console.log(result)
        // console.log(result.data)
        setIndex(result.data[0].attributes.field_program_hero_caption.value)
        setTitle(result.data[0].attributes.field_program_hero_title)
    }

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(index, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        localStorage.setItem('progC', plainText);
        localStorage.setItem('progPageTitle', plainText);
    }

    useEffect(() => {
        FetchIndex();
    }, [])

    const {t} = useTranslation();

    return (
        <div className="bg-[url(/img/bg-3.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
            <div className="pt-[5%] px-[7%] flex w-full justify-end">
                <div className="lg:w-[50%] w-full flex flex-col items-center gap-4">
                    <p className="font-bold lg:text-[40px] md:text-[48px] text-[40px] text-white leading-none">{title}</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="lg:text-[18px] md:text-[16px] sm:text-[12px] text-white text-center">{t("progPageTitle")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgHero