'use client'
import React, { useState } from 'react'

const Attestation = () => {
    const [applicant, setApplicant] = useState("")
    return (
        <div className='px-[10%] py-6 flex flex-col gap-3'>
            <p className='text-[30px] font-bold text-black'>KINDLEGATE  FONDATION APPLICANT ATTESTATION</p>
            <form className='bg-[#EEEEEE] p-4 px-[10%] rounded-md w-full flex flex-col gap-6 text-[24px]'>
                <p className='text-[24px] font-bold'>On behalf of the organization mentioned above</p>
                <div className='flex flex-col gap-5 text-justify'>
                    <p>I agree with the Terms and Conditions of Membership.</p>
                    <p>
                        I hereby apply for membership of the Kindlegate Foundation. I understand that the membership will be based on the information provided in my Application form at the date of submission and that I will be asked to provide additional additional information to support my education, professional certification (if any), and experience.
                    </p>
                    <p>I have never been convicted of Felony.</p>
                    <p>I attest the information provided is true and accurate.</p>
                    <p>I understand and agree this information may be audited by the Kindlegate Foundation Strategy and Membership Committee to ensure its accuracy, and that failing to provide accurate information may result in the loss of membership.</p>
                    <p>If admitted as a member, I agree to be governed by and to comply with the Code of Ethics of the Organization.</p>
                    <p>I understand that I must renew my membership annually and be a member in a good standing in order to retain my Membership.</p>
                    <p>I understand that Membership category awarded will be revoked for failure to renew Membership and that I cannot hold myself out as a member if I am not an active member in good standing.</p>
                    <p>Having read through this, I hereby accept the obligation to observe the regulations of the Organization as set out in it’s Memorandum and Article of Association, this Membership form and any determination of the Governing Council.</p>
                </div>
                <div>
                    <div className='flex flex-col gap-2'>
                        <span className='flex flex-row items-center gap-1'>
                            <p>Applicant Signature:</p>
                            <input required type="text"
                                value={applicant}
                                onChange={(e) => setApplicant(e.target.value)} className='w-[80%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
                        </span>
                        <div className='w-full grid grid-cols-3 gap-2'>
                            <span className='flex flex-row items-center gap-1'>
                                <p>Date:</p>
                                <input required type="text" className='w-[80%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
                            </span>
                            <span className='flex flex-row items-center gap-1'>
                                <p>Day of</p>
                                <input required type="text" className='w-[60%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
                            </span>
                            <span className='flex flex-row items-center gap-1'>
                                <p>202</p>
                                <input required type="text" className='w-[84%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
                            </span>
                        </div>
                        <span className='flex flex-row items-center gap-1'>
                            <p>Witness Signature:</p>
                            <input required type="text" className='w-[82%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
                        </span>
                        <div className='w-full grid grid-cols-3 gap-2'>
                            <span className='flex flex-row items-center gap-1'>
                                <p>Date:</p>
                                <input required type="text" className='w-[80%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
                            </span>
                            <span className='flex flex-row items-center gap-1'>
                                <p>Day of</p>
                                <input required type="text" className='w-[60%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
                            </span>
                            <span className='flex flex-row items-center gap-1'>
                                <p>202</p>
                                <input required type="text" className='w-[84%] outline-none border-b-2 border-black bg-transparent' name="" id="" />
                            </span>
                        </div>
                        <span className='flex flex-row items-center gap-1'>
                            <input type="checkbox" name="" id="" />
                            <p>I hereby <span className='font-bold'>Attest</span> to the above information </p>
                        </span>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <button
                        // onClick={HandleSubmitform}
                        className='bg-[#0A2640] rounded-[56px] px-10 py-3 text-white font-bold'>Proceed to Attest</button>
                </div>
            </form>

        </div>
    )
}

export default Attestation