'use client'
import React, { useEffect, useState } from 'react'
import { Whatwedo } from '../Reusable/Btn1'
import { useTranslation } from 'react-i18next'
import axios from 'axios'


const WeDo = () => {
    const [prog1, setProg1] = useState("")
    const [prog1T, setProg1T] = useState("")
    const [prog2T, setProg2T] = useState("")
    const [prog3T, setProg3T] = useState("")
    const [prog2, setProg2] = useState("")
    const [prog3, setProg3] = useState("")
    const [prog4, setProg4] = useState("")
    const [prog4T, setProg4T] = useState("")
    const [prog5, setProg5] = useState("")
    const [prog5T, setProg5T] = useState("")
    const [prog6, setProg6] = useState("")
    const [prog6T, setProg6T] = useState("")
    const [prog7, setProg7] = useState("")
    const [prog7T, setProg7T] = useState("")
    // const [prog3, setProg7] = useState("")

    const fetchProgram = async () => {
        const base_url = "/api/mothership/program/wedo"
        const response = await axios.get(base_url)
        const result = response.data
        setProg1(result.data[0].attributes.field_caption.value)
        setProg1T(result.data[0].attributes.field_title)
        setProg2(result.data[1].attributes.field_caption.value)
        setProg2T(result.data[1].attributes.field_title)
        setProg3T(result.data[2].attributes.field_title)
        setProg3(result.data[2].attributes.field_caption.value)
        setProg4T(result.data[3].attributes.field_title)
        setProg4(result.data[3].attributes.field_caption.value)
        setProg5T(result.data[4].attributes.field_title)
        setProg5(result.data[4].attributes.field_caption.value)
        setProg6T(result.data[5].attributes.field_title)
        setProg6(result.data[5].attributes.field_caption.value)
        setProg7T(result.data[6].attributes.field_title)
        setProg7(result.data[6].attributes.field_caption.value)
    }
    useEffect(() => {
        fetchProgram();
    }, [])



    return (
        <div className='lg:px-[10%] py-[2%] flex flex-col gap-6'>
            <div className='w-full justify-center flex'>
                <p className='lg:text-[36px] md:text-[24px] text-[20px] text-[#14242C] font-bold'>What we do</p>
            </div>
            <div className='flex flex-col lg:gap-16 gap-10 mb-[3%]'>
                <Whatwedo
                    img={"/img/one.svg"}
                    role={prog1T}
                    text1={prog1}
                    // text1={t("prog1Content")}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                />
                <Whatwedo
                    img={"/img/two.svg"}
                    role={prog2T}
                    text1={prog2}
                    // text1={t("prog2Content")}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                />
                <Whatwedo
                    img={"/img/three.svg"}
                    role={prog3T}
                    text1={prog3}
                    // text1={t("prog3Content")}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                />
                <Whatwedo
                    img={"/img/two.svg"}
                    role={prog4T}
                    text1={prog4}
                />
                <Whatwedo
                    img={"/img/food.svg"}
                    role={prog5T}
                    // role={"FOOD & SHELTERPROGRAM"}
                    text1={prog5}
                />
                <Whatwedo
                    img={"/img/It.svg"}
                    role={prog6T}
                    // role={"IT TRAINING"}
                    text1={prog6}
                />
                <Whatwedo
                    img={"/img/vocation.svg"}
                    role={prog7T}
                    // role={"VOCATIONAL TRAINING & WORKSHOP"}
                    text1={prog7}
               
                />
            </div>
        </div>
    )
}

export default WeDo