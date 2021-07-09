import React, { useEffect, useState } from "react"
import FauxUserPage from "../FauxUserPage"
import "../FauxUserPage/FauxUserPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import "../SoundForm/Sound.css"
import { editUserScene } from "../../store/scene";
import "./SceneEdit.css"
// import { getUserSounds } from "../../store/sound";

function SceneEdit() {
    // const dispatch = useDispatch()
    const { sceneId } = useParams();
    const history = useHistory();
    const dispatch = useDispatch()
    const redirect = useSelector(state => state.redirectPage.page)
    const scenes = useSelector(state => state.collection)
    const [name, setName] = useState('')
    const [theme, setTheme] = useState('')
    const [collection_id, setCollection_id] = useState(0)

    useEffect(()=>{
        const sceneToEdit = scenes.collection.scenes.find(scene => scene.id === parseInt(sceneId))
        setName(sceneToEdit?.name)
        setTheme(sceneToEdit?.theme)
        setCollection_id(scenes.collection?.id)
    }, [])

    // console.log("===========>", scenes, "<==========")
    // const [name, setName] = useState('');
    // const dispatch = useDispatch()

    const editScene = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("collection_id", collection_id)
        formData.append("theme", "theme")

        const data = await dispatch(editUserScene(formData, sceneId))

        if (data.errors) {
             alert(data.errors);
        } else {
            history.push(redirect)
        }
    };

    const goToDelete = () => {
        history.push(`/scenes/${sceneId}/delete`)
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
export default SceneEdit
