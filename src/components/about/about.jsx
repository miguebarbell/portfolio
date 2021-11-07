import React from 'react'
import "./about.scss"

const About = () => {
    return (
        <div className="section" id="About">
            <div className="section-name">
                <div>
                    About
                </div>
                <div className="stripe"> </div>
            </div>
            <div className="about-container">
                <h1>Hi there!</h1>
                <h2>I'm Miguel</h2>
                <h3>and I make Web Applications</h3>
                <p>Software Developer with with a solid background as military officer.</p>
            </div>
        </div>
    )
}

export default About