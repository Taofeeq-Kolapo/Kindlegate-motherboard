'use client'
import { Btn1, Btn2 } from "@/components/Reusable/Btn1";
import Image from "next/image";

export default function Home() {
  return (
    <div className="backgound bg-no-repeat bg-cover h-screen justify-center flex items-center w-full ">
      <div className="pt-[5%] px-[7%] flex w-full justify-end">
        <div className="w-[45%] flex flex-col gap-4">
          <p className="font-bold text-[64px] text-white leading-none">KINDLEGATE FOUNDATION</p>
          <div className="flex flex-col items-center gap-3">
            <p className="text-[20px] text-white ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
            </p>
            <Btn1
              text={"GET INVOLVED"}
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
