
"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { TbChevronLeft, TbChevronRight } from 'react-icons/tb';

const BlogBody = () => {
    const blogData = [
        {
            title: "How systemic justice builds the power of communities to use the law for good",
            date: "May 23, 2023",
            image: "/img/blogvid.svg",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”"
        },
        {
            title: "How systemic justice builds the power of communities to use the law for good",
            date: "May 23, 2023",
            image: "/img/blogvid.svg",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”"
        },
        {
            title: "How systemic justice builds the power of communities to use the law for good",
            date: "May 23, 2023",
            image: "/img/blogvid.svg",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”"
        },
    ];

    const data2 = [
        {
            image: "/img/blogvid.svg",
            title: "How systemic justice builds the power of communities to use the law for good",
            date: "May 23, 2023",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”"
        },
        {
            image: "/img/blogvid.svg",
            title: "How systemic justice builds the power of communities to use the law for good 2",
            date: "May 23, 2023",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”"
        },
        {
            image: "/img/blogvid.svg",
            title: "How systemic justice builds the power of communities to use the law for good 3",
            date: "May 23, 2023",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data2.length - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex < data2.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className='flex flex-col px-[10%] lg:my-[5%]'>
            <div className='flex lg:flex-row my-5 flex-col items-center justify-between w-full '>
                <div className='flex flex-col gap-5 lg:w-[60%]'>
                    {
                        blogData.map((b, i) => {
                            return (
                                <div key={i} className='flex flex-col lg:gap-2 gap-5'>
                                    <div>
                                        <p className='lg:text-[40px] text-[25px] lg:text-start text-center text-[#1E1E1E] font-bold leading-none'>{b.title}</p>
                                        <p>{b.date}</p>
                                    </div>
                                    <p>{b.paragraph}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='lg:w-[30%] w-full'>
                    <Image src={"/img/blogvid.svg"} className='w-full' width={300} height={300} alt='' />
                </div>
            </div>
            <div className='flex flex-col items-start gap-3 mt-5'>
                <div className='flex lg:flex-row flex-col-reverse gap-5'>
                    <Image src={data2[currentIndex].image} className='w-full' width={200} height={200} alt='' />
                    <div className='flex flex-col gap-6'>
                        <div>
                            <p className='lg:text-[40px] text-[25px] lg:text-start text-center text-[#1E1E1E] font-bold leading-none'>{data2[currentIndex].title}</p>
                            <p>{data2[currentIndex].date}</p>
                        </div>
                        <p>{data2[currentIndex].paragraph}</p>
                    </div>
                </div>
                <div className="w-full justify-center flex flex-row gap-2 mb-4 mt-7">
                    <button
                        onClick={handlePrev}
                        className={`w-[32px] h-[32px] rounded-full bg-[#14BDE3] flex items-center justify-center ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentIndex === 0}
                    >
                        <TbChevronLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className={`w-[32px] h-[32px] rounded-full bg-[#14BDE3] flex items-center justify-center ${currentIndex === data2.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={currentIndex === data2.length - 1}
                    >
                        <TbChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogBody;
