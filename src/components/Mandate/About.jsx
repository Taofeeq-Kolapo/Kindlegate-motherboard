import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <div className='flex flex-row pl-[10%] lg:gap-[13%] items-center py-[3%]'>
            <div>
                <p className='text-[#1E1E1E] text-[36px] font-bold'>About Us</p>
                <div>
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
            <Image src={"/img/right.svg"} alt='' width={300} height={300}/>
        </div>
    )
}

export default About