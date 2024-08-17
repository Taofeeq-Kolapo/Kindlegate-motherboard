'use client'
import Image from 'next/image';
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { TbChevronDown } from 'react-icons/tb';

const LanguageSelector = () => {


    const language = [
        {
            image: "/img/eng.svg",
            lang: "English",
            code: "en"
        },
        {
            image: "/img/french.svg",
            lang: "French",
            code: "fr"
        },
        {
            image: "/img/hindi.svg",
            lang: "Hindi",
            code: "hi"
        },
        {
            image: "/img/russian.svg",
            lang: "Russian",
            code: "rs"
        },
    ];
    const { i18n } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(language[0]);
    const [isOpen, setIsOpen] = useState(false);

    // console.log(selectedOption)

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
        console.log(option)
        i18n.changeLanguage(option.code)
    };
    console.log(selectedOption.lang)

    const remainingOptions = language.filter(
        (item) => item.lang !== selectedOption?.country_name
    );

    const handleselectlang = () => {

    }

    return (
        <div>

            <div className="relative inline-block ">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full xl:px-3 text-[12px] h-fit text-[var(--text-color)] flex items-center gap-1 p-2 relative bg-[var(--tetiary-color)] rounded-md"
                >
                    <Image
                        width={20}
                        height={20}
                        src={selectedOption?.image}
                        alt={selectedOption?.lang}
                        className="w-4 h-4 mr-1"
                    />
                    {/* <p>{selectedOption.image}</p> */}
                    {selectedOption?.lang}
                    <TbChevronDown className='text-md ' />
                </button>
                {isOpen && (
                    <div className="absolute open top-10 right-0 left-0 bg-[#0f0f0f] shadow-md rounded-md p-2">
                        {remainingOptions.map((item) => (
                            <div
                                key={item.lang}
                                onClick={() => handleOptionSelect(item)}
                                className="flex items-center text-[12px] p-2 hover:bg-[black] min-w-fit  cursor-pointer"
                            >
                                <div
                                    href={item.link}
                                    className="flex items-center gap-1 text-white"
                                >
                                    <Image
                                        width={20}
                                        height={20}
                                        src={item.image}
                                        alt={item.lang}
                                        className="w-3 h-3 mr-1"
                                    />
                                    {item.lang}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default LanguageSelector