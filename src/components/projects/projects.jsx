import React from "react";
import styled from "styled-components";
import "./projects.scss";

const Image = styled.div`
    // background: url("https://www.migue.pro/static/images/webprog/network.gif") no-repeat;
    background: url(${props => props.img}) no-repeat;
`;

const Projects = ({item}) => {
	return (
		<div id="Projects" className="section">
			<div className="bg-shape"/>
			<div className="bg-shape back"/>
			<div className="wrapper">
				<div className="section-info">
					<h1>{item.title}</h1>
					<p>{item.desc}</p>
				</div>
				<Image className="section-img" img={item.img}>
				</Image>
			</div>
		</div>
	);
};

export default Projects;