import React, { useState } from "react";
import {ProjectsData} from "../../data";
import Projects from "./projects";
import styled from "styled-components";
import "../../style.scss";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
`;

const ProjectsSlider = () => {

	// const [ slideIndex, setSlideIndex ] = useState(0);

	return (
	
		// eslint-disable-next-line react/react-in-jsx-scope
		<Container>
			<div className="section-name">
				<div>
				Projects
				</div>
				<div className="stripe"></div>
			</div>
			{ProjectsData.map((item) => (
				<Projects item={item} key={item.id}/>
			))}
		</Container>
	);
};

export default ProjectsSlider;