'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Btn1, MissionProps } from '../Reusable/Btn1'
import { useTranslation } from 'react-i18next'
import axios from 'axios'


const Mission = () => {
    const [mandate, setMandate] = useState("")
    const [mission, setMission] = useState("")


    const fetchMission = async () => {
        // const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/home/4cbb35b6-4570-4d80-8aeb-2cac04412094/field_mandate_and_objective_sect?resourceVersion=id%3A41`
        const base_url = "/api/mothership/homepage/mission"
        const response = await axios.get(base_url)
        const result = response.data
        // console.log(result)
        // console.log(result.data)
        console.log(result.data[0].attributes.field_objeactive_caption.value)
        setMandate(result.data[0].attributes.field_mandate_caption.value)
        setMission(result.data[0].attributes.field_objeactive_caption.value)
    }


    useEffect(() => {
        fetchMission()
    }, [])
    // const parser = new DOMParser();
    // const parser2 = new DOMParser();
    // const parsedHtml = parser.parseFromString(mandate, 'text/html');
    // const parsedHtml2 = parser2.parseFromString(mission, 'text/html');
    // const plainText = parsedHtml.body.textContent || "";
    // const plainText2 = parsedHtml2.body.textContent || "";
    // if (typeof window !== 'undefined') {
    //     localStorage.setItem('mandate', plainText);
    //     localStorage.setItem('mission', plainText2);
    // }
    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parser2 = new DOMParser();
        const parsedHtml = parser.parseFromString(mandate, 'text/html');
        const parsedHtml2 = parser2.parseFromString(mission, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        const plainText2 = parsedHtml2.body.textContent || "";
      
        localStorage.setItem('mandate', plainText);
        localStorage.setItem('mission', plainText2);
      }


    const { t } = useTranslation()
    return (
        <div className='bg-white flex lg:items-center justify-between w-full py-[2%] relative'>
            <Image data-aos="fade-right" className='lg:block lg:w-[305.05px] lg:h-[305.05px] relative lg:left-[-3rem] lg:top-[-4rem] md:w-[182px] md:h-[202px] w-[57px] h-[107px]' src={"/img/half.svg"} width={250} height={250} alt='' />
            <div data-aos="fade-left" className='lg:w-[60%] lg:px-[6%] gap-5 flex flex-col px-[4%]'>
                <MissionProps
                    title={t("mandate")}
                    content={t("mandateConten")}
                />
                <MissionProps
                    title={t("objective")}
                    content={t("objectiveConten")}
                />
                <div className='flex w-full lg:justify-end justify-center'>
                    <Btn1
                        text={t("learnbtn")}
                        link={"/mandate"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Mission