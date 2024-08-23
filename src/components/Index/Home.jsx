'use client'
import { Btn1, Btn2 } from "@/components/Reusable/Btn1";
import { useTranslation } from "react-i18next";
import i18n from "../Reusable/i18n";
// import Image from "next/image";

export default function Home() {
  const {t} = useTranslation()
  return (
    <div className="bg-[url(/img/LandingImage.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
      <div className="pt-[5%] px-[7%] flex w-full justify-end">
        <div data-aos="fade-left" className="lg:w-[45%] w-full flex flex-col gap-4 lg:items-start lg:pl-[15%] items-center">
          <p className="font-semibold lg:text-[60px] md:text-[48px] text-[25px] text-white leading-none tracking-wider"><span className="flex tracking-widest">KINDLEGATE</span> FOUNDATION</p>
          <div className="flex flex-col items-center lg:gap-3 gap-5">
            {/* <p>{t("welcome")}</p> */}
            <p className="lg:text-[18px] md:text-[16px] lg:w-[382px] w-[324px] lg:text-start md:text-center text-[13px] text-white text-justify ">{t("HeroHeader")}
            </p>
            <Btn1
              text={t("herobtn")}
              link={"/involved"}
            />
            <Btn2
              text={"KINDLEGATE CAUSE SHOP"}
            />
          </div>
        </div>
      </div>
    </div>

  );
}
