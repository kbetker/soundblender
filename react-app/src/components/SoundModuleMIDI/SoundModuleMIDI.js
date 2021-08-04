// import logo from '../SoundModule/images/logo.svg';
import './SoundModule.css';
import "../SoundModule/SoundModule.css"
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import sliderBackground from "../SoundModule/images/sliderBackground.png"
import slider_GreyMiddle from "../SoundModule/images/slider_GreyMiddle.png"
import redLightOn_img from "../SoundModule/images/redLightOn2.png"
import redLightOff from "../SoundModule/images/redLightOff.png"
import btnPlaying_img from "../SoundModule/images/PlayBtn.png"
import btnStopping_img from "../SoundModule/images/Both_btn.png"
import btnStopped_img from "../SoundModule/images/Stop_Btn.png"
import gear from '../UserPage/Gear.png'

import { setModalState } from '../../store/modal';
import { removeStopLight } from '../../store/stopAllLights';
import { midiControl } from '../../store/midiKeyPress';

function SoundModuleMIDI({ mySoundObj, color, currentscene, categoryId }) {
    const mySound = useRef();
    const playBtn = useRef()
    const stopBtn = useRef();
    const knob = useRef(0)
    const knobPOS = useRef(0)
    const leftMarker = useRef()
    const soundVolume = useRef(0)
    const dispatch = useDispatch()
    const [btnPlaying, setBtnPlaying] = useState(false)
    const [btnStopping, setBtnStopping] = useState(false)
    const [btnStopped, setBtnStopped] = useState(true)
    const isPlaying = useRef(false)
    const [redLightOn, setRedLightOn] = useState(false)
    const [stopKeyPress, setStopKeyPress] = useState('')
    const [keyPress, setKeyPress] = useState('')

    const fadeInToTarget = useRef('')

    const editMode = useSelector(state => state.editMode.editMode)
    const qsButton = useSelector(state => state.qsButton.qsButton)
    const midiState = useSelector(state => state.midiState)


    const setModalFunc = async (modalState) => {
        await dispatch(setModalState(modalState))
    }

    function setVolume() {
        soundVolume.current = knobPOS.current
        let vol = soundVolume.current
        if (vol <= 0) vol = 0;
        if (vol >= 100) vol = 100;
        mySound.current.volume = Math.round(vol) * .01;
    }

    let gearBtn;
    let homeBtn;
    let logoutBtn;
    let stopAllBtn;

    useEffect(() => {
        gearBtn = document.querySelector('.gears')
        homeBtn = document.querySelector('.logOut')
        logoutBtn = document.querySelector('.goHome')
        stopAllBtn = document.querySelector(".quickSceneComponent")

    })



    useEffect(() => {
        if (midiState[0] === mySoundObj.play_stop_button && midiState[1] === 127 && isPlaying.current === false) {
            dispatch(midiControl(0))
            mySound.current.loop = mySoundObj.is_looped;
            mySound.current.play()
            mySound.current.volume = 0
            setRedLightOn(true)
            setBtnStopped(false)
            setBtnPlaying(true)
            isPlaying.current = true
            console.log(midiState, "PLAY")
        } else if (midiState[0] === mySoundObj.play_stop_button && midiState[1] === 127 && isPlaying.current === true) {
            dispatch(midiControl(0))
            setRedLightOn(false)
            setBtnPlaying(false)
            setBtnStopped(true)
            setBtnStopping(false)
            mySound.current.pause()
            mySound.current.currentTime = 0;
            isPlaying.current = false
            console.log(midiState, "STOP")
            dispatch(removeStopLight(mySoundObj.id))
        }
    })


    useEffect(() => {
        if (midiState[0] === mySoundObj.volume_control) {
            knobPOS.current = (midiState[1])
            knob.current.style.left = `${knobPOS.current * 0.61}%`;
            setVolume()
        }
    })


    return (
        <>
            <div className="soundModule_wrapper" style={{ border: `1px solid ${color}`, order: `${mySoundObj.arrangement}` }}>
                {/* <div className="soundModule_wrapper" style={{ border: `1px solid grey` }}> */}
                <div className="title">
                    <div className="midiTitle">
                        <div>MIDI</div>
                        <div>{mySoundObj.name}</div>
                    </div>

                    {editMode &&
                        <div onClick={() => setModalFunc(`${mySoundObj.id}-${categoryId}-categorySound`)} style={{ display: 'inline-block' }}>
                            <img src={gear} className="soundEditGear" draggable="false" alt=""></img>
                        </div>
                    }
                </div>
                <div className="slider_and_controls">
                    <div className="slider__container" style={{ backgroundImage: `url(${sliderBackground})` }}>
                        <div ref={leftMarker}></div>
                        <div id={`knob_line--container-${mySoundObj.id}`} className="knob_line--container">
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
                <audio ref={mySound} src={mySoundObj.sound_url} type="audio/mpeg"></audio>
            </div>
        </>
    );
}

export default SoundModuleMIDI;
