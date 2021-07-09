import React, { useState } from "react"
import FauxUserPage from "../FauxUserPage"
import "../FauxUserPage/FauxUserPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import "../SoundForm/Sound.css"
import { addNewScene } from "../../store/scene";
// import { getUserSounds } from "../../store/sound";

function SoundForm() {
    // const dispatch = useDispatch()
    const { collectionId } = useParams();
    const history = useHistory();
    const redirect = useSelector(state => state.redirectPage.page)
    const [name, setName] = useState('');
    const dispatch = useDispatch()

    const addScene = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("collection_id", collectionId)
        formData.append("theme", "theme")

        const data = await dispatch(addNewScene(formData))

        if (data.errors) {
             alert(data.errors);
        } else {
            history.push(redirect)
        }
    };





    const goBack = () => {
    history.push(redirect)
    }

    return (
        <>
            <div className="new_sound_form" >
                <div className="close_new_sound" onClick={goBack}>X</div>

                <label>Scene Name</label>
                <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="new_sound_input"
                ></input>


                <button onClick={() => addScene()} className="category_button">Add Scene</button>
            </div>

            <div className="black_backer"></div>
            <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div>

        </>
    )
}
export default SoundForm
