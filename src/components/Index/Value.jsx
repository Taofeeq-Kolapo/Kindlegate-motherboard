// import React from 'react'
// import Image from 'next/image'
// import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

// const Value = () => {
//     return (
//         <div className='flex flex-col bg-[#00586B] rounded-xl p-6 py-10 lg:gap-0 gap-4 '>
//             <p className='lg:w-[40%] lg:text-[40px] text-[30px] font-bold text-white'>OUR VALUE ADDING ROADMAP <span className='border-b-2 border-[#E3B522] '>(HESS MANDATE)</span></p>
//             <div className='flex lg:flex-row flex-col items-center relative'>
//                 <div className='lg:w-[40%] w-full lg:absolute lg:left-[19%]'>
//                     <div className='flex flex-col gap-2 p-4 bg-[#4B4B4B] rounded-lg lg:w-full '>
//                         <p>Healthy communities:</p>
//                         <p>We believe when our communities are healthy and Eco-friendly, people thrive. Consequently, often many of the services that keep people healthy are difficult to access for the people who need them most. We will facilitate enabling environments to promote creativity, innovation and collaboration for healthcare causes and objectives. We will ensure that through our community networks every Hungry Citizen within our reach gets Food Assistance and the Homeless get a clean living environment with access to disease prevention medicine.</p>
//                     </div>
//                 </div>
//                 <div className='flex lg:justify-end w-full lg:pr-[12%]'>
//                     <Image src={"/img/outdoor.svg"} className='w-[532px] h-[572px]' width={250} height={250} alt='' />
//                 </div>
//             </div>

//             <div className='w-full items-center justify-center flex my-7'>
//                 <div className="w-full justify-center flex flex-row gap-2 mt-7">
//                     <button
//                         // onClick={handlePrev}
//                         // disabled={currentIndex === 0}
//                         // className={`w-[32px] h-[32px] rounded-full bg-[#14BDE3] flex items-center justify-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     >
//                         <TbChevronLeft />
//                     </button>
//                     <button
//                         // onClick={handleNext}
//                         // disabled={currentIndex + itemsPerPage >= newsData.length}
//                         // className={`w-[32px] h-[32px] rounded-full bg-[#14BDE3] flex items-center justify-center ${currentIndex + itemsPerPage >= newsData.length ? 'opacity-50 cursor-not-allowed' : ''}`}
//                     >
//                         <TbChevronRight />
//                     </button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default Value

import React, { useState } from 'react'
import Image from 'next/image'
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb'

const Value = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = [
        {
            text: "Healthy communities",
            paragraph: "We believe when our communities are healthy and Eco-friendly, people thrive. Consequently, often many of the services that keep people healthy are difficult to access for the people who need them most. We will facilitate enabling environments to promote creativity, innovation and collaboration for healthcare causes and objectives. We will ensure that through our community networks every Hungry Citizen within our reach gets Food Assistance and the Homeless get a clean living environment with access to disease prevention medicine.",
            imgSrc: "/img/outdoor.svg",
        },
        {
            text: "Healthy communities 2",
            paragraph: "We believe when our communities are healthy and Eco-friendly, people thrive. Consequently, often many of the services that keep people healthy are difficult to access for the people who need them most. We will facilitate enabling environments to promote creativity, innovation and collaboration for healthcare causes and objectives. We will ensure that through our community networks every Hungry Citizen within our reach gets Food Assistance and the Homeless get a clean living environment with access to disease prevention medicine.", 
            imgSrc: "/img/outdoor.svg",
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
        <div className='flex flex-col bg-[#00586B] rounded-xl p-6 py-10 lg:gap-0 gap-4 '>
            <p data-aos="fade-down-left" className='lg:w-[34%] lg:text-[40px] text-[30px] font-bold text-white'>OUR VALUE ADDING ROADMAP <span className='border-b-2 border-[#E3B522] '>(HESS MANDATE)</span></p>

            <div className='flex lg:flex-row flex-col items-center relative'>
                <div data-aos="flip-up" className='lg:w-[40%] w-full lg:absolute lg:left-[19%] z-[300]'>
                    <div className='flex flex-col gap-2 p-4 text-[22px] text-white bg-[#4B4B4B] rounded-lg lg:w-full '>
                        <p>{data[currentIndex].text}</p>
                        <p>{data[currentIndex].paragraph}</p>
                    </div>
                </div>
                <div data-aos="flip-right" className='flex lg:justify-end w-full lg:pr-[12%]'>
                    <Image src={data[currentIndex].imgSrc} className='w-[532px] h-[572px]' width={250} height={250} alt='' />
                </div>
            </div>

            <div className='w-full items-center justify-center flex my-7'>
                <div className="w-full justify-center flex flex-row gap-2 mt-7">
                    <button
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`w-[32px] h-[32px] rounded-full bg-[#14BDE3] flex items-center justify-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <TbChevronLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentIndex === data.length - 1}
                        className={`w-[32px] h-[32px] rounded-full bg-[#14BDE3] flex items-center justify-center ${currentIndex === data.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        <TbChevronRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Value
