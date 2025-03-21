import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { addSound } from "../../store/sound"
import "./Sound.css"
import loading from "./loader.png"
import { setModalState } from "../../store/modal"

function SoundForm() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const midiState = useSelector(state => state.midiState)
    const [errorsBackend, setErrorsBackend] = useState([]);
    const [errorsFrontEnd, setErrorsFrontEnd] = useState([]);
    const [showErrs, setShowErrs] = useState(false)


    const [soundLoading, setSoundLoading] = useState(false);
    const [sound_url, setSound_url] = useState(null);
    const [name, setName] = useState('');
    const [target_volume, setTarget_volume] = useState(10);
    const [fade_speed, setFade_speed] = useState(1);
    const [arrangement, setArrangement] = useState(0);
    const [is_looped, setIs_looped] = useState(true);
    const [is_midi, setIs_midi] = useState(false)
    const [play_stop_button, setPlay_stop_button] = useState(0)
    const [volume_control, setVolume_control] = useState(0)

    const [currentMidiInput, setCurrentMidiInput] = useState('0')

    useEffect(() => {
        if (midiState[1] > 0 && !undefined) {
            setCurrentMidiInput(`${midiState[0]}`)
        }
    }, [midiState])



    useEffect(() => {
        let theForm = document.getElementById("theForm")
        if (theForm) {
            theForm.classList.add("blurIn")
        }
    }, [])


    useEffect(() => {
        //was this useEffect supposed to do something?
    }, [is_looped])

    const newSound = async (e) => {
        e.preventDefault();
        setSoundLoading(true)
        const formData = new FormData();
        formData.append("sound_url", sound_url);
        formData.append("name", name);
        formData.append("owner_id", user?.id);
        formData.append("is_public", false);
        formData.append("target_volume", target_volume);
        formData.append("fade_speed", fade_speed);
        formData.append("arrangement", arrangement);
        formData.append("is_looped", is_looped);
        formData.append("is_midi", is_midi);
        formData.append("play_stop_button", play_stop_button);
        formData.append("volume_control", volume_control);

        //resets errors
        setErrorsFrontEnd([])
        let newArr = []

        if(name === "") {
            newArr.push("name: ** Field required **")
        } else  if (name.length > 30){
            newArr.push("name: ** Must be 30 characters or less **")
        }

        if (target_volume < 0){
            newArr.push("target volume: ** Cannot be below 0 **")
        } else if (target_volume > 10) {
            newArr.push("target volume: ** Must be between 0-10. Sorry it doesn't go to 11 **")
        }

        if (fade_speed < 0){
            newArr.push("fade speed: ** Cannot be below 0 **")
        } else if (fade_speed > 3000) {
            newArr.push("fade speed: ** Over 3000???? No! **")
        }

        setErrorsFrontEnd(newArr)

        if(newArr.length === 0){
            // setShowErrs(false)
            const data = await dispatch(addSound(formData))
            if (data.errors) {
                console.log([data.errors])
                // setArrangement(false) Why this Kevin?? Why???
                setErrorsBackend([data.errors])
                setSoundLoading(false)
                setShowErrs(true)
                return
            } else {
                setSoundLoading(false)
                let theForm = document.getElementById("theForm")
                theForm.classList.remove("blurIn")
                setTimeout(() => {
                    dispatch(setModalState(''))
                }, 500);
            }
        } else {
            setShowErrs(true)
            setSoundLoading(false)
        }
    }

    useEffect(()=>{
        setShowErrs(false)
    }, [sound_url, name, target_volume, fade_speed, arrangement, is_looped, is_midi, play_stop_button, volume_control])



    const updateImage = (e) => {
        const file = e.target.files[0];
        setSound_url(file);
    }

    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    return (
        <div className="formEffect" id="theForm">

            {soundLoading &&
                <div className="black_fronter_backer">
                    <img src={loading} className="loading"></img>
                </div>}

            <form onSubmit={(e) => newSound(e)} className="new_sound_form">
                <div className="close_new_sound" onClick={goHome}>X</div>

                <div className="formSplit">
                    <div className="formSide">
                {errorsBackend && showErrs && errorsBackend.map((err, i) => <div className="logInErrors">{err}</div>)}
                {errorsFrontEnd && showErrs && errorsFrontEnd.map((err, i) => <div className="logInErrors">{err}</div>)}
                        <label>Name Your Sound</label>
                        <input type="text"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            className="new_sound_input"
                        ></input>
                        <label>Target Volume <span className="note">( 0 - 10 )</span></label>
                        <input
                            type="number"
                            name="Volume"
                            onChange={(e) => setTarget_volume(e.target.value)}
                            value={target_volume}
                            className="new_sound_input"
                        ></input>
                        <label>Fade In/Out
                            {/* <span className="note">(in seconds)</span> */}
                        </label>
                        <input
                            type="number"
                            name="fade speed"
                            onChange={(e) => setFade_speed(e.target.value)}
                            value={fade_speed}
                            placeholder="User Name"
                            className="new_sound_input"
                        ></input>

                        <label>Arrangement</label>
                        <input
                            type="number"
                            name="arrangement"
                            onChange={(e) => setArrangement(e.target.value)}
                            value={arrangement}
                            className="new_sound_input"
                        ></input>
                        <div className="looped_midi">
                            <label>
                                Looped?:
                                <input
                                    name="isLooped"
                                    type="checkbox"
                                    checked={is_looped}
                                    onChange={(e) => { setIs_looped(e.target.checked) }} />
                            </label>
                            <label>
                                Use MIDI?:
                                <input
                                    name="isMidi"
                                    type="checkbox"
                                    checked={is_midi}
                                    onChange={(e) => { setIs_midi(e.target.checked) }} />
                            </label>
                        </div>


                        <label>Sound URL</label>
                        <input type="text"
                            name="name"
                            onChange={(e) => setSound_url(e.target.value)}
                            value={sound_url}
                            className="new_sound_input"
                        ></input>

                        {/* <div className="upload_buttons">
                            <div className="visible_button">Choose Sound</div>
                            <input
                                type="file"
                                accept="audio/*"
                                onChange={updateImage}
                                className="select_image"
                            />
                        </div> */}

                    </div>



                    {is_midi &&
                        <div className="formSide">
                            <div>Play/Stop Button#</div>
                            <input
                                type="number"
                                name="play_stop_button"
                                onChange={(e) => setPlay_stop_button(e.target.value)}
                                value={play_stop_button}
                                className="new_sound_input"
                            ></input>

                            <div>Volume Control#</div>
                            <input
                                type="number"
                                name="volume_control"
                                onChange={(e) => setVolume_control(e.target.value)}
                                value={volume_control}
                                className="new_sound_input"
                            ></input>
                            <div className="midiInputText">Press the button or slide the volume control on your MIDI device to see the output's number. Assign that number to the inputs above accordingly.</div>
                            <div className="midiInputContainer">
                                <div>Current MIDI Input#</div>
                                <div id="currentMidiDiv">{currentMidiInput}</div>
                            </div>
                        </div>
                    }

                </div>
                {is_midi && <div className="disclaimer">**NOTE** Target Volume/Fade In/Out will be ignored when using MIDI</div>}
                <button type="submit" className="new_sound_submit">Submit</button>
            </form>
            {/* <div className="black_backer"></div> */}
            {/* <FauxUserPage></FauxUserPage> */}

        </div>
    )
}
export default SoundForm
