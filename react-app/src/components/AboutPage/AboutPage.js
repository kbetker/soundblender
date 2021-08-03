import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "../HomePage/HomePage.css"
import "./About.css"
import background from "../HomePage/background_animation-greyscale-Black_Background.gif"
import github from "./githubLogo.png"
import linkedin from "./linkedInLogo.png"

import LogoutButton from "../auth/LogoutButton"
import { useDispatch, useSelector } from 'react-redux'
import dmBackground from "../HomePage/dm.jpg"
import { login } from '../../store/session'

function HomePage(){
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const history = useHistory()

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login('demo@aa.io', 'password'));
        if (data.errors) {
            alert(data.errors);
        } else {
        await history.push(`/users/${data.id}`)
    }
    };

    return(
        <>
        <div className="homepage_wrapper">
            <div>

                <div className="aboutNavBar">
                    <div className="about-container">
                    SoundBlender is a customizable soundboard where users can create audio environments to enhance roleplaying games, murder mysteries, or any other type of interactive story telling. Be sure to check out my GitHub link below for more information on this site, or LinkedIn for more information about me!
                    </div>
                    <div className="imageContainer">
                        <a href="https://github.com/kbetker/soundblender" rel="noopener noreferrer" target="_blank"><img src={github} className="linkedImages" alt="GitHub Logo"></img></a>
                        <a href="https://www.linkedin.com/in/kevin-betker-878505128/" rel="noopener noreferrer" target="_blank"><img src={linkedin} className="linkedImages" alt="LinkedIn Logo"></img></a>
                    </div>
                    <div className="about-links-container">
                        {user ?
                        <LogoutButton></LogoutButton>
                        :
                        <>
                            <Link to="/login" className="homeLinks">Log in</Link>
                            <div className="spacer">|</div>
                            <Link to="/sign-up"  className="homeLinks">Sign Up</Link>
                            <div className="spacer">|</div>
                            <div onClick={onLogin} className="demoHomeLink">Demo</div>
                            <div className="spacer">|</div>
                            <div onClick={()=> history.push('/')} className="demoHomeLink">Home</div>
                        </>

                    }
                    </div>
                </div>
                <img src={dmBackground} className="dmbackground" alt="dungeon master guide" draggable={false}></img>
                <img src={background} className="animated_background" alt="animated background" draggable={false}></img>
            </div>
        </div>
       </>
    )
}
export default HomePage
