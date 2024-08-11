import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='flex flex-row lg:pl-[10%] px-[10%] lg:gap-[13%] items-center py-[3%]'>
            <div className='flex flex-col gap-5'>
                
                <div className='flex lg:flex-col flex-row lg:items-start  w-full'>
                    <p className='text-[#1E1E1E] lg:text-[36px] font-bold lg:w-full w-[30%]'>About Us</p>
                    <div className='lg:text-[20px] md:text-[16px] text-[14px] lg:w-full w-[70%]'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                        </p>
                        <p>
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
                        </p>
                    </div>
                </div>
                <div className='flex lg:flex-col flex-row lg:items-start  w-full'>
                    <p className='text-[#1E1E1E] lg:text-[36px] font-bold lg:w-full w-[30%]'>Our History</p>
                    <div className='lg:text-[20px] md:text-[16px] text-[14px] lg:w-full w-[70%]'>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
                        </p>
                        <p>
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
                        </p>
                    </div>
                </div>
            </div>
            <Image src={"/img/right.svg"} className='lg:block relative right-[-14%] hidden' alt='' width={300} height={300} />
        </div>
    )
}

export default About