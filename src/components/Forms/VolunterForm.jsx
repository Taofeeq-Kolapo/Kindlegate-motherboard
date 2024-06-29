import React from 'react'

const VolunterForm = () => {
  return (
    <div className='px-[10%] py-4'>
      <p className='text-[30px] font-bold text-black'>VOLUNTEER TO WORK WITH US</p>
      <form className='bg-[#EEEEEE] p-4 px-[6%] rounded-md w-full flex flex-col gap-6'>
        <span className='flex flex-col w-full'>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>NAME</p>
          <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-5'>
            <div className='w-full'>
              <input required className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
              <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>First Name</p>
            </div>
            <div className='w-full'>
              <input required className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
              <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>Last Name</p>
            </div>
          </div>
        </span>
        <div className='flex lg:flex-row flex-col items-center justify-between gap-6'>
          <span className='w-full'>
            <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>EMAIL</p>
            <div className='w-full'>
              <input required className='p-2 rounded-lg outline-none border-black border w-full' type="email" />
              <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>example@example.com</p>
            </div>
          </span>
          <span className='w-full'>
            <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>PHONE NUMBER</p>
            <div className='w-full'>
              <input required className='p-2 rounded-lg outline-none border-black border w-full' type="email" />
              <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>example@example.com</p>
            </div>
          </span>
        </div>
        <span className='w-full'>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>ADDRESS</p>
          <div className='w-full'>
            <input required className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
            <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>Street address</p>
          </div>
        </span>
        <div className='flex lg:flex-row flex-col items-center justify-between gap-6'>
          <div className='w-full'>
            <input required className='p-2 rounded-lg outline-none border-black border w-full' type="email" />
            <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>City</p>
          </div>
          <div className='w-full'>
            <input required className='p-2 rounded-lg outline-none border-black border w-full' type="email" />
            <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>State/Province</p>
          </div>
        </div>
        <div>
          <input required className='p-2 rounded-lg outline-none border-black border w-full' type="email" />
          <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>ZIP Code</p>
        </div>
        <div>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>ADDRESS</p>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>FSLC</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>WAEC</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>OND</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>HND/Bsc</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>Msc</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>PHD</p>
            </span>
          </div>
        </div>
        <div>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>AWARD/RECOGNITION</p>
          <div className='w-full flex justify-between items-center'>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" className='w-[20px] h-[20px]' id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p className='text-[24px] font-bold'>BY WHOM? </p>
              <select className='p-2' name="" id="">
                <option value="">Make a selection</option>
                <option value="">Company</option>
                <option value="">Nigeria Entity</option>
                <option value="">Global Entity</option>
              </select>
              {/* <p className='text-black text-[24px] w-[30px] h-[30px] bg-white font-bold'>YES</p> */}
            </span>
          </div>
        </div>
        <div>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>AWARD/RECOGNITION</p>
          <span className='flex flex-row items-center gap-1'>
            <p>Upload CV:</p>
            <input type="file" name="" id="" />
          </span>
          <span className='flex flex-row items-center gap-1'>
            <p>Upload Passport Photo:</p>
            <input type="file" name="" id="" />
          </span>
        </div>
        <div>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>REFREE</p>
          <div className='flex flex-col gap-2'>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE NAME:</p>
              <input type="text" className='w-[90%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE JOB TITLE:</p>
              <input type="text" className='w-[88%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE COMPANY NAME:</p>
              <input type="text" className='w-[84%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE OFFICIAL EMAIL :</p>
              <input type="text" className='w-[84%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE  ADDRESS:</p>
              <input type="text" className='w-[88%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <button className='bg-[#0A2640] rounded-xl px-10 py-3 text-white font-bold'>Proceed to Attest</button>
        </div>
      </form>
    </div>
  )
}

export default VolunterForm