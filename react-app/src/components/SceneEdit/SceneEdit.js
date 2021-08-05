import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUserScene } from "../../store/scene";
import { setModalState } from "../../store/modal";
import "./SceneEdit.css"
import "../SoundForm/Sound.css"

function SceneEdit(ids) {

    const dispatch = useDispatch()
    const collections = useSelector(state => state.collection.collection.collection)
    const [name, setName] = useState('')
    // const [theme, setTheme] = useState('')
    const [collection_id, setCollection_id] = useState(0)

    useEffect(()=>{
        let collectionScenes = collections?.find((el) => el.id === ids.currentCollectionId)
        let sceneToEdit = collectionScenes.scenes.find((el) => el.id === ids.currentSceneId)
        // console.log(sceneToEdit.categories, "WTFWTFWTFWTFWTF")
        setName(sceneToEdit?.name)
        // setTheme(sceneToEdit?.theme)
        setCollection_id(ids.currentCollectionId)
    }, [])

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            theForm.classList.add("blurIn")
        }
    }, [])
    // const [name, setName] = useState('');
    // const dispatch = useDispatch()

    const editScene = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("collection_id", collection_id)
        formData.append("theme", "default")

        const data = await dispatch(editUserScene(formData, ids.currentSceneId))

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

    const goToDelete = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(`${ids.currentSceneId}-${ids.currentCollectionId}-sceneDelete`))
        }, 600);
    }

    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    return (
        <div className="formEffect" id="theForm">
            <div className="new_sound_form" >
                <div className="top_rounded_form" >
                <div className="close_new_sound" onClick={goHome}>X</div>

                <label>Scene Name</label>
                <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="new_sound_input"
                ></input>

            </div>
                <button onClick={() => editScene()} className="submit_notRounded">Update</button>
                <button className="scene_delete_button" onClick={(e) => goToDelete(e)} >Delete</button>

            </div>

            {/* <div className="black_backer"></div>
            <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div> */}

        </div>
    )
}
export default SceneEdit
