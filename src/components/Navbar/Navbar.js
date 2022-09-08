import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar w-100 d-none d-md-flex'>
            <ul className='d-flex align-items-center p-3'>
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
    )
}

export default Navbar