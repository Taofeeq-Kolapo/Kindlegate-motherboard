"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

const Team = () => {

    const trustee = [
        {
            img: "/img/Avatard.svg",
            post: 'TRUSTEES',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
            link: "/tribe/#trustee"
        },
        {
            img: "/img/Avatard.svg",
            post: 'BOARD OF DIRECTORS',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
            link: "/tribe/#board"
        },
        {
            img: "/img/Avatard.svg",
            post: 'GOVERNING COUNCIL',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
            link: "/tribe/#council"
        },
        {
            img: "/img/Avatard.svg",
            post: 'VOLUNTEERS',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
            link: "/tribe/#volunteer"
        },
        {
            img: "/img/Avatard.svg",
            post: 'SPONSORS',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
            link: "/tribe/#trustee"
        },
        {
            img: "/img/Avatard.svg",
            post: 'MENTORS',
            name: "Maecenas porttitor congue massa",
            desc: "Maecenas porttitor congue massa. Fusce posuere, magna sed pulvina",
            link: "/tribe/#trustee"
        },
    ]

    const [team, setTeam] = useState("")
    const [teamName, setTeamName] = useState("")
    const [teamRole, setTeamRole] = useState("")
    const [teams, setTeams] = useState([])
    const [img, setImg] = useState("")

    const fetchTeamImg = async () =>{
        const base_url = "/api/mothership/mandate_page/mandate_img"
        const response = await axios.get(base_url)
        const result = response.data
        console.log(result.data.attributes.uri.url)
        setImg(result.data.attributes.uri.url)
    }

    const FetchIndex = async () => {
        const base_url = "/api/mothership/mandate_page/Teams"
        const response = await axios.get(base_url)
        const result = response.data
        // console.log(result)
        setTeams(result.data)
        console.log(result.data[0].attributes.field_member_caption_body.value)
        setTeam(result.data[0].attributes.field_member_caption_body.value)
        setTeamName(result.data[0].attributes.field_member_name)
        setTeamRole(result.data[0].attributes.field_member_role)
    }

    if (typeof window !== 'undefined') {
        const parser = new DOMParser();
        const parsedHtml = parser.parseFromString(team, 'text/html');
        const plainText = parsedHtml.body.textContent || "";
        localStorage.setItem('teamCont', plainText);
        localStorage.setItem('teamName', teamName);
        localStorage.setItem('teamrole', teamRole);
    }


    useEffect(() => {
        fetchTeamImg();
        FetchIndex()
    }, [])



    const { t } = useTranslation()
    return (
        <div className='flex flex-col px-[10%] lg:my-[5%] lg:gap-10 items-center'>
            <div className='flex lg:flex-col flex-row lg:items-center w-full'>
                <div className='flex flex-col lg:justify-center lg:items-center items-start lg:w-full  w-[30%]'>
                    <p className='text-[#1E1E1E] lg:text-[36px] font-bold '>{t("teamTitle")}</p>
                    <p className='h-1 lg:w-[135.2px] w-[66px] rounded-full bg-[#E3B522]'></p>
                </div>
                <div className='lg:text-[20px] md:text-[16px] text-[14px] lg:w-[70%] w-[70%] lg:text-center text-start flex flex-col gap-5'>
                    <p>{t("teamContent")}</p>
                    {/* <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                    <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p>
                    <p>purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant</p> */}
                </div>
            </div>

            <div className='w-full grid lg:grid-cols-3 mt-7 md:grid-cols-2 grid-cols-1 gap-6 lg:w-[70%] lg:gap-[10%]'>
                {
                    teams.map((d, i) => {
                        return (
                            <Link href={"/#"} key={i} className='flex flex-col w-full'>
                                <div className='bg-[rgb(227,181,34)] pt-4 flex justify-center items-end'>
                                    <Image src={`http://test.kindlegatefoundation.org/${img}`} alt='' width={150} height={200} />
                                </div>
                                <div className='flex justify-center py-2 bg-[#14BDE3]'>
                                    <p className='font-bold'>{d.attributes.field_member_role}</p>
                                </div>
                                <div className='bg-white border-1 border-black'>
                                    <p className='font-semibold'>{d.attributes.field_member_name}</p>
                                    {/* <p>{d.attributes.field_member_caption_body.value}</p> */}
                                    <p className='text-justify' dangerouslySetInnerHTML={{ __html: d.attributes.field_member_caption_body.value.slice(0, 140) }} />
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='w-full flex justify-center my-8 flex-col items-center gap-5' >
                <div className='flex flex-col items-center'>
                    <p className='text-[36px] text-[#1E1E1E] font-bold '>Our Partners</p>
                    <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                </div>
                <div>
                    <Image src={"/img/majorpartnerlogo.svg"} alt='' width={450} height={450} className='w-full' />
                </div>
            </div>
        </div>
    )
}

export default Team