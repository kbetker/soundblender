import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom";
import { addSound } from "../../store/sound"

function Sound() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const history = useHistory(); // so that we can redirect after the image upload is successful
    // const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);


    const [sound_url, setSound_url] = useState(null);
    const [name, setName] = useState('Your name here');
    const [owner_id, setId] = useState(user?.id);
    const [is_public, setIs_public] = useState(false);
    const [target_volume, setTarget_volume] = useState(1);
    const [fade_speed, setFade_speed] = useState(1);
    const [is_looped, setIs_looped] = useState(true);

    const newSound = async (e) => {
        console.log("==================== on the very front ====================")
        e.preventDefault();

        const formData = new FormData();
        formData.append("sound_url", sound_url);
        formData.append("name", name);
        formData.append("owner_id", owner_id);
        formData.append("is_public", is_public);
        formData.append("target_volume", target_volume);
        formData.append("fade_speed", fade_speed);
        formData.append("is_looped", is_looped);

        setImageLoading(true);

        const res = await fetch('/api/sound', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setImageLoading(false);
            // history.push("/");
            console.log(res)
        }
        else {
            console.log("WAAAAAAAATTTT???????", res)
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");
        }

        // const data = await dispatch(addSound(sound_url, name, owner_id, is_public, target_volume, fade_speed, is_looped))
        // if (data.errors) {
        //     alert(data.errors)
        // }

    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setSound_url(file);
    }

    return (
        <form onSubmit={(e) => newSound(e)}>
            {/* <input
                type="text"
                name="username"
                onChange={(e) => setSound_url(e.target.value)}
                value={sound_url}
                // placeholder="User Name"
                className="signup-form-input"
            ></input> */}


            <input
                type="text"
                name="username"
                onChange={(e) => setName(e.target.value)}
                value={name}
                // placeholder="User Name"
                className="signup-form-input"
            ></input>


            {/* <input
                type="text"
                name="username"
                onChange={(e) => setIs_public(e.target.value)}
                value={is_public}
                // placeholder="User Name"
                className="signup-form-input"
            ></input> */}


            {/* <input
                type="number"
                name="username"
                onChange={(e) => setTarget_volume(e.target.value)}
                value={target_volume}
                // placeholder="User Name"
                className="signup-form-input"
            ></input> */}


            {/* <input
                type="number"
                name="username"
                onChange={(e) => setFade_speed(e.target.value)}
                value={fade_speed}
                placeholder="User Name"
                className="signup-form-input"
            ></input> */}
            <input
                type="file"
                accept="image/*"
                onChange={updateImage}
            />
            {/* <input
                type="text"
                name="username"
                onChange={(e) => setIs_looped(e.target.value)}
                value={is_looped}
                // placeholder="User Name"
                className="signup-form-input"
            ></input> */}

            <button type="submit">Submit</button>
        </form>
    )
}
export default Sound
