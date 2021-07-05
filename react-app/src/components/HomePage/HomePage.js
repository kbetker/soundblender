import React from 'react'
import { Link } from 'react-router-dom'
import "./HomePage.css"
import background from "./background_animation-greyscale-Black_Background.gif"
import logoGif from "./logoAnimationGreen.gif"
import logo from "./homepageLogo.png"
import LogoutButton from "../auth/LogoutButton"
import { useSelector } from 'react-redux'

function HomePage(){
    const user = useSelector(state => state.session.user)
    return(
        <>
        <div className="homepage_wrapper">
            <div>
                <img src={background} className="animated_background" alt="animated background"></img>
                <div className="navBar">
                    <div className="logo-container">
                        <img src={logoGif} className="logoGif" alt="Hompage Logo Animation"></img>
                        <img src={logo} className="logo" alt="Homepage Logo"></img>
                    </div>
                    <div className="home-links-container">
                        {user ?
                        <LogoutButton></LogoutButton>
                        :
                        <>
                            <Link to="/login">Log in</Link>
                            <div className="spacer">|</div>
                            <Link to="/sign-up">Sign Up</Link>
                            <div className="spacer">|</div>
                            <Link to="/">Demo</Link>
                        </>

                    }
                    </div>
                </div>
            </div>
        </div>
       </>
    )
}
export default HomePage
