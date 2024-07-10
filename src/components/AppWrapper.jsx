'use client'
import React, { useEffect } from 'react'
//import Navigation from './Reusable/Navigation'
import Nav from '../components/Reusable/Navigation'
import Journey from './Index/Journey'
import Footer from './Index/Footer'
import { usePathname } from 'next/navigation'
import AOS from "aos";
import "aos/dist/aos.css";

const AppWrapper = ({ children }) => {
    const pathname = usePathname()
    useEffect(() => {
        AOS.init({
          easing: "ease-in-out",
          duration: 800,
        });
      }, []);
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