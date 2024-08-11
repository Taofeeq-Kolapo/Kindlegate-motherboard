import React from 'react'

const BlogHero = () => {
  return (
    <div className="bg-[url(/img/blogs.svg)] bg-no-repeat bg-cover bg-center h-screen justify-center flex items-center w-full ">
            <div className="pt-[5%] px-[7%] flex w-full justify-end ">
                <div className="lg:w-[50%] flex flex-col items-center gap-4">
                    <p className="font-bold lg:text-[64px] md:text-[48px] text-[40px] text-white leading-none">BLOG</p>
                    <div className="flex flex-col items-center ">
                        <p className="lg:text-[20px] md:text-[16px] text-[12px] text-white text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est.
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default BlogHero