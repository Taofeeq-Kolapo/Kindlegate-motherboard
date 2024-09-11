'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const About = () => {
    const [aboutContent, setAboutUsContent] = useState("")
    const [aboutTitle, setAboutTitle] = useState("")
    const [historyContent, sethistoryContent] = useState("")
    const [historyTitle, sethistoryTitle] = useState("")
    const [team, setTeam] = useState("")
    const [teamTitle, setTeamTitle] = useState("")

    const fetchAboutus = async () => {
        const base_url = "/api/mothership/mandate_page/aboutus"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_about_us_caption_body.value)
        setAboutUsContent(result.data[0].attributes.field_about_us_caption_body.value)
        setAboutTitle(result.data[0].attributes.field_about_us_title)
        sethistoryContent(result.data[1].attributes.field_history_caption_body.value)
        sethistoryTitle(result.data[1].attributes.field_history_title)
        // sethistoryContent(result.data[1].attributes.field_history_caption_body.value)
        // sethistoryTitle(result.data[1].attributes.field_history_title)
        setTeam(result.data[2].attributes.field_our_team_caption_body.value)
        setTeamTitle(result.data[2].attributes.field_our_team_title)
      }
    
      useEffect(() => {
        fetchAboutus();
    }, [])

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parser1 = new DOMParser();
        const parser2 = new DOMParser();
        const parser3 = new DOMParser();
        const parser4 = new DOMParser();
        const parser5 = new DOMParser();
        const parsedHtml = parser.parseFromString(aboutContent, 'text/html');
        const parsedHtml1 = parser1.parseFromString(aboutTitle, 'text/html');
        const parsedHtml2 = parser2.parseFromString(historyContent, 'text/html');
        const parsedHtml3 = parser3.parseFromString(historyTitle, 'text/html');
        const parsedHtml4 = parser4.parseFromString(team, 'text/html');
        const parsedHtml5 = parser5.parseFromString(teamTitle, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        const plainText1 = parsedHtml1.body.textContent || "";
        const plainText2 = parsedHtml2.body.textContent || "";
        const plainText3 = parsedHtml3.body.textContent || "";
        const plainText4 = parsedHtml4.body.textContent || "";
        const plainText5 = parsedHtml5.body.textContent || "";
        localStorage.setItem('aboutContent', plainText);
        localStorage.setItem('aboutTitle', plainText1);
        localStorage.setItem('historyContent', plainText2);
        localStorage.setItem('historyTitle', plainText3);
        localStorage.setItem('teamContent', plainText4);
        localStorage.setItem('teamTitle', plainText5);
    }

    const { t } = useTranslation()


    return (
        <div className='flex flex-row lg:pl-[10%] px-[10%] lg:gap-[13%] items-center py-[3%]'>
            <div className='flex flex-col gap-5'>
                
                <div className='flex lg:flex-col flex-row lg:items-start  w-full'>
                    <p className='text-[#1E1E1E] lg:text-[36px] font-bold lg:w-full w-[30%]'>{t("aboutTitle")}</p>
                    <div className='lg:text-[20px] md:text-[16px] text-[14px] lg:w-full w-[70%]'>
                        <p className='flex text-justify'>{t("aboutContent")}
                        </p>
                        {/* <p>
                            purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                        </p>
                        <p>
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing Maecenasporttitor
                        </p>
                        <p>
                            congue massa. Fusce posuere, magna sed pulvinar ultricies, puruslectus
                        </p>
                        <p>
                            malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra
                        </p> */}
                    </div>
                </div>
                <div className='flex lg:flex-col flex-row lg:items-start  w-full'>
                    <p className='text-[#1E1E1E] lg:text-[36px] font-bold lg:w-full w-[30%]'>{t("historyTitle")}</p>
                    <div className='lg:text-[20px] md:text-[16px] text-[14px] lg:w-full w-[70%]'>
                        <p className='flex text-justify'>
                            {t("historyContent")}
                        </p>
                        {/* <p>
                            purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant
                        </p>
                        <p>
                            morbi tristique senectus et netus et malesuada fames ac turpis egestas. Lorem ipsum dolor sit amet, consectetuer adipiscing Maecenasporttitor
                        </p>
                        <p>
                            congue massa. Fusce posuere, magna sed pulvinar ultricies, puruslectus
                        </p>
                        <p>
                            malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra
                        </p> */}
                    </div>
                </div>
            </div>
            <Image src={"/img/right.svg"} className='lg:block relative right-[-14%] hidden' alt='' width={300} height={300} />
        </div>
    )
}

export default About