import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { newUserCollection } from "../../store/collection";
import { setModalState } from "../../store/modal";
import "../SoundForm/Sound.css"
import "../FauxUserPage/FauxUserPage.css"

function CollectionNew() {
    const user = useSelector(state => state.session.user)
    const [name, setName] = useState('');
    const [is_midi, setIs_midi] = useState(false);
    const [stop_all, setStop_all] = useState(0);
    const [scene_left, setScene_left] = useState(0);
    const [scene_right, setScene_right] = useState(0);

    const dispatch = useDispatch()

    const addCollection = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("is_midi", is_midi)
        formData.append("stop_all", stop_all)
        formData.append("scene_left", scene_left)
        formData.append("scene_right", scene_right)

        formData.append("owner_id", user.id)
        const data = await dispatch(newUserCollection(formData))
        if (data.errors) {
            alert(data.errors);
        } else {
            let theForm = document.getElementById("theForm")
            theForm.classList.remove("blurIn")
            setTimeout(() => {
                dispatch(setModalState(''))
            }, 500);
        }
    };

    useEffect(() => {
        let theForm = document.getElementById("theForm")
        if (theForm) {
            theForm.classList.add("blurIn")
        }
    }, [])

    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    return (
        <div className="formEffect" id="theForm">
            <div className="standard_form" >
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Collection Name</label>
                <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="new_sound_input"
                    placeholder="Name"
                ></input>


                <label>
                    Use MIDI?:
                    <input
                        name="isMidi"
                        type="checkbox"
                        checked={is_midi}
                        onChange={(e) => { setIs_midi(e.target.checked) }} />
                </label>


                <label>Stop All</label>
                <input
                    type="number"
                    name="stop_all"
                    onChange={(e) => setStop_all(e.target.value)}
                    value={stop_all}
                    className="new_sound_input"
                ></input>


                <label>Scene Left</label>
                <input
                    type="number"
                    name="arrangement"
                    onChange={(e) => setScene_left(e.target.value)}
                    value={scene_left}
                    className="new_sound_input"
                ></input>


                <label>Scene Right</label>
                <input
                    type="number"
                    name="scene_right"
                    onChange={(e) => setScene_right(e.target.value)}
                    value={scene_right}
                    className="new_sound_input"
                ></input>


                <button onClick={() => addCollection()} className="category_button">Add Collection</button>
            </div>
        </div>
    )
}
export default CollectionNew
