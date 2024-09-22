'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const BlogHero = () => {
    const [index, setIndex] = useState("")
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")

    const FetchIndex = async () => {
        const base_url = "/api/mothership/blog"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_blog_hero_caption.value)
        setIndex(result.data[0].attributes.field_blog_hero_caption.value)
        setTitle(result.data[0].attributes.field_blog_hero_title)
    }
    const FetchImg = async () => {
        const base_url = "/api/mothership/blog/blogimg"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data.attributes.uri.url)
        setImg(result.data.attributes.uri.url)
    }

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(index, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        localStorage.setItem('blogC', plainText);
        localStorage.setItem('blogTitle', title);
    }

    useEffect(() => {
        FetchIndex();
        FetchImg();
    }, [])

    const {t} = useTranslation();
  return (
    <div className="bg-[url(/img/blogs.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full"
    // style={{backgroundImage:`url(http://test.kindlegatefoundation.org/${img})`}}
    >
            <div className="pt-[5%] px-[7%] flex w-full ">
                <div className="lg:w-[50%] flex flex-col w-full items-center gap-4">
                    <p className="font-bold md:text-[40px] text-[30px] text-white leading-none">{t("blogTitle")}</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="lg:text-[18px] md:text-[16px] text-[12px] lg:w-full sm:w-[313px] text-white text-justify">{t("blogC")}</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BlogHero

// http://test.kindlegatefoundation.org/