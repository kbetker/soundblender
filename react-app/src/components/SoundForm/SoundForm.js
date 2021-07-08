import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { addSound } from "../../store/sound"
import "./Sound.css"
import FauxUserPage from "../FauxUserPage";

function SoundForm() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const history = useHistory(); // so that we can redirect after the image upload is successful
    // const [image, setImage] = useState(null);
    // const [imageLoading, setImageLoading] = useState(false);


    const [sound_url, setSound_url] = useState(null);
    const [name, setName] = useState('');
    // const [owner_id, setId] = useState(user?.id);
    // const [is_public, setIs_public] = useState(false);
    const [target_volume, setTarget_volume] = useState(10);
    const [fade_speed, setFade_speed] = useState(1);
    const [arrangement, setArrangement] = useState(0);
    const [is_looped, setIs_looped] = useState(true);




    useEffect(() => {

    }, [is_looped])
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

        // setImageLoading(true);
        // console.log(formData.is_looped)
        const data = await dispatch(addSound(formData))
        if(data.errors){
            alert(data.errors)
        } else {
            history.push(`/users/${user.id}`)
        }
        // const res = await fetch('/api/sound', {
        //     method: "POST",
        //     body: formData,
        // });
        // if (res.ok) {
        //     await res.json();
        //     setImageLoading(false);
        //     // history.push("/");
        //     console.log(res)
        // }
        // else {
        //     setImageLoading(false);
        //     // a real app would probably use more advanced
        //     // error handling
        // }

        // const data = await dispatch(addSound(sound_url, name, owner_id, is_public, target_volume, fade_speed, is_looped))
        // if (data.errors) {
        //     alert(data.errors)
        // }

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setSound_url(file);
    }
    const goHome = () => {
        history.push(`/users/${user.id}`)
    }

    return (
        <>
        <form onSubmit={(e) => newSound(e)} className="new_sound_form">
            <div className="close_new_sound" onClick={goHome}>X</div>
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

            <div className="upload_buttons">
                <div className="visible_button">Choose Sound</div>
                <input
                    type="file"
                    accept="audio/*"
                    onChange={updateImage}
                    className="select_image"
                />
            </div>

            <button type="submit" className="new_sound_submit">Submit</button>
        </form>
        <div className="black_backer"></div>
        <FauxUserPage></FauxUserPage>

        </>
    )
}
export default SoundForm
