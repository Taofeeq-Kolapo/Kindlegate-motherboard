import Newsbody from '@/components/News/Newsbody'
import NewsHero from '@/components/News/NewsHero'
import UpcomingEvent from '@/components/News/UpcomingEvent'
import React from 'react'

const page = () => {
  return (
    <div>
        <NewsHero/>
        <Newsbody/>
        <UpcomingEvent/>
    </div>
  )
}

export default page