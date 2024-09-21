"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const NewsHero = () => {
    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/news"
        const response = await axios.get(base_url)
        const result = response.data
        // console.log(result)
        // console.log(result.data)
        console.log(result.data.attributes.field_news_page_hero_caption.value)
        setIndex(result.data.attributes.field_news_page_hero_caption.value)
        setTitle(result.data.attributes.field_news_page_hero_title)
    }

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(index, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        localStorage.setItem('newsC', plainText);
        localStorage.setItem('newsTitle', title);
    }

    useEffect(() => {
        FetchIndex();
    }, [])

    const {t} = useTranslation();
    return (
        <div className="bg-[url(/img/news.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
            <div className="pt-[5%] px-[7%] flex w-full justify-end ">
                <div className="lg:w-[50%] w-full flex flex-col items-center gap-4">
                    <p className="font-bold md:text-[40px] text-[30px] text-white leading-none">{t("newsTitle")}</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="lg:text-[18px] md:text-[16px] text-[12px] text-white text-center">{t("newsC")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHero