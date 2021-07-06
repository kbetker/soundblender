// import logo from './images/logo.svg';
import './SoundModule.css';
import React, { useEffect, useRef, useState } from "react";
import sliderBackground from "./images/sliderBackground.png"
import slider_GreyMiddle from "./images/slider_GreyMiddle.png"
import redLightOn_img from "./images/redLightOn2.png"
import redLightOff from "./images/redLightOff.png"

import btnPlaying_img from "./images/PlayBtn.png"
import btnStopping_img from "./images/Both_btn.png"
import btnStopped_img from "./images/Stop_Btn.png"
import { useSelector } from 'react-redux';

import gear from '../UserPage/Gear.png'
// import button_press2 from "./images/button_press2.png"
// import button_press from "./images/button_press.png"
// import Button_Off from "./images/Button_Off.png"




function SoundModule({mySoundObj, color, currentscene}) {
    const soundObj = mySoundObj
    const mySound = useRef();
    const playBtn = useRef()
    const stopBtn = useRef();

    const knob = useRef(0)
    const knobPOS = useRef(0)
    const leftMarker = useRef()
    const soundVolume = useRef(0)

    const [btnPlaying, setBtnPlaying] = useState(false)
    const [btnStopping, setBtnStopping] = useState(false)
    const [btnStopped, setBtnStopped] = useState(true)
    const isPlaying = useRef(false)

    const [redLightOn, setRedLightOn] = useState(false)

    const editMode = useSelector(state => state.editMode.editMode)

    function setVolume() {
        soundVolume.current = knobPOS.current
        // console.log(knobPOS.current)
        let vol = soundVolume.current
        if (vol <= 0) vol = 0;
        if (vol >= 100) vol = 100;
        mySound.current.volume = Math.round(vol) * .01;
    }



    useEffect(()=>{
    function fadeIn() {
        if(isPlaying.current) return;
        if (knobPOS.current < 0) knobPOS.current = 0; // helps some glitchy animation
        if (knobPOS.current > 98) knobPOS.current = 98;
        setRedLightOn(true)
        setBtnStopped(false)
        setBtnPlaying(true)
        isPlaying.current =true

        if(!soundObj.is_looped){
            mySound.current.addEventListener('ended', (event) => {
                fadeOut();
              })}

        let fadeInToTarget = setInterval(() => {
            knobPOS.current = knobPOS.current + (soundObj.fade_speed * 0.01)
            // console.log(knobPOS.current, "WTFWTFWTFWTFWTFWTFWTFWTFWTFWTFWFTWTFWTFWTFWTFWTFWTFWTFWT")
            knob.current.style.left = `${knobPOS.current * 0.8}%`;
            setVolume()
            if (knobPOS.current >= soundObj.target_volume * 100 || knobPOS.current >= 98) {
                clearInterval(fadeInToTarget)
            }
        }, 10)

        knob.current.addEventListener("mousedown", (e) => { // stops fading if you click on knob
            clearInterval(fadeInToTarget)
        })

        if (stopBtn.current) {
            stopBtn.current.addEventListener("click", (e) => {
                clearInterval(fadeInToTarget)
            })
        }
    }



    function fadeOut() {
        if(btnStopping) return;
        if (knobPOS.current < 0) knobPOS.current = 0; // helps some glitchy animation
        if (knobPOS.current > 98) knobPOS.current = 98;
        setBtnStopping(true)
        setBtnPlaying(false)
        let fadeOutToZero = setInterval(() => {
            knobPOS.current = knobPOS.current - (soundObj.fade_speed * 0.01)
            knob.current.style.left = `${knobPOS.current * 0.8}%`;
            setVolume()
            if (knobPOS.current <= 0) {
                clearInterval(fadeOutToZero)
                setRedLightOn(false)
                setBtnPlaying(false)
                setBtnStopped(true)
                setBtnStopping(false)
                mySound.current.pause()
                mySound.current.currentTime= 0;
                isPlaying.current = false
            }
        }, 10)

        knob.current.addEventListener("mousedown", (e) => { // stops fading if you click on knob
            if(!isPlaying.current) {
                return;
            } else {
            clearInterval(fadeOutToZero)
            setBtnStopping(false)
            setBtnPlaying(true)
        }
        })
    }


        if (playBtn.current) {
            playBtn.current.addEventListener("click", (e) => {
                fadeIn();
                mySound.current.play()
                mySound.current.loop = soundObj.is_looped;
            })
        }

        if (stopBtn.current) {
            stopBtn.current.addEventListener("click", (e) => {
                fadeOut();
            })
        }
    })


    // console.log(currentscene)
    function addToClientX(){
        let sum =0
        for(let i = 1; i < parseInt(currentscene.current); i++){
            sum = sum + window.innerWidth - 80
        }
        return sum
    }

    useEffect(() => {
        let leftMarkerPos = leftMarker?.current?.getBoundingClientRect().left
        dragKnob(knob.current);
        // let curr_scene = parseInt(currentscene)
        function dragKnob(theKnob) {
            let xDiff = 0, Xold = 0;
            function mouseDown(e) {
                e.preventDefault();
                Xold = (e.clientX + addToClientX());
                document.onmouseup = stopDrag;
                document.onmousemove = knobIsDragging;
            }

            function knobIsDragging(e) {
                e.preventDefault();
                xDiff = Xold - (e.clientX + addToClientX());
                // console.log(e.clientX, addToClientX(), "WTFWTFWTFWTFWFT")
                Xold = (e.clientX + addToClientX());
                knobPOS.current = (knob.current.getBoundingClientRect().left - leftMarkerPos + addToClientX()) / 2
                // console.log(knob.current.getBoundingClientRect().left - leftMarkerPos + addToClientX())
                setVolume()
                if ((e.clientX + addToClientX()) <= 20 + leftMarkerPos) {
                    stopDrag()
                    theKnob.style.left = `-2px`;
                }
                else if ((e.clientX + addToClientX()) > 260 + leftMarkerPos) {
                    stopDrag()
                    theKnob.style.left = `197px`;
                }
                else {
                    theKnob.style.left = (theKnob.offsetLeft - xDiff) + "px";
                }
            }

            function stopDrag() {
                document.onmouseup = null; // stop moving when mouse button is released:
                document.onmousemove = null;
            }
            theKnob.onmousedown = mouseDown;
        }
    }, [])







    return (
        <>
            <div className="soundModule_wrapper" style={{ border: `1px solid ${color}` }}>
                <div className="title">
                    {soundObj.name}
                    {editMode && <img src={gear} className="soundEditGear" draggable="false" alt=""></img>}
                </div>
                <div className="slider_and_controls">
                    <div className="slider__container" style={{ backgroundImage: `url(${sliderBackground})` }}>
                        <div ref={leftMarker}></div>
                        <div id={`knob_line--container-${soundObj.id}`} className="knob_line--container">
                            <div ref={knob} className="slider__knob" draggable="true" style={{ backgroundImage: `url(${slider_GreyMiddle})` }}>
                                <div className="knob_color" style={{ backgroundColor: `${color}` }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="playStopBtns">
                        <div className="play">
                            {btnPlaying && <img src={btnPlaying_img} ref={stopBtn} draggable="false" alt="Playing Button"></img>}
                            {btnStopping && <img src={btnStopping_img} draggable="false" alt="Sound Stopping"></img>}
                            {btnStopped && <img src={btnStopped_img} ref={playBtn} draggable="false" alt="Sound Stopped"></img>}
                        </div>
                        <div className="redLight">
                            <img src={redLightOff} className="redLightOff" draggable="false" alt="Red Light Off"></img>
                            {redLightOn && <img src={redLightOn_img} className="redLightOn" draggable="false" alt="Red Light On"></img>}
                        </div>
                    </div>
                </div>
                <audio ref={mySound} src={soundObj.sound_url} type="audio/mpeg"></audio>
            </div>
        </>
    );
}

export default SoundModule;
