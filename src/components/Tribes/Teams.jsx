'use client'
import React, { useEffect, useState } from 'react'
import { TeamProps } from '../Reusable/Btn1'
import axios from 'axios'

const Teams = () => {
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


    const fetchProgram = async () => {
        const base_url = "/api/mothership/tribe/team"
        const response = await axios.get(base_url)
        const result = response.data
        setProg1(result.data[0].attributes.field_team_member_caption_body.value)
        setProg1T(result.data[0].attributes.field_team_member_role)
        setProg2(result.data[1].attributes.field_team_member_caption_body.value)
        setProg2T(result.data[1].attributes.field_team_member_role)
        setProg3T(result.data[2].attributes.field_team_member_role)
        setProg3(result.data[2].attributes.field_team_member_caption_body.value)
        setProg4T(result.data[3].attributes.field_team_member_role)
        setProg4(result.data[3].attributes.field_team_member_caption_body.value)
        setProg5T(result.data[4].attributes.field_team_member_role)
        setProg5(result.data[4].attributes.field_team_member_caption_body.value)
        setProg6T(result.data[5].attributes.field_team_member_role)
        setProg6(result.data[5].attributes.field_team_member_caption_body.value)
    }

    useEffect(() => {
        fetchProgram();
    }, [])


  return (
    <div className='px-[10%] py-[2%] flex flex-col gap-6'>
        <div className='w-full justify-center flex'>
            <p className='text-[36px] text-[#14242C] font-bold'>Our Team</p>
        </div>
        <div className='flex flex-col gap-10 mb-[3%]'>
            <TeamProps
                img={"/img/Avatard.svg"}
                role={prog1T}
                text1={prog1}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                btntext={"Learn more"}
                teamLink={"trustee"}
            />
            <TeamProps
                img={"/img/Avatard.svg"}
                role={prog2T}
                text1={prog2}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                btntext={"Learn more"}
                teamLink={"board"}
            />
            <TeamProps
                img={"/img/Avatard.svg"}
                role={prog3T}
                text1={prog3}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                btntext={"Learn more"}
                teamLink={"council"}
            />
            <TeamProps
                img={"/img/Avatard.svg"}
                role={prog4T}
                text1={prog4}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                btntext={"Learn more"}
                teamLink={"volunteer"}
            />
            <TeamProps
                img={"/img/Avatard.svg"}
                role={prog5T}
                text1={prog5}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                btntext={"Learn more"}
                teamLink={"volunteer"}
            />
            <TeamProps
                img={"/img/Avatard.svg"}
                role={prog6T}
                text1={prog6}
                // text2={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                // text3={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                btntext={"Learn more"}
                teamLink={"volunteer"}
            />
        </div>
    </div>
  )
}

export default Teams