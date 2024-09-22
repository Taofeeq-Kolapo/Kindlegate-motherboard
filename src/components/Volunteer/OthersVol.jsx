'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const VolHero = () => {
  const [data, setData] = useState([])
  const Data = [
    {
      img: "/img/Avatard.svg",
      title: "LOREM IPSUM",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.aecenas porttitor congue massa.Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.Fusce est.Vivamus a tellus.Pellentesque habitant "
    },
    {
      img: "/img/Avatard.svg",
      title: "LOREM IPSUM",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.aecenas porttitor congue massa.Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.Fusce est.Vivamus a tellus.Pellentesque habitant "
    },
    {
      img: "/img/Avatard.svg",
      title: "LOREM IPSUM",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.aecenas porttitor congue massa.Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.Fusce est.Vivamus a tellus.Pellentesque habitant "
    },
    {
      img: "/img/Avatard.svg",
      title: "LOREM IPSUM",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.aecenas porttitor congue massa.Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim.Fusce est.Vivamus a tellus.Pellentesque habitant "
    }
  ]

  const fetchVolunteers = async () => {
    const base_url = "/api/mothership/volunteer/headofprogram"
    try {
      const response = await axios.get(base_url);
      const result = response.data;
      console.log(result);
      setData(result.data);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    }
  };

  useEffect(()=>{
    fetchVolunteers();
  },[])

  return (
    <div className='flex flex-col gap-7 pt-[3%]'>
      <div className='w-full items-center justify-center flex'>
        <div className='flex flex-col items-center'>
          <p className='text-[20px] text-[#1E1E1E] font-bold '>HEADS OF PROGRAMS</p>
          <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
        </div>
      </div>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[6%] gap-3 w-full px-[10%] py-[2%] mb-[3%]'>
        {
          data.map((d, i) => {
            return (
              <div key={i} className='flex flex-col items-center '>
                <Image src={d.img} width={300} height={300} alt='' />
                <div className='flex flex-col items-center'>
                  <p className='text-[20px] text-[#1E1E1E] font-bold '>{d.attributes.field_volunteer_image_item}</p>
                  <p className='h-1 w-[135.2px] rounded-full bg-[#E3B522]'></p>
                </div>
                <p dangerouslySetInnerHTML={{ __html: d.attributes.field_head_of_program_descriptio.value.slice(0, 200)}} className='w-[70%] text-justify'></p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default VolHero