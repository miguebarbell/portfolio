import React, {useState} from 'react'
import styled from 'styled-components'
import "./projects.scss"

const Projects = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    return (
        <div id="Projects"  className='section'>
            <div className="bg-shape"/>
            <div className="bg-shape back"/>
            <div className="section-info">
                <h1>Title of the project</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis enim possimus saepe. A at commodi cumque dolores earum enim eum hic minus natus repellendus! Debitis eos maiores quis ratione!</p>
            </div>
            <div className="section-img">
            </div>
        </div>
    )
}

export default Projects