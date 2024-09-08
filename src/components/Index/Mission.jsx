import React from 'react'
import Image from 'next/image'
import { Btn1, MissionProps } from '../Reusable/Btn1'
import { useTranslation } from 'react-i18next'


const Mission = () => {
    const {t} = useTranslation()
    return (
        <div className='bg-white flex lg:items-center justify-between w-full py-[2%] relative'>
            <Image data-aos="fade-right" className='lg:block lg:w-[305.05px] lg:h-[305.05px] relative lg:left-[-3rem] lg:top-[-4rem] md:w-[182px] md:h-[202px] w-[57px] h-[107px]' src={"/img/half.svg"} width={250} height={250} alt='' />
            <div data-aos="fade-left" className='lg:w-[60%] lg:px-[6%] gap-5 flex flex-col px-[4%]'>
                <MissionProps
                    title={t("mandate")}
                    content={t("mandateConten")}
                />
                <MissionProps
                    title={t("objective")}
                    content={t("objectiveConten")}
                />
                <div className='flex w-full lg:justify-end justify-center'>
                    <Btn1
                        text={t("learnbtn")}
                        link={"/mandate"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Mission