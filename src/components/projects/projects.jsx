import React, {useState} from 'react'
import styled from 'styled-components'
import "./projects.scss"

const Projects = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    return (
        <div id="Projects"  className='section'>
            <div className="bg-shape"/>
            <div className="bg-shape back"/>
            <div className="wrapper">
            <div className="section-info">
                <h1>Network - Social Media</h1>
                <p>This is a project that imitate the main functionality of twitter.</p>
            </div>
            <div className="section-img">
            </div>
            </div>
        </div>
    )
}

export default Projects