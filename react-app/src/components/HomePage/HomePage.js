import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import "./HomePage.css"
import background from "./background_animation-greyscale-Black_Background.gif"
import logoGif from "./logoAnimationGreen.gif"
import logo from "./homepageLogo.png"
import LogoutButton from "../auth/LogoutButton"
import { useDispatch, useSelector } from 'react-redux'
import dmBackground from "./dm.jpg"
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

                <div className="navBar">
                    <div className="logo-container">
                        <img src={logoGif} className="logoGif" alt="Hompage Logo Animation" draggable={false}></img>
                        <img src={logo} className="logo" alt="Homepage Logo" draggable={false}></img>
                    </div>
                    <div className="home-links-container">
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
                            <div onClick={()=>history.push(`/about`)} className="demoHomeLink">About</div>
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
