import React from 'react'
import { Link } from 'react-router-dom'
import "./HomePage.css"
import background from "./background_animation-greyscale-Black_Background.gif"
import logoGif from "./background_animation.gif"

function HomePage(){
    return(
        <>wat?
        <div className="homepage_wrapper">
            <div >
                <img src={background} className="animated_background"></img>
                <div className="navBar">
                    <div className="logo">Logo</div>
                    <div className="links">
                        <Link to="/">Log in</Link>
                        <div className="spacer">|</div>
                        <Link to="/">Sign Up</Link>
                        <div className="spacer">|</div>
                        <Link to="/">Demo</Link>
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
export default HomePage
