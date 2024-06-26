'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { TbArrowRight, TbChevronLeft, TbChevronRight } from 'react-icons/tb';

const Newsbody = () => {
  const newsData = [
    {
      img: 'img/collab.svg',
      date: '23 May, 2023',
      content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      more: 'Read More',
    },
    {
      img: 'img/collab.svg',
      date: '23 May, 2023',
      content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      more: 'Read More',
    },
    {
      img: 'img/collab.svg',
      date: '23 May, 2023',
      content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      more: 'Read More',
    },
    {
      img: 'img/collab.svg',
      date: '23 May, 2023',
      content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      more: 'Read More',
    },
    {
      img: 'img/collab.svg',
      date: '23 May, 2023',
      content: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      more: 'Read More',
    },
    {
      img: 'img/collab.svg',
      date: '23 May, 2023',
      content: '“888Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      more: 'Read More',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + itemsPerPage, newsData.length - itemsPerPage));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };

  const displayedNews = newsData.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="py-[5%] bg-[#E3B522] flex flex-col gap-11">
      <div className="w-full justify-center flex">
        <p className="text-[36px] text-[#14242C] font-bold">News</p>
      </div>
      <div className="lg:px-[10%] flex flex-col gap-14">
        <div className="grid lg:grid-cols-2 lg:gap-6 gap-4 grid-cols-1 ">
          <div className="flex flex-col leading-none">
            <p className="text-[#14242C]">What is happening now</p>
            <p className="font-bold text-[40px] text-white">
              KINDLEGATE FOUNDATION IS IN COLLABORATION WITH...
            </p>
          </div>
          <div>
            <p className="text-[#14242C]">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor”
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
          {displayedNews.map((n, i) => (
            <div key={i} className="flex flex-col lg:h-[387px] justify-between rounded-[20px] relative bg-white">
              <div className='relative'>
                <Image src={n.img} alt="" className="w-full rounded-t-[20px] relative" width={200} height={200} />
              </div>
              <div className="p-3 text-[#14242C]">
                <p className='absolute p-2 bg-[#E3B522] top-[38%] right-0 font-bold'>{n.date}</p>
                <p>{n.content}</p>
                <button className="flex flex-row gap-2 items-center border border-black p-2 rounded-lg mt-5">
                  <Link href="/morenews">{n.more}</Link>
                  <span className="w-[20px] h-[20px] flex rounded-full items-center justify-center bg-[#333333] text-white">
                    <TbArrowRight />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
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
            disabled={currentIndex + itemsPerPage >= newsData.length}
            className={`w-[32px] h-[32px] rounded-full bg-[#14BDE3] flex items-center justify-center ${currentIndex + itemsPerPage >= newsData.length ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            <TbChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsbody;
