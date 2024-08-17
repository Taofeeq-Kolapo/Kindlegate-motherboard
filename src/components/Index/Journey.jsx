import React from 'react'
import { Btn1 } from '../Reusable/Btn1'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Journey = () => {
    const {t} = useTranslation()
    return (
        <div className='lg:pl-[10%] px-[10%] flex lg:flex-row py-6 lg:gap-11 lg:items-center items-start bg-[#E3B522] justify-between'>
            <div  className='flex flex-col lg:items-start items-center gap-6'>
                <p className='text-[#1D1D1D] lg:text-[25px] md:text-[20px] sm:text-[14px] font-bold'>{t("journey")}</p>
                <p className='font-semibold text-black lg:w-[80%]'>{t("journeyContent")}</p>
                <Btn1
                    text={t("herobtn")}
                    link={"/involved"}
                />
            </div>
            <Image className='lg:block relative right-[-12.3%] lg:w-[326px] lg:h-[326px] w-[116px] h-[116px] md:h-[116px] md:w-[71px]' src={"/img/half2.svg"} width={200} height={200} alt='' />
        </div>
    )
}

export default Journey