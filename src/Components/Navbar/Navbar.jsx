import React, { useEffect, useState } from 'react'
import './Navbar.css'
import LOGO from '../../assets/logo/logo_bg_remove.png'
import menu_icon from '../../assets/menu_icon.png'

const Navbar = () => {

    const [sticky, setsticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setsticky(true) : setsticky(false);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)

    }

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={LOGO} alt="small spark" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li> HOME  </li>
                <li> TECHNOLOGIES <i class="fa fa-caret-down" aria-hidden="true" style={{ marginLeft: '8px' }}></i> </li>
                <li> NEWS </li>
                <li> RECOGNITION </li>
                <li> PARTNERS </li>
                <li> CONTACT US </li>
            </ul>
            <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar