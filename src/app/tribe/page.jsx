'use client'
import dynamic from 'next/dynamic'
// import Tribe from '@/components/Tribes/Tribe'
const DynamicTribe = dynamic(() => import('@/components/Tribes/Tribe'), {
  ssr: false,
})
import React from 'react'

const page = () => {
  return (
    <div>
        {/* <TribeHome/>
        <Teams/> */}
        <DynamicTribe/>
    </div>
  )
}

export default page