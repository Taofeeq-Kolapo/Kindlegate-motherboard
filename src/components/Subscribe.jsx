'use client'
import axios from 'axios';
import React, { useState } from 'react'
import { FaLocationArrow } from "react-icons/fa";

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');

    const payload = {
        email: email
    }

    const base_url = "/api/subscribe"
    const handlePost = async (e) => {
        e.preventDefault();
        if (!email) {
            alert('Please enter your email')
            return;
        } else {
            try {
                const resp = await axios.post(base_url, payload)
                const result = resp.data
                console.log(result)
                if (result) {
                    setSuccess(result)
                    setEmail('')
                    
                    setTimeout(() => {
                        setSuccess("")
                    }, 3000)
                }
            } catch (error) {
                console.log(error)
                console.log(error);
                setSuccess('An error occurred. Please try again.');
                setTimeout(() => {
                    setSuccess('');
                }, 3000);
            }
        }

    }
    return (
        <div className="flex flex-col items-center justify-center py-[5%] relative">
            <p className='lg:text-[40px] md:text-[30px] sm:text-[20px] font-bold text-black'>NEWS MAGAZINE</p>
            <p className='lg:text-[20px] text-[10px]'>Join our newsletter now to get the latest offer and magazine</p>
            <div className='flex flex-row justify-between items-center border-[2px] mt-2 bg-[#D9D9D9] border-black rounded-2xl px-3 py-2 lg:w-[552px] w-[312px]'>
                <input required value={email} onChange={(e) => setEmail(e.target.value)} className='outline-none bg-transparent border-none w-[90%] text-black' type="email" placeholder='Your email here' name="" id="" />
                <button onClick={handlePost} className='text-[20px] font-bold text-black'><FaLocationArrow /></button>
            </div>
            {success && <p className='text-green-500 mt-4'>{success}</p>}
            <div className='bg-gradient-to-tr from-[#0B9CBB] to-[#DFF9FF] w-[20%] lg:h-[100px] h-[50px] clip-slant absolute top-0 left-0'>
            </div>

        </div>
    )
}

export default Subscribe