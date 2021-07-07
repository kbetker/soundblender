import React, { useEffect, useState } from "react"
import UserPage from "../UserPage"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { editUserSound } from "../../store/sound"
// import { getUserInfo } from "../../store/userPage";
import "../SoundForm/Sound.css"
// import { getUserSounds } from "../../store/sound";

function SoundForm() {
    const dispatch = useDispatch()
    const { soundId }  = useParams();
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    // useEffect(() => {
    //     dispatch(getUserSounds(user.id))
    // }, [dispatch, user.id]);

    // useEffect(() => {
    //     dispatch(getUserInfo(user.id))
    // }, [dispatch, user.id]);

    const sounds = useSelector(state => state.newSound.sounds)
    const soundToEdit = sounds?.sounds.find(sound => sound.id === parseInt(soundId))


    const [sound_url, setSound_url] = useState(soundToEdit?.sound_url);
    const [name, setName] = useState(soundToEdit?.name);
    // const [owner_id, setId] = useState(user?.id);
    // const [is_public, setIs_public] = useState(false);
    const [target_volume, setTarget_volume] = useState(soundToEdit?.target_volume);
    const [fade_speed, setFade_speed] = useState(soundToEdit?.fade_speed);
    const [arrangement, setArrangement] = useState(soundToEdit?.arrangement);
    const [is_looped, setIs_looped] = useState(soundToEdit?.is_looped);



    useEffect(() => {

    }, [is_looped])// ??? not sure what I'm doing with this

    const newSound = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("sound_url", sound_url);
        formData.append("name", name);
        formData.append("owner_id", user?.id);
        formData.append("is_public", false);
        formData.append("target_volume", target_volume * 0.1);
        formData.append("fade_speed", fade_speed * 1000);
        formData.append("arrangement", arrangement);
        formData.append("is_looped", is_looped);

        // setImageLoading(true);
        const data = await dispatch(editUserSound(formData, soundId))

        if(data.errors){
            alert(data.errors)
        } else {
            history.push(`/users/${user.id}`)
        }

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setSound_url(file);
    }

    const goHome = () => {
        history.push(`/users/${user.id}`)
    }

    const goToDelete = () => {
        history.push(`/sound/${soundId}/delete`)
    }

    return (
        <>
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
        <div className="black_backer"></div>
        <UserPage></UserPage>

        </>
    )
}
export default SoundForm