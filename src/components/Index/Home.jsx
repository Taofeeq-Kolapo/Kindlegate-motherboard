'use client'
import { Btn1, Btn2 } from "@/components/Reusable/Btn1";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[url(/img/LandingImage.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
      <div className="pt-[5%] px-[7%] flex w-full justify-end">
        <div data-aos="fade-left" className="lg:w-[45%] w-full flex flex-col gap-4 lg:items-start lg:pl-[15%] items-center">
          <p className="font-bold lg:text-[64px] md:text-[48px] text-[25px] text-white leading-none"><span className="flex tracking-wider">KINDLEGATE</span> FOUNDATION</p>
          <div className="flex flex-col items-center lg:gap-3 gap-5">
            <p className="lg:text-[20px] md:text-[16px] lg:w-[382px] w-[324px] lg:text-start md:text-center text-[13px] text-white text-justify "> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
            </p>
            <Btn1
              text={"GET INVOLVED"}
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
