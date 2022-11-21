import React from 'react';
import NavButton from './navbutton';
import './navbar.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <flex id="links">
                <NavButton name="home" link="#top" />
                <NavButton name="projects" link="#projects-title" />
                <NavButton name="contact" link="#contact-title" />
            </flex>
        </div>
    );
}

export default Navbar;