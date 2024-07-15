import React from 'react'

const InvolveHero = () => {
    return (
        <div className="bg-[url(/img/involve.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full relative">
            <div className='w-full h-screen absolute top-0 bg-black bg-opacity-55'></div>
            <div className="lg:pt-[5%] px-[7%] flex w-full ">
                <div className="lg:w-[50%] flex flex-col z-[200] items-center gap-4">
                    <p className="font-bold lg:text-[64px] text-[40px] text-white leading-none">GET INVOLVED</p>
                    <div className="flex flex-col items-center ">
                        <p className="text-[20px] text-white text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default InvolveHero