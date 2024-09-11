'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useTranslation } from "react-i18next";



const Hero = () => {
  const [mandate, setMandate] = useState("")
  const [mandateTitle, setMandateTitle] = useState("")


  const fetchMandate = async () => {
    const base_url = "/api/mothership/mandate_page/hero"
    const response = await axios.get(base_url)
    const result = response.data
    console.log(result.data[0].attributes.field_mandate_hero_caption_body.value)
    setMandate(result.data[0].attributes.field_mandate_hero_caption_body.value)
    setMandateTitle(result.data[0].attributes.field_mandate_hero_title)
  }

  useEffect(() => {
    fetchMandate();
}, [])
if (typeof window !== 'undefined') {
    const parser = new DOMParser();
    const parser1 = new DOMParser();
    const parsedHtml = parser.parseFromString(mandate, 'text/html');
    const parsedHtml1 = parser1.parseFromString(mandateTitle, 'text/html');
    const plainText = parsedHtml.body.textContent || "";
    const plainText1 = parsedHtml1.body.textContent || "";
    localStorage.setItem('mandCont', plainText);
    localStorage.setItem('mandTitle', plainText1);
}

const {t} = useTranslation();
  return (
    <div className="bg-[url(/img/mandate.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
      <div className="pt-[5%] px-[7%] flex w-full ">
        <div className="lg:w-[50%] w-full flex flex-col items-center gap-4">
          <p className="font-semibold lg:text-[50px] md:text-[48px] text-[40px] text-white leading-none">{t("mandateTitle")}</p>
          <div className="flex flex-col items-center lg:w-[80%]">
            <p className="lg:text-[18px] md:text-[16px] sm:text-[12px] text-white lg:text-start text-center">{t("mandateContent")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;