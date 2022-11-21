import React from 'react';
import './navbutton.css';

const NavButton = (props) => {
    return (
        <div className="nav-button">
            <a href={props.link} >{props.name}</a>
        </div>
    );
}

export default NavButton;