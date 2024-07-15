'use client'
import React, { useState } from 'react'

const VolunterForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [state, setState] = useState("")
  const [zip, setZip] = useState("")
  const [primary, setPrimary] = useState("")
  const [waec, setWaec] = useState("")
  const [nd, setNd] = useState("")
  const [hnd, setHnd] = useState("")
  const [bsc, setBsc] = useState("")
  const [msc, setMsc] = useState("")
  const [phd, setPhd] = useState("")
  const [yes, setYes] = useState("")
  const [selection, setSelection] = useState("")
  const [cv, setCv] = useState("")
  const [passport, setPassport] = useState("")
  const [refName, setrefName] = useState("")
  const [reftitle, setreftitle] = useState("")
  const [refcompanyname, setrefcompanyname] = useState("")
  const [refemail, setrefemail] = useState("")
  const [refaddress, setrefaddress] = useState("")

  const formData = new FormData();
  formData.append('firstName', firstName);
  formData.append('lastName', lastName);
  formData.append('email', email);
  formData.append('number', number);
  formData.append('address', address);
  formData.append('city', city);
  formData.append('state', state);
  formData.append('zip', zip);
  formData.append('primary', primary);
  formData.append('waec', waec);
  formData.append('nd', nd);
  formData.append('hnd', hnd);
  formData.append('bsc', bsc);
  formData.append('msc', msc);
  formData.append('phd', phd);
  formData.append('yes', yes);
  formData.append('selection', selection);
  formData.append('cv', cv);
  formData.append('passport', passport);
  formData.append('refName', refName);
  formData.append('refTitle', reftitle);
  formData.append('refCompanyName', refcompanyname);
  formData.append('refEmail', refemail);
  formData.append('refAddress', refaddress);
  
  const HandleSubmitform = (e) => {
    e.preventDefault();
    alert("form Submitted successfully")
    localStorage.setItem("VolunteerForm", formData)
    
  }

  return (
    <div className='px-[10%] py-6 flex flex-col gap-3'>
      <p className='text-[30px] font-bold text-black'>VOLUNTEER TO WORK WITH US</p>
      <form className='bg-[#EEEEEE] p-4 px-[6%] rounded-md w-full flex flex-col gap-6'>
        <span className='flex flex-col w-full'>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>NAME</p>
          <div className='flex lg:flex-row flex-col w-full justify-between items-center gap-5'>
            <div className='w-full'>
              <input required value={firstName} onChange={(e) => setFirstName(e.target.value)} className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
              <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>First Name</p>
            </div>
            <div className='w-full'>
              <input required value={lastName} onChange={(e) => setLastName(e.target.value)} className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
              <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>Last Name</p>
            </div>
          </div>
        </span>
        <div className='flex lg:flex-row flex-col items-center justify-between gap-6'>
          <span className='w-full'>
            <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>EMAIL</p>
            <div className='w-full'>
              <input required value={email} onChange={(e) => setEmail(e.target.value)} className='p-2 rounded-lg outline-none border-black border w-full' type="email" />
              <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>example@example.com</p>
            </div>
          </span>
          <span className='w-full'>
            <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>PHONE NUMBER</p>
            <div className='w-full'>
              <input required value={number} onChange={(e) => setNumber(e.target.value)} className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
              <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>+2348676876</p>
            </div>
          </span>
        </div>
        <span className='w-full'>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>ADDRESS</p>
          <div className='w-full'>
            <input required value={address} onChange={(e) => setAddress(e.target.value)} className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
            <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>Street address</p>
          </div>
        </span>
        <div className='flex lg:flex-row flex-col items-center justify-between gap-6'>
          <div className='w-full'>
            <input required value={city} onChange={(e) => setCity(e.target.value)} className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
            <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>City</p>
          </div>
          <div className='w-full'>
            <input value={state} onChange={(e) => setState(e.target.value)} required className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
            <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>State/Province</p>
          </div>
        </div>
        <div>
          <input required value={zip} onChange={(e) => setZip(e.target.value)} className='p-2 rounded-lg outline-none border-black border w-full' type="text" />
          <p className='text-[#5F5F5F] lg:text-[20px] text-[12px]'>ZIP Code</p>
        </div>
        <div>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>ADDRESS</p>
          <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5'>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" onChange={(e) => setPrimary(e.target.value)} value={"FSLC"} className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>FSLC</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" onChange={(e) => setWaec(e.target.value)} value={"WAEC"} className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>WAEC</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" onChange={(e) => setNd(e.target.value)} value={"OND"} className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>OND</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" onChange={(e) => setHnd(e.target.value)} value={"HND/Bsc"} className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>HND/Bsc</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" onChange={(e) => setMsc(e.target.value)} value={"Msc"} className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>Msc</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" value={"PHD"} onChange={(e) => setPhd(e.target.value)} className='w-[20px] h-[20px]' id="" />
              <p className='text-black text-[24px] font-bold'>PHD</p>
            </span>
          </div>
        </div>
        <div>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>AWARD/RECOGNITION</p>
          <div className='w-full flex justify-between items-center'>
            <span className='flex flex-row items-center gap-1'>
              <input type="checkbox" name="" value={yes} onChange={(e) => setYes(e.target.value)} className='w-[20px] h-[20px]' id="" />
              <p className='font-bold text-[24px]'>YES</p>
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p className='text-[24px] font-bold'>BY WHOM? </p>
              <select onChange={(e) => setSelection(e.target.value)} className='p-2' name="" id="">
                <option value="">Make a selection</option>
                <option value="Company">Company</option>
                <option value="Nigeria Entity">Nigeria Entity</option>
                <option value="Global Entity">Global Entity</option>
              </select>
              {/* <p className='text-black text-[24px] w-[30px] h-[30px] bg-white font-bold'>YES</p> */}
            </span>
          </div>
        </div>
        <div>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>AWARD/RECOGNITION</p>
          <span className='flex flex-row items-center gap-1'>
            <p>Upload CV:</p>
            <input type="file" value={cv} onChange={(e) => setCv(e.target.files[0])} name="" id="" />
          </span>
          <span className='flex flex-row items-center gap-1'>
            <p>Upload Passport Photo:</p>
            <input type="file" value={passport} onChange={(e) => setPassport(e.target.files[0])} name="" id="" />
          </span>
        </div>
        <div>
          <p className='text-[#1E1E1E] lg:text-[30px] text-[20px] font-bold'>REFREE</p>
          <div className='flex flex-col gap-2'>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE NAME:</p>
              <input required type="text" value={refName} onChange={(e) => setrefName(e.target.value)} className='w-[90%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE JOB TITLE:</p>
              <input required type="text" value={reftitle} onChange={(e) =>setreftitle(e.target.value)} className='w-[88%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE COMPANY NAME:</p>
              <input required type="text" value={refcompanyname} onChange={(e) => setrefcompanyname(e.target.value)} className='w-[84%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE OFFICIAL EMAIL :</p>
              <input required type="text" value={refemail} onChange={(e) => setrefemail(e.target.value)} className='w-[84%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
            <span className='flex flex-row items-center gap-1'>
              <p>REFREE  ADDRESS:</p>
              <input required type="text" value={refaddress} onChange={(e) => setrefaddress(e.target.value)} className='w-[88%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
            </span>
          </div>
        </div>
        <div className='w-full flex justify-center'>
          <button onClick={HandleSubmitform} className='bg-[#0A2640] rounded-[56px] px-10 py-3 text-white font-bold'>Proceed to Attest</button>
        </div>
      </form>
    </div>
  )
}

export default VolunterForm