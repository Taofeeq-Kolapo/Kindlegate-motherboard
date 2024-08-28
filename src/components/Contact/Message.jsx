'use client'
import axios from 'axios'
import React, { useState } from 'react'

const Message = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")

    const payload = {
        first_name:firstName,
        last_name:lastName,
        email:email,
        phone:phone,
        message:message
    }
    // console.log(payload)

    const base_url = "/api/contact"
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
                    alert(result)
                    setEmail('')
                    setFirstName("")
                    setLastName("")
                    setPhone("")
                    setMessage("")
                    
                    setTimeout(() => {
                        // setSuccess("")
                    }, 3000)
                }
            } catch (error) {
                console.log(error)
                console.log(error);
                // setSuccess('An error occurred. Please try again.');
                setTimeout(() => {
                    // setSuccess('');
                }, 3000);
            }
        }

    }

    return (
        <div className='px-[10%] bg-white py-[5%] flex flex-col gap-6'>
            <div className="w-full justify-center flex">
                <p className="lg:text-[36px] text-[20px] text-[#1E1E1E] font-bold">SEND A MESSAGE</p>
            </div>
            <form action="" className=''>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                    <span>
                        <p className='text-[#1E1E1E] lg:text-[24px] font-bold'>NAME</p>
                        <input value={firstName} onChange={(e)=> setFirstName(e.target.value)} type="text" className='w-full rounded-lg p-2 outline-none border-black border' name="" id="" />
                        <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>First Name</p>
                    </span>
                    <span>
                        <p className='text-[#1E1E1E] lg:text-[24px] font-bold'>NAME</p>
                        <input value={lastName} onChange={(e)=> setLastName(e.target.value)} type="text" className='w-full rounded-lg p-2 outline-none border-black border' name="" id="" />
                        <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>Last Name</p>
                    </span>
                    <span>
                        <p className='text-[#1E1E1E] lg:text-[24px] font-bold'>EMAIL ADDRESS</p>
                        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name="" className='w-full rounded-lg p-2 outline-none border-black border' id="" />
                        <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>example@example.com</p>
                    </span>
                    <span>
                        <p className='text-[#1E1E1E] lg:text-[24px] font-bold'>PHONE NUMBER</p>
                        <input value={phone} onChange={(e)=> setPhone(e.target.value)} type="text" name="" className='w-full rounded-lg p-2 outline-none border-black border' id="" />
                        <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>Please enter a valid phone number</p>
                    </span>
                </div>
                <span>
                    <p className='text-[#1E1E1E] text-[24px]'>Message</p>
                    <textarea value={message} onChange={(e)=> setMessage(e.target.value)} name="" className='w-full rounded-lg p-2 outline-none border-black border' rows={10} id=""></textarea>
                </span>
                <div className='flex w-full justify-end'>
                    <button onClick={handlePost} className='text-[#1E1E1E] font-bold py-2 px-6 bg-[#14BDE3] rounded-2xl'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Message