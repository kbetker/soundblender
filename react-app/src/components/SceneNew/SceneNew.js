import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import "../FauxUserPage/FauxUserPage.css"
import "../SoundForm/Sound.css"
import { addNewScene } from "../../store/scene";
import { setModalState } from "../../store/modal";


function SceneNew({currentCollectionId}) {

    const [name, setName] = useState('');
    const dispatch = useDispatch()

    const addScene = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("collection_id", currentCollectionId)
        formData.append("theme", "theme")

        const data = await dispatch(addNewScene(formData))

        if (data.errors) {
             alert(data.errors);
        } else {
            let theForm = document.getElementById("theForm")
            theForm.classList.remove("blurIn")
            // setTimeout(() => {
                dispatch(setModalState(`sceneFocus`))
            // }, 500);
        }
    };

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
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
            <div className="new_sound_form" >
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Scene Name</label>
                <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="new_sound_input"
                ></input>
                <button onClick={() => addScene()} className="category_button">Add Scene</button>
            </div>
        </div>
    )
}
export default SceneNew
