import React, { useState } from "react";
import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import {ProjectsData} from "../../data";
import Projects from "./projects";
import styled from "styled-components";
import "../../style.scss";

const Arrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
background-color: white;
height: 30px;
width: 30px;
position: absolute;
top: 50%;
left: ${props => props.direction === "left" && "60px"};
left: ${props => props.direction === "right" && "calc(100vw - 50px)"};
cursor: pointer;
opacity: .5;
z-index: 2;
`;

const Container = styled.div`
display: flex;
align-items: center;
width: 100vw;
`;

const Slider = styled.div`
display: flex;
transition: all 1s ease-out;
transform: translateX(${props => props.slideIndex * -100}vw);
scroll-snap-type: x mandatory !important;
`;

const ProjectsSlider = () => {

	const [ slideIndex, setSlideIndex ] = useState(0);
	console.log(slideIndex);
	const handleSlide = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : ProjectsData.length - 1);
			console.log(slideIndex);
		} else {
			setSlideIndex(slideIndex < ProjectsData.length - 1 ? slideIndex + 1 : 0);
			console.log(slideIndex);
		}
	};
	return (
	
		// eslint-disable-next-line react/react-in-jsx-scope
		<Container>
			<div className="section-name">
				<div>
				Projects
				</div>
				<div className="stripe"></div>
			</div>
			<Arrow direction="left" onClick={() => handleSlide("left")}>
				<ArrowLeftOutlined/>
			</Arrow>
			<Slider slideIndex={slideIndex}>
				{ProjectsData.map((item) => (
					<Projects item={item} key={item.id}/>
				))}
			</Slider>
			<Arrow direction="right" onClick={() => handleSlide("right")}>
				<ArrowRightOutlined/>
			</Arrow>
		</Container>
	);
};

export default ProjectsSlider;