
import React, { useState } from 'react';
import Image from 'next/image';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import Swipers from './Swipers';

const Value = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const data = [
        {
            text: "Healthy communities",
            paragraph: "We believe when our communities are healthy and Eco-friendly, people thrive. Consequently, often many of the services that keep people healthy are difficult to access for the people who need them most. We will facilitate enabling environments to promote creativity, innovation and collaboration for healthcare causes and objectives. We will ensure that through our community networks every Hungry Citizen within our reach gets Food Assistance and the Homeless get a clean living environment with access to disease prevention medicine.",
            imgSrc: "/img/outdoor.svg",
        },
        {
            text: "Social Economic Empowerment:",
            paragraph: "We believe that by the articulation of a common position towards deploying our diverse and rich cultural resources, we would contribute to combating vices such as youth restiveness, insecurity and unemployment. These efforts will be manifested by promoting activities, events and curating Exhibitions, Workshops, Training and Festivals of African Inspired Arts, Drama, Music, Crafts and Culture. Also, entrepreneurs will be empowered through capacity development, seed capital, mentoring and networking.",
            imgSrc: "/img/second.png",
        },
        {
            text: "Safety and Justice:",
            paragraph: "We believe in an ethical future where safe and just communities have justice systems that are responsive, fair and that works for our nation’s most vulnerable populations, especially those most impacted by crime, violence and gender inequality. We will provide a support and legal aid systems that will reduce unnecessary incarceration.",
            imgSrc: "/img/third.png",
        },
    ];

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < data.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className='flex flex-col bg-[#00586B] lg:h-[810px] rounded-xl p-6 py-10 lg:gap-0 gap-4 relative'>
            <Image src="/img/half.svg" alt='' height={80} width={80} className='absolute lg:w-[10%] right-0 rotate-180 top-0'/>
            <p data-aos="fade-down-left" className='lg:w-[40%] lg:text-[40px] text-[30px] font-bold text-white lg:ml-[10%]'>OUR VALUE ADDING ROADMAP <span className='border-b-2 border-[#E3B522] '>(HESS MANDATE)</span></p>
            <Swipers/>
        </div>
    );
};

export default Value;


