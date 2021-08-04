import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUserCollection } from "../../store/collection";
import { setModalState } from "../../store/modal";
import "../SoundForm/Sound.css"
import "../FauxUserPage/FauxUserPage.css"
import "../SceneEdit/SceneEdit.css"

function CollectionEdit({currentCollectionId}) {

    const dispatch = useDispatch()
    const allCollections = useSelector(state => state.collection.collection)
    const [name, setName] = useState('')
    const [owner_id, setOwner_id] = useState(0)
    useEffect(()=>{
        const collectionToEdit = allCollections?.collection.find(collection => collection.id === parseInt(currentCollectionId))
        setName(collectionToEdit?.name)
        setOwner_id(collectionToEdit?.owner_id)
    }, [])


    const editCollection = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("owner_id", owner_id)

        const data = await dispatch(editUserCollection(formData, currentCollectionId))
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

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            theForm.classList.add("blurIn")
        }
    }, [])

    // const goToDelete = () => {
    //     history.push(`/collection/${currentCollectionId}/delete`)
    // }

    const goToDelete = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState('collectionDelete'))
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
            <div className="standard_form" >
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Collection Name</label>
                <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="new_sound_input"
                ></input>
                <button onClick={() => editCollection()} className="new_sound_submit">Update</button>
                <button className="scene_delete_button" onClick={(e) => goToDelete(e)} >Delete</button>
            </div>
        </div>
    )
}
export default CollectionEdit
