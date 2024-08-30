'use client'
import React, { useEffect } from 'react'
//import Navigation from './Reusable/Navigation'
import Nav from '../components/Reusable/Navigation'
import Journey from './Index/Journey'
import Footer from './Index/Footer'
import { usePathname } from 'next/navigation'
import AOS from "aos";
import "aos/dist/aos.css";
import i18n from '../../src/components/Reusable/i18n'
import { useTranslation } from 'react-i18next'
import Subscribe from './Subscribe'

const AppWrapper = ({ children }) => {
    const pathname = usePathname()
    useEffect(() => {
        AOS.init({
            easing: "ease-in-out",
            duration: 800,
        });
    }, []);

    const {t} = useTranslation()



    return (
        <div>
            {
                pathname === "/vform" ? ("")
                    : pathname === "/mentorform" ? ("")
                        : pathname === "/partnerform" ? ("")
                            : pathname === "/sponsorform" ? ("")
                                : pathname === "/attestation" ? ("")
                                    :
                                    <Nav />
            }
            {children}
            {
                pathname === "/vform" ? ("")
                    : pathname === "/mentorform" ? ("")
                        : pathname === "/partnerform" ? ("")
                            : pathname === "/sponsorform" ? ("")
                                : pathname === "/attestation" ? ("")
                                    : <Journey />
            }
            {/* {
                pathname === "/vform" ? ("")
                    : pathname === "/mentorform" ? ("")
                        : pathname === "/partnerform" ? ("")
                            : pathname === "/sponsorform" ? ("")
                                : pathname === "/attestation" ? ("")
                                    : <Subscribe />
            } */}
            {
                pathname === "/" ? (<Subscribe />)
                    : ("")
                          
            }
            {
                pathname === "/vform" ? ("")
                    : pathname === "/mentorform" ? ("")
                        : pathname === "/partnerform" ? ("")
                            : pathname === "/sponsorform" ? ("")
                                : pathname === "/attestation" ? ("")
                                    : <Footer />
            }
        </div>
    )
}

export default AppWrapper