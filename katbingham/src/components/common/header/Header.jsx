import React from 'react'
import "./Header.css"
import Navbar from '../navbar/Navbar'

export default function Header () {

    return(
        <>
        <div className='wrapper'>
            <div className='header'>
                <div className='header-top'>
                    <div className='header-top-navbar'>
                        <Navbar/>
                    </div>
                </div>
                <hr color="#121621"/>
                <div className='header-bottom'>
                    <div className='header-bottom-logo'>
                        <a href="/" className='header-logo'>Kat Bingham</a>
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}