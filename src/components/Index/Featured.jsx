import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import { useTranslation } from 'react-i18next'

const Featured = () => {
    // const Data = [
    //     {
    //         img: "/img/one.svg",
    //         title: "Leadership",
    //         content: "Promoting thought based Leadership in the Community",
    //         more: "Read more"
    //     },
    //     {
    //         img: "/img/two.svg",
    //         title: "Entrepreneurship",
    //         content: "Promoting thought based Leadership in the Community",
    //         more: "Read more"
    //     },
    //     {
    //         img: "/img/three.svg",
    //         title: "Art",
    //         content: "Promoting thought based Leadership in the Community",
    //         more: "Read more"
    //     },
    // ]
    const [prog1, setProg1] = useState("")
    const [prog1T, setProg1T] = useState("")
    const [prog2T, setProg2T] = useState("")
    const [prog3T, setProg3T] = useState("")
    const [prog2, setProg2] = useState("")
    const [prog3, setProg3] = useState("")
    const [footer, setFooter] = useState("")
    const [ctaContent, setCtacontent] = useState("")
    const [ctaTitle, setCtaTitle] = useState("")
    // const [prog4, setProg4] = useState("")

    const fetchProgram = async () => {
        const base_url = "/api/mothership/homepage/prog"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_program_caption_body.value)
        setProg1(result.data[0].attributes.field_program_caption_body.value)
        setProg1T(result.data[0].attributes.field_program_header)
        setProg2T(result.data[1].attributes.field_program_header)
        setProg3T(result.data[2].attributes.field_program_header)
        setProg2(result.data[1].attributes.field_program_caption_body.value)
        setProg3(result.data[2].attributes.field_program_caption_body.value)
    }

    const fetchFooter = async () => {
        const base_url = "/api/mothership/homepage/footer"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_fotter_caption.value)
        setFooter(result.data[0].attributes.field_fotter_caption.value)  
    }
    const fetchcta = async () => {
        const base_url = "/api/mothership/homepage/cta"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data[0].attributes.field_call_to_action_section_cap.value)
        setCtacontent(result.data[0].attributes.field_call_to_action_section_cap.value)
        setCtaTitle(result.data[0].attributes.field_call_to_action_section_hea)  
    }

    useEffect(() => {
        fetchProgram();
        fetchFooter();
        fetchcta();
    }, [])
    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parser2 = new DOMParser();
        const parser3 = new DOMParser();
        const parser4 = new DOMParser();
        const parser5 = new DOMParser();
        const parser6 = new DOMParser();
        const parsedHtml = parser.parseFromString(prog1, 'text/html');
        const parsedHtml2 = parser2.parseFromString(prog2, 'text/html');
        const parsedHtml3 = parser3.parseFromString(prog3, 'text/html');
        const parsedHtml4 = parser4.parseFromString(footer, 'text/html');
        const parsedHtml5 = parser5.parseFromString(ctaContent, 'text/html');
        const parsedHtml6 = parser6.parseFromString(ctaTitle, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        const plainText2 = parsedHtml2.body.textContent || "";
        const plainText3 = parsedHtml3.body.textContent || "";
        const plainText4 = parsedHtml4.body.textContent || "";
        const plainText5 = parsedHtml5.body.textContent || "";
        const plainText6 = parsedHtml6.body.textContent || "";
        localStorage.setItem('prog1', plainText);
        localStorage.setItem('prog1t', prog1T);
        localStorage.setItem('programTitle2', prog2T);
        localStorage.setItem('progTitle3', prog3T);
        localStorage.setItem('prog2', plainText2);
        localStorage.setItem('prog3', plainText3);
        localStorage.setItem('footer', plainText4);
        localStorage.setItem('ctaContent', plainText5);
        localStorage.setItem('ctaTitle', plainText6);
    }


    const { t } = useTranslation()


    return (
        <div className='flex flex-col gap-8 px-[7%] mt-10 items-center justify-center mb-7'>
            <p className='text-[36px] font-bold text-[#14242C]'>Featured Programs</p>
            <div
                // data-aos="zoom-in-down"
                className='grid lg:grid-cols-3 justify-between w-full md:grid-cols-2 grid-cols-1 gap-7'>
                {/* {
                    Data.map((d, i) => {
                        return ( */}
                <div className='flex lg:flex-col flex-row gap-3 items-center'>
                    <Image src="/img/one.svg" width={300} height={300} className='lg:w-full md:w-[50%] w-[40%]' alt='' />
                    <div>
                        <div className='flex w-full lg:justify-center'>
                            <p className='text-[#0A2640] text-[24px] font-bold'>{t("prog1t")}</p>
                        </div>
                        {/* <p>{d.content}</p> */}
                        <p className="text-justify">{t("prog1Content").slice(0,300)}...</p>
                        <Link href={"#"} className='text-[#00A859]'>Read more</Link>
                    </div>
                </div>
                <div className='flex lg:flex-col flex-row gap-3 items-center'>
                    <Image src="/img/two.svg" width={300} height={300} className='lg:w-full md:w-[50%] w-[40%]' alt='' />
                    <div>
                        <div className='flex w-full lg:justify-center'>
                            <p className='text-[#0A2640] text-[24px] font-bold'>{t("prog2t")}</p>
                        </div>
                        {/* <p>{d.content}</p> */}
                        <p className="text-justify">{t("prog2Content").slice(0,300)}...</p>
                        <Link href={"#"} className='text-[#00A859]'>Read more</Link>
                    </div>
                </div>
                <div className='flex lg:flex-col flex-row gap-3 items-center'>
                    <Image src="/img/three.svg" width={300} height={300} className='lg:w-full md:w-[50%] w-[40%]' alt='' />
                    <div>
                        <div className='flex w-full lg:justify-center'>
                            <p className='text-[#0A2640] text-[24px] font-bold'>{t("prog3t")}</p>
                        </div>
                        {/* <p>{d.content}</p> */}
                        <p className="text-justify">{t("prog3Content").slice(0, 300)}...</p>
                        <Link href={"#"} className='text-[#00A859]'>Read more</Link>
                    </div>
                </div>

                {/* )
                    })
                } */}
            </div>
        </div>
    )
}

export default Featured