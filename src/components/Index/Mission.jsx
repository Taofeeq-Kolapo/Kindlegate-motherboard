import React from 'react'
import Image from 'next/image'
import { Btn1, MissionProps } from '../Reusable/Btn1'

const Mission = () => {
    return (
        <div className='bg-white flex items-center justify-between w-full py-[2%]'>
            <Image className='lg:block hidden' src={"/img/half.svg"} width={250} height={250} alt='' />
            <div className='lg:w-[60%] lg:px-[6%] gap-5 flex flex-col px-[4%]'>
                <MissionProps
                    title={"OUR MANDATE"}
                    content={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."}
                />
                <MissionProps
                    title={"OBJECTIVES"}
                    content={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "}
                />

                <div className='flex w-full justify-end'>
                    <Btn1
                        text={"LEARN MORE"}
                        link={""}
                    />
                </div>
            </div>
        </div>
    )
}

export default Mission