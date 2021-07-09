import React, { useEffect, useState } from "react"
import FauxUserPage from "../FauxUserPage"
import "../FauxUserPage/FauxUserPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import "../SoundForm/Sound.css"
import { editUserCollection } from "../../store/collection";
import "../SceneEdit/SceneEdit.css"
// import { getUserSounds } from "../../store/sound";

function CollectionEdit() {
    // const dispatch = useDispatch()
    const { collectionId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch()
    const redirect = useSelector(state => state.redirectPage.page)
    const collection = useSelector(state => state.userInfo.info.collections)
    const [name, setName] = useState('')
    const [owner_id, setOwner_id] = useState(0)
    // console.log(collection, "WOOOOWOOOOWOOOOWOOOOWOOOO")
    useEffect(()=>{
        const collectionToEdit = collection.find(collection => collection.id === parseInt(collectionId))
        setName(collectionToEdit?.name)
        setOwner_id(collectionToEdit?.owner_id)
    }, [])

    // console.log("===========>", scenes, "<==========")
    // const [name, setName] = useState('');
    // const dispatch = useDispatch()

    const editScene = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("owner_id", owner_id)

        const data = await dispatch(editUserCollection(formData, collectionId))

        if (data.errors) {
             alert(data.errors);
        } else {
            history.push(redirect)
        }
    };

    const goToDelete = () => {
        history.push(`/collection/${collectionId}/delete`)
    }

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


                <button onClick={() => editScene()} className="new_sound_submit">Update</button>
                <button className="scene_delete_button" onClick={(e) => goToDelete(e)} >Delete</button>

            </div>

            <div className="black_backer"></div>
            <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div>

        </>
    )
}
export default CollectionEdit
