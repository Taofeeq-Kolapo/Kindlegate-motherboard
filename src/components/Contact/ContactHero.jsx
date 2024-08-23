import React from 'react'

const ContactHero = () => {
    return (
        <div className="bg-[url(/img/bg-3.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
            <div className="lg:pt-[5%] lg:px-[7%] flex w-full ">
                <div className="lg:w-[50%] flex flex-col w-full items-center gap-4">
                    <p className="font-bold lg:text-[50px] md:text-[48px] text-[30px] text-white leading-none">REACH US</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="lg:text-[18px] lg:w-full w-[313px] text-white text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactHero