import React from 'react'
import { useState } from 'react'
import './MobileNav.css'

const MobileNav = () => {
    const [menu, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!menu)
    }

    const closeMenu = () => {
        setTimeout(() => {
            setMenu(false)
        }, 300);
    }

    return (
        <div className="mobileNav d-md-none">
            <div className='d-flex justify-content-end align-items-center  '>
                <button className={`hamburger hamburger--spin ${menu === true ? "is-active" : ""} `} type="button" onClick={toggleMenu}>
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div className={`background-gradient ${menu === true ? "d-block" : "d-none"}`}></div>
            <div className={`mobileNavBody d-flex justify-content-center align-items-center ${menu === true ? "is-active" : ""}`}>
                <div className="navs d-flex flex-column text-center">
                    <ul className='navlinks d-block align-items-center p-3'>
                        <a href="#">
                            <li className='mx-4'>Home</li>
                        </a>
                        <a href="#">
                            <li className='mx-4'>Event-timeline</li>
                        </a>
                        <a href="#">
                            <li className='mx-4'>Event cards</li>
                        </a>
                        <a href="#">
                            <li className='mx-4'>Leads</li>
                        </a>
                        <a href="#">
                            <li className='mx-4'>Sponsors</li>
                        </a>
                        <a href="#">
                            <li className='mx-4'>Contacts</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNav