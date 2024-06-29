import React from 'react'

const Message = () => {
    return (
        <div className='px-[10%] bg-white py-[5%] flex flex-col gap-6'>
            <div className="w-full justify-center flex">
                <p className="text-[36px] text-[#1E1E1E] font-bold">SEND A MESSAGE</p>
            </div>
            <form action="" className=''>
                <div className='grid grid-cols-2 gap-8'>
                    <span>
                        <p className='text-[#1E1E1E] lg:text-[24px] font-bold'>NAME</p>
                        <input type="text" className='w-full rounded-lg p-2 outline-none border-black border' name="" id="" />
                        <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>First Name</p>
                    </span>
                    <span>
                        <p className='text-[#1E1E1E] lg:text-[24px] font-bold'>NAME</p>
                        <input type="text" className='w-full rounded-lg p-2 outline-none border-black border' name="" id="" />
                        <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>Last Name</p>
                    </span>
                    <span>
                        <p className='text-[#1E1E1E] lg:text-[24px] font-bold'>EMAIL ADDRESS</p>
                        <input type="email" name="" className='w-full rounded-lg p-2 outline-none border-black border' id="" />
                        <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>example@example.com</p>
                    </span>
                    <span>
                        <p className='text-[#1E1E1E] lg:text-[24px] font-bold'>PHONE NUMBER</p>
                        <input type="text" name="" className='w-full rounded-lg p-2 outline-none border-black border' id="" />
                        <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>Please enter a valid phone number</p>
                    </span>
                </div>
                <span>
                    <p className='text-[#1E1E1E] text-[24px]'>Message</p>
                    <textarea name="" className='w-full rounded-lg p-2 outline-none border-black border' rows={10} id=""></textarea>
                </span>
                <div className='flex w-full justify-end'>
                    <button className='text-[#1E1E1E] font-bold py-2 px-6 bg-[#14BDE3] rounded-2xl'>Send</button>
                </div>
            </form>
        </div>
    )
}

export default Message