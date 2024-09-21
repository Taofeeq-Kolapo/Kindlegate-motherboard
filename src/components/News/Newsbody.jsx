'use client'
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { TbArrowRight, TbChevronLeft, TbChevronRight } from 'react-icons/tb';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

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

  const [index, setIndex] = useState("")
  const [title, setTitle] = useState("")
  const [news, setNews] = useState("")
  const [date, setDate] = useState("")
  const [newsImg, setNewsimg] = useState("")
  const [newData, setNewData] = useState([])

  const FetchIndex = async () => {
    const base_url = "/api/mothership/news/newsbody"
    const response = await axios.get(base_url)
    const result = response.data
    console.log(result.data[0].attributes.field_news_introductory_text.value)
    setIndex(result.data[0].attributes.field_news_introductory_text.value)
    setTitle(result.data[0].attributes.field_news_section_header)
  }

  if (typeof window !== 'undefined') {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(index, 'text/html');
    const plainText = parsedHtml.body.textContent || "";
    localStorage.setItem('newsBody', plainText);
    localStorage.setItem('newsHeader', title);
  }

  useEffect(() => {
    FetchIndex();
  }, [])

  const { t } = useTranslation()
  const FetchNews = async () => {
    const base_url = "/api/mothership/news/othernews"
    const response = await axios.get(base_url)
    const result = response.data
    console.log(result.data[0].attributes.field_news_body.value)
    setNews(result.data[0].attributes.field_news_body.value)
    setDate(result.data[0].attributes.field_news_dater)
  }
  const FetchNews2 = async () => {
    const base_url = "/api/mothership/news/othernews/othernews2"
    const response = await axios.get(base_url)
    const result = response.data
    console.log(result.data)
    setNewData(result.data)
  }

  const fetchnewsImg =async ()=>{
    const base_url = "/api/mothership/news/newImg"
    const response = await axios.get(base_url)
    const result = response.data
    console.log(result.data.attributes.uri.url)
    setNewsimg(result.data.attributes.uri.url)
    // return result.data[0].relationships.field_news_image.data.attributes.url
  }

  if (typeof window !== 'undefined') {
    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(news, 'text/html');
    const plainText = parsedHtml.body.textContent || "";
    localStorage.setItem('newsContent', plainText);
    // localStorage.setItem('newsHeader', title);
  }

  useEffect(() => {
    FetchNews();
    FetchNews2();
    fetchnewsImg();
  }, [])

  // const { t } = useTranslation()

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
        <p className="text-[36px] text-[#14242C] font-bold">{t("newsHeader")}</p>
      </div>
      <div className="px-[10%] flex flex-col gap-14">
        <div className="grid lg:grid-cols-2 lg:gap-6 gap-4 grid-cols-1 ">
          <div className="flex flex-col leading-none gap-4">
            <p className="text-[#14242C] font-bold">{t("newsBody").slice(0, 23)}</p>
            <p className="font-bold lg:text-[40px] md:text-[20px] text-[16px] text-white">
              KINDLEGATE FOUNDATION IS IN COLLABORATION WITH...
            </p>
          </div>
          <div>
            <p className="text-[#14242C] text-justify ">
              {t("newsBody")}
              {/* “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor” */}
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
          {/* {displayedNews.map((n, i) => ( */}
            {/* <div className="flex flex-col lg:h-[387px] justify-between rounded-[20px] relative bg-white">
              <div className='relative'>
                <Image src={""} alt="" className="w-full rounded-t-[20px] relative" width={200} height={200} />
              </div>
              <div className="p-3 text-[#14242C]">
                <p className='absolute p-2 bg-[#E3B522] top-[38%] right-0 font-bold'>{date}</p>
                <p dangerouslySetInnerHTML={{__html:news }}></p>
                <button className="flex flex-row gap-2 items-center border border-black p-2 rounded-lg mt-5">
                  <Link href="/morenews">{""}</Link>
                  <span className="w-[20px] h-[20px] flex rounded-full items-center justify-center bg-[#333333] text-white">
                    <TbArrowRight />
                  </span>
                </button>
              </div>
            </div> */}
          {/* ))} */}
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7">
          {newData.map((n, i) => (
            <div key={i} className="flex flex-col lg:h-[387px] justify-between rounded-[20px] relative bg-white">
              <div className='relative'>
                <Image src={`http://test.kindlegatefoundation.org/${newsImg}`} alt="" className="w-full rounded-t-[20px] relative" width={200} height={200} />
              </div>
              <div className="p-3 text-[#14242C]">
                <p className='absolute p-2 bg-[#E3B522] top-[38%] right-0 font-bold'>{n.attributes.field_news_date}</p>
                <p dangerouslySetInnerHTML={{__html: n.attributes.field_news_body.value.slice(0, 155)}}></p>
                <button className="flex flex-row gap-2 items-center border border-black p-2 rounded-lg mt-5">
                  <Link href="/morenews">Read More</Link>
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
