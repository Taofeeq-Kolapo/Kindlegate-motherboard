import React from 'react'
// import Swiper from 'swiper'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

const Swipers = () => {
    const data = [
        {
            text: "Healthy communities",
            paragraph: "We believe when our communities are healthy and Eco-friendly, people thrive. Consequently, often many of the services that keep people healthy are difficult to access for the people who need them most. We will facilitate enabling environments to promote creativity, innovation and collaboration for healthcare causes and objectives. We will ensure that through our community networks every Hungry Citizen within our reach gets Food Assistance and the Homeless get a clean living environment with access to disease prevention medicine.",
            imgSrc: "/img/outdoor.svg",
        },
        {
            text: "Social Economic Empowerment:",
            paragraph: "We believe that by the articulation of a common position towards deploying our diverse and rich cultural resources, we would contribute to combating vices such as youth restiveness, insecurity and unemployment. These efforts will be manifested by promoting activities, events and curating Exhibitions, Workshops, Training and Festivals of African Inspired Arts, Drama, Music, Crafts and Culture. Also, entrepreneurs will be empowered through capacity development, seed capital, mentoring and networking.",
            imgSrc: "/img/socialeconomic.svg",
        },
        {
            text: "Safety and Justice:",
            paragraph: "We believe in an ethical future where safe and just communities have justice systems that are responsive, fair and that works for our nation’s most vulnerable populations, especially those most impacted by crime, violence and gender inequality. We will provide a support and legal aid systems that will reduce unnecessary incarceration.",
            imgSrc: "/img/safetyjustice.svg",
        },
    ];
    return (
        <div className="lg:h-[60vh] h-[70vh] mt-4 items-center">
            <Swiper
            className='lg:h-[80vh] h-[60vh]'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={{ autoplay: true }}
                pagination={{ clickable: true }}
                scrollbar={ false}
            >
                <div className='w-full flex relative h-full'>
                    {
                        data.map((d, i) => {
                            return (
                                <SwiperSlide key={i} className='w-full px-[11%] flex flex-row items-center'>
                                    <div className='flex flex-col gap-2 p-8 text-[22px] lg:absolute lg:top-24 text-white bg-[#4B4B4B] z-[500] rounded-lg lg:w-[702px] lg:h-[384px] md:w-[455px] lg:ml-[3%] md:ml-[5%] md:h-[284px] sm:w-[267px] sm:h-[336px]' >
                                        <p>{d.text}</p>
                                        <p className='lg:mt-10 lg:text-[20px] md:text-[12px] text-[10px]'>{d.paragraph}</p>
                                    </div>
                                    <Image src={d.imgSrc} className='absolute lg:top-2 right-20 lg:w-[552px] lg:h-[492px] md:w-[300px] md:h-[120px] md:top-[50%]' width={250} height={250} alt=''/>
                                </SwiperSlide>
                            )
                        })
                    }
                </div>
                ...
            </Swiper>
        </div>
    )
}

export default Swipers