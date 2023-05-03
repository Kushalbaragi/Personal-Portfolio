import React from "react";
import "../css/header.scss";

function Header(){
    function headerClick(props){
    //    props.target.classList.add('active');
    }
    return(
        <header>
            <nav className="header-container">
                <ul>
                    <li onClick={headerClick}>Home</li>
                    <li onClick={headerClick}>About Me</li>
                    <li onClick={headerClick}>Projects</li>
                    <li onClick={headerClick}>Experience</li>
                    <li onClick={headerClick}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;