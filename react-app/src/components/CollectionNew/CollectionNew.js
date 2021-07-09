import React, { useState } from "react"
import FauxUserPage from "../FauxUserPage"
import "../FauxUserPage/FauxUserPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import "../SoundForm/Sound.css"
import { newUserCollection } from "../../store/collection";
// import { getUserSounds } from "../../store/sound";

function CollectionNew() {
    // const dispatch = useDispatch()
    // const { collectionId } = useParams();
    const history = useHistory();
    const redirect = useSelector(state => state.redirectPage.page)
    const user = useSelector(state => state.session.user)
    const [name, setName] = useState('');
    const dispatch = useDispatch()

    const addCollection = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("owner_id", user.id)
        const data = await dispatch(newUserCollection(formData))
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

                <label>Collection Name</label>
                <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="new_sound_input"
                    placeholder="Name"
                ></input>


                <button onClick={() => addCollection()} className="category_button">Add Collection</button>
            </div>

            <div className="black_backer"></div>
            <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div>

        </>
    )
}
export default CollectionNew
