import React from "react";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
// import Projects from "./components/projects/projects";
import ProjectsSlider from "./components/projects/ProjectsSlider";
import Contact from "./components/contact/contact";
import Intro from "./components/intro/intro";
import Menu from "./components/navbar/menu";
import "./app.scss";
import {useState} from "react";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="App">
			<Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
			<Menu menuOpen={menuOpen}/>
			<div className="sections">
				<Intro/>
				<ProjectsSlider/>
				<About/>
				<Contact/>
			</div>
		</div>
	);
}

export default App;
