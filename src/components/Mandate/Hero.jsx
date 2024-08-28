import React from 'react'

const Hero = () => {
  return (
    <div className="bg-[url(/img/mandate.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
      <div className="pt-[5%] px-[7%] flex w-full ">
        <div className="lg:w-[50%] w-full flex flex-col items-center gap-4">
          <p className="font-semibold lg:text-[50px] md:text-[48px] text-[40px] text-white leading-none">OUR MANDATE</p>
          <div className="flex flex-col items-center lg:w-[80%]">
            <p className="lg:text-[18px] md:text-[16px] sm:text-[12px] text-white lg:text-start text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;