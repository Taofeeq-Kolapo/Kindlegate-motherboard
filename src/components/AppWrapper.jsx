'use client'
import React from 'react'
//import Navigation from './Reusable/Navigation'
import Nav from '../components/Reusable/Navigation'
import Journey from './Index/Journey'
import Footer from './Index/Footer'
import { usePathname } from 'next/navigation'

const AppWrapper = ({ children }) => {
    const pathname = usePathname()
    return (
        <div>
            {
                pathname === "/vform" ? ("")
                    : pathname === "/mentorform" ? ("")
                        :
                        <Nav />
            }
            {children}
            <Journey />
            <Footer />
        </div>
    )
}

export default AppWrapper