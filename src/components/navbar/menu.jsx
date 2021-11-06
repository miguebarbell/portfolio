import React from 'react'
import "./menu.scss"

const Menu = ({menuOpen}) => {
    return (
        <div id="Menu" className={(menuOpen && "active")}>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Menu