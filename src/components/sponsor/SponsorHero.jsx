import React from 'react'

const SponsorrHero = () => {
    return (
        <div className="bg-[url(/img/sponsor.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full relative">
            <div className='absolute w-full h-screen top-0 bg-black inset-0 bg-opacity-50'></div>
            <div className="pt-[5%] px-[7%] flex w-full z-[500]">
                <div className="lg:w-[50%] w-full flex flex-col items-center gap-4">
                    <p className="font-bold text-[40px] text-white leading-none">Sponsor our Programs/Event</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="text-[18px] text-white text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SponsorrHero