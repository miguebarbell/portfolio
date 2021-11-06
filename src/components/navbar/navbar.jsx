import React from 'react'
import "./navbar.scss"

const Navbar = ({menuOpen, setMenuOpen}) => {
    return (
        <nav className={(menuOpen && "active")}>
            <div className="logo"></div>
            <ul>
                <li><div className={"github " + (menuOpen && "active")}> </div></li>
                <li><div className={"linkedin " + (menuOpen && "active")}> </div></li>
                <li><div className={"email " + (menuOpen && "active")}> </div></li>
            </ul>
            <div id="ham" className="active" onClick={() => setMenuOpen(!menuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar