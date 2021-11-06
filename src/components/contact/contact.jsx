import React from 'react'
import "./contact.scss"
import { useRef, useEffect } from "react";
import { init } from "ityped"

const Contact = () => {
    const project = useRef();
    useEffect(() => {
        init(project.current, {
            backSpeed: 70,
            backDelay: 1500,
            showCursor: true,
            strings: ['project', 'store', 'design', 'problem', 'webpage', 'blog']
        })
    })
    return (
        <div className="section" id="Contact">
            <div className="section-name">
                <div>
                    Contact
                </div>
                <div className="stripe"> </div>
            </div>
            <div className="title">We can solve your <span ref={project}> </span></div>
            <form className="form" action="https://apimessages.herokuapp.com/smessage/" method="post">
                <input type="text" name="name" placeholder="Name or Email" required />
                <textarea rows="6" name="feedback" placeholder="What do you have in mind..." required/>
                <button type="submit">Send</button>
            </form>
            <div className="external">
                <ul>
                    <li>You can see the source code in my github repositories.</li>
                    <li>Connect and chat with my by LinkedIn.</li>
                    <li>Send a custom message by email.</li>
                </ul>
            </div>
        </div>
    )
}

export default Contact