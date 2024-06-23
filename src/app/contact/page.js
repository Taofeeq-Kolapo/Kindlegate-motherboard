import ContactHero from '@/components/Contact/ContactHero'
import ContactInfo from '@/components/Contact/ContactInfo'
import Message from '@/components/Contact/Message'
import React from 'react'

const page = () => {
  return (
    <div>
        <ContactHero/>
        <ContactInfo/>
        <Message/>
    </div>
  )
}

export default page