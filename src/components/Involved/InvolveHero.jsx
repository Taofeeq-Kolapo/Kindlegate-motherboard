'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const InvolveHero = () => {
    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/involve/hero"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_get_involved_caption.value)
        setIndex(result.data[0].attributes.field_get_involved_caption.value)
        setTitle(result.data[0].attributes.field_get_involved_title)
    }

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(index, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        localStorage.setItem('heroinvolvC', plainText);
        localStorage.setItem('heroinvolveTitle', title);
    }

    useEffect(() => {
        FetchIndex();
    }, [])

    const {t} = useTranslation();
    return (
        <div className="bg-[url(/img/involve.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full relative">
            <div className='w-full h-screen absolute top-0 bg-black bg-opacity-55'></div>
            <div className="lg:pt-[5%] px-[7%] flex w-full ">
                <div className="lg:w-[50%] flex flex-col z-[200] items-center gap-4">
                    <p className="font-bold lg:text-[50px] text-[40px] text-white text-center leading-none">{t("heroinvolveTitle")}</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="text-[18px] text-white text-justify">{t("heroinvolvC")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InvolveHero