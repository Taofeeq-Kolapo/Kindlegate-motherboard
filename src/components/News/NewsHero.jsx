import React from 'react'

const NewsHero = () => {
    return (
        <div className="bg-[url(/img/news.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
            <div className="pt-[5%] px-[7%] flex w-full justify-end ">
                <div className="lg:w-[50%] w-full flex flex-col items-center gap-4">
                    <p className="font-bold lg:text-[50px] md:text-[48px] text-[30px] text-white leading-none">NEWS AND EVENTS</p>
                    <div className="flex flex-col items-center lg:w-[80%]">
                        <p className="lg:text-[18px] md:text-[16px] text-[12px] text-white text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsHero