import React, { useState, useEffect } from "react"
import FauxUserPage from "../FauxUserPage"
import "../FauxUserPage/FauxUserPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { editUserSound } from "../../store/sound"
import "../SoundForm/Sound.css"
import { setModalState } from "../../store/modal";

function SoundEditForm({ currentSoundId }) {
    const dispatch = useDispatch()
    const { soundId } = useParams();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const redirect = useSelector(state => state.redirectPage.page)

    const sounds = useSelector(state => state.newSound.sounds)
    const soundToEdit = sounds?.sounds.find(sound => sound.id === parseInt(currentSoundId))

    const sound_url = soundToEdit?.sound_url
    const [name, setName] = useState(soundToEdit?.name);
    const [target_volume, setTarget_volume] = useState(soundToEdit?.target_volume);
    const [fade_speed, setFade_speed] = useState(soundToEdit?.fade_speed);
    const [arrangement, setArrangement] = useState(soundToEdit?.arrangement);
    const [is_looped, setIs_looped] = useState(soundToEdit?.is_looped);
    const [errors, setErrors] = useState([])

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            theForm.classList.add("blurIn")
        }
    }, [])


    const newSound = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("sound_url", sound_url);
        formData.append("name", name);
        formData.append("owner_id", user?.id);
        formData.append("is_public", false);
        formData.append("target_volume", target_volume);
        formData.append("fade_speed", fade_speed);
        formData.append("arrangement", arrangement);
        formData.append("is_looped", is_looped);

        const data = await dispatch(editUserSound(formData, currentSoundId))
        if (data.errors) {
            setErrors(data.errors)
        }
        else {
            let theForm = document.getElementById("theForm")
            theForm.classList.remove("blurIn")
            setTimeout(() => {
                dispatch(setModalState(''))
            }, 500);
        }
    }


    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    const goToDelete = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState('soundDelete'))
        }, 600);
    }

    return (
        <div className="formEffect" id="theForm">
            <div className="formContainer">
                {errors && errors.map((err, i) => <div className="errors">{err}</div>)}
                {/* <div className="errors">{errors[0]}</div> */}
                <form onSubmit={(e) => newSound(e)} className="new_sound_form">
                    <div className="close_new_sound" onClick={goHome}>X</div>
                    <label>EDIT Your Sound</label>
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
                    <label>Fade In/Out <span className="note">(in seconds)</span></label>
                    <input
                        type="number"
                        name="username"
                        onChange={(e) => setFade_speed(e.target.value)}
                        value={fade_speed}
                        placeholder="User Name"
                        className="new_sound_input"
                    ></input>

                    <label>Arrangement</label>
                    <input
                        type="number"
                        name="username"
                        onChange={(e) => setArrangement(e.target.value)}
                        value={arrangement}
                        className="new_sound_input"
                    ></input>

                    <label>
                        Looped?:
                        <input
                            name="isGoing"
                            type="checkbox"
                            checked={is_looped}
                            onChange={(e) => { setIs_looped(e.target.checked) }} />
                    </label>


                    <button type="submit" className="new_sound_submit">Submit</button>
                    <button className="new_sound_submit" onClick={() => goToDelete()}>Delete</button>

                </form>
                {/* <div className="black_backer"></div>
            <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div> */}
            </div>
        </div>
    )
}
export default SoundEditForm
