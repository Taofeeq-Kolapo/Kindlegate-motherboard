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
    const [prog2, setProg2] = useState("")
    const [prog3, setProg3] = useState("")
    // const [prog4, setProg4] = useState("")
    // const [mission, setMission] = useState("")


    const fetchProgram = async () => {
        // const base_url = `http://test.kindlegatefoundation.org/jsonapi/node/home/4cbb35b6-4570-4d80-8aeb-2cac04412094/field_mandate_and_objective_sect?resourceVersion=id%3A41`
        const base_url = "/api/mothership/homepage/prog"
        const response = await axios.get(base_url)
        const result = response.data
        // console.log(result)
        // console.log(result.data)
        console.log(result.data[0].attributes.field_program_caption_body.value)
        setProg1(result.data[0].attributes.field_program_caption_body.value)
        setProg2(result.data[1].attributes.field_program_caption_body.value)
        setProg3(result.data[2].attributes.field_program_caption_body.value)
    }


    useEffect(() => {
        fetchProgram()
    }, [])
    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parser2 = new DOMParser();
        const parser3 = new DOMParser();
        const parsedHtml = parser.parseFromString(prog1, 'text/html');
        const parsedHtml2 = parser2.parseFromString(prog2, 'text/html');
        const parsedHtml3 = parser3.parseFromString(prog3, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        const plainText2 = parsedHtml2.body.textContent || "";
        const plainText3 = parsedHtml3.body.textContent || "";
        localStorage.setItem('prog1', plainText);
        localStorage.setItem('prog2', plainText2);
        localStorage.setItem('prog3', plainText3);
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
                            <p className='text-[#0A2640] text-[24px] font-bold'>Leadership</p>
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
                            <p className='text-[#0A2640] text-[24px] font-bold'>Entrepreneurship</p>
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
                            <p className='text-[#0A2640] text-[24px] font-bold'>Art</p>
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