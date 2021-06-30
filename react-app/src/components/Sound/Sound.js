import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addSound } from "../../store/sound"

function Sound() {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    const [sound_url, setSound_url] = useState('www.something....');
    const [name, setName] = useState('Your name here');
    const [owner_id, setId] = useState(user?.id);
    const [is_public, setIs_public] = useState(false);
    const [target_volume, setTarget_volume] = useState(1);
    const [fade_speed, setFade_speed] = useState(1);
    const [is_looped, setIs_looped] = useState(true);

    const newSound = async(e) => {
        console.log("==================== on the very front ====================")
        e.preventDefault();
        const data = await dispatch(addSound(sound_url, name, owner_id, is_public, target_volume, fade_speed, is_looped))
        if(data.errors){
            alert(data.errors)
        }
    }

    return (
        <form onSubmit={(e) => newSound(e)}>
            <input
                type="text"
                name="username"
                onChange={(e) => setSound_url(e.target.value)}
                value={sound_url}
                // placeholder="User Name"
                className="signup-form-input"
            ></input>


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


            <input
                type="number"
                name="username"
                onChange={(e) => setTarget_volume(e.target.value)}
                value={target_volume}
                // placeholder="User Name"
                className="signup-form-input"
            ></input>


            <input
                type="number"
                name="username"
                onChange={(e) => setFade_speed(e.target.value)}
                value={fade_speed}
                placeholder="User Name"
                className="signup-form-input"
            ></input>
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
