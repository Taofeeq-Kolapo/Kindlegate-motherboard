'use client'
import React from 'react'
//import Navigation from './Reusable/Navigation'
import Nav from '../components/Reusable/Navigation'
import Journey from './Index/Journey'
import Footer from './Index/Footer'

const AppWrapper = ({children}) => {
    return (
        <div>
            <Nav />
            {children}
            <Journey/>
            <Footer/>
        </div>
    )
}

export default AppWrapper