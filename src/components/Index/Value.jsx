
import React, { useState } from 'react';
import Image from 'next/image';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

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
            <p data-aos="fade-down-left" className='lg:w-[40%] lg:text-[40px] text-[30px] font-bold text-white lg:ml-[10%]'>OUR VALUE ADDING ROADMAP <span className='border-b-2 border-[#E3B522] '>(HESS MANDATE)</span></p>

            <div className='flex lg:flex-row flex-col items-center relative'>
                {/* Left arrow */}
                <button
                    onClick={handlePrev}
                    disabled={currentIndex === 0}
                    className={`absolute left-0 top-[50%] transform -translate-y-[50%] w-[40px] h-[40px] rounded-full bg-[#14BDE3] flex items-center justify-center z-[400] ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <TbChevronLeft />
                </button>

                <div data-aos="flip-up" className='lg:w-[40%] w-full lg:absolute bottom-[20%] lg:left-[8%] z-[300]'>
                    <div className='flex flex-col gap-2 p-4 text-[22px] text-white bg-[#4B4B4B] rounded-lg lg:w-[672px] lg:h-[354px] md:w-[525px] lg:ml-0 md:ml-[5%] md:h-[424px] sm:w-[267px] sm:h-[336px]'>
                        <p>{data[currentIndex].text}</p>
                        <p>{data[currentIndex].paragraph}</p>
                    </div>
                </div>
                <div data-aos="flip-right" className='flex lg:justify-end w-full lg:pr-[12%] '>
                    <Image src={data[currentIndex].imgSrc} className='lg:w-[532px] lg:h-[572px]' width={250} height={250} alt='' />
                </div>
                {/* Right arrow */}
                <button
                    onClick={handleNext}
                    disabled={currentIndex === data.length - 1}
                    className={`absolute right-0 top-[50%] transform -translate-y-[50%] w-[40px] h-[40px] rounded-full bg-[#14BDE3] flex items-center justify-center z-[400] ${currentIndex === data.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <TbChevronRight />
                </button>
            </div>

            <div className='w-full flex items-center justify-center my-7 absolute bottom-2'>
                <div className="flex gap-2 mt-4">
                    {data.map((_, index) => (
                        <span
                            key={index}
                            className={`w-[10px] h-[10px] rounded-full ${currentIndex === index ? 'bg-[#14BDE3]' : 'bg-gray-400'}`}
                        ></span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Value;


