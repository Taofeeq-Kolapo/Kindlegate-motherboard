import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Featured = () => {
    const Data = [
        {
            img: "/img/one.svg",
            title: "Leadership",
            content: "Promoting thought based Leadership in the Community",
            more: "Read more"
        },
        {
            img: "/img/two.svg",
            title: "Leadership",
            content: "Promoting thought based Leadership in the Community",
            more: "Read more"
        },
        {
            img: "/img/three.svg",
            title: "Leadership",
            content: "Promoting thought based Leadership in the Community",
            more: "Read more"
        },
    ]
    return (
        <div className='flex flex-col gap-8 px-[7%] mt-10 items-center justify-center mb-7'>
            <p className='text-[36px] font-bold text-[#14242C]'>Featured Programs</p>
            <div className='grid lg:grid-cols-3 justify-between w-full md:grid-cols-2 grid-cols-1 gap-7'>
                {
                    Data.map((d, i) => {
                        return (
                            <div key={i} className='flex flex-col gap-3 items-center'>
                                <Image src={d.img} width={300} height={300} className='w-full' />
                                <div>
                                    <div className='flex w-full justify-center'>
                                        <p className='text-[#0A2640] text-[24px] font-bold'>{d.title}</p>
                                    </div>
                                    {/* <p>{d.content}</p> */}
                                    <p>{d.content}</p>
                                    <Link href={"#"} className='text-[#00A859]'>{d.more}</Link>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Featured