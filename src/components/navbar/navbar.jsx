import React from "react";
import "./navbar.scss";

const Navbar = ({menuOpen, setMenuOpen}) => {
	return (
		<nav className={(menuOpen && "active")}>
			<a href="https://www.migue.pro"><div className="logo"></div></a>
			<ul>
				<a target="_black" href="https://www.github.com/miguebarbell"><li><div className={"github " + (menuOpen && "active")}> </div></li></a>
				<a target="_black" href="https://www.linkedin.com/in/rmigue"><li><div className={"linkedin " + (menuOpen && "active")}> </div></li></a>
				<a target="_black" href="mailto:contact@migue.pro"><li><div className={"email " + (menuOpen && "active")}> </div></li></a>
			</ul>
			<div id="ham" className="active" onClick={() => setMenuOpen(!menuOpen)}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</nav>
	);
};

export default Navbar;