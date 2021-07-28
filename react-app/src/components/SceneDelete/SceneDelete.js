import React, { useEffect, useState } from "react"
import FauxUserPage from "../FauxUserPage";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { deleteUserScene } from "../../store/scene";
import { setModalState } from "../../store/modal";
import "../SoundForm/Sound.css"

function SceneDelete(ids) {
    const dispatch = useDispatch()
    // const { sceneId } = useParams();
    // const history = useHistory();
    // const user = useSelector(state => state.session.user)
    // const redirect = useSelector(state => state.redirectPage.page)
    const [categoriesArray, setCategoriesArray] = useState()


    const collections = useSelector(state => state.collection.collection.collection)

    useEffect(()=>{
        let collectionScenes = collections?.find((el) => el.id === ids.currentCollectionId)
        let sceneToEdit = collectionScenes.scenes.find((el) => el.id === ids.currentSceneId)
        setCategoriesArray(sceneToEdit.categories)
    }, [])






    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    const deleteScene = (e) => {
        e.preventDefault();
        const data = dispatch(deleteUserScene(ids.currentSceneId, categoriesArray))
        if (data.errors) { //to do - make a better error handler(all forms)
            alert(data.errors)
        } else {
            let theForm = document.getElementById("theForm")
            theForm.classList.remove("blurIn")
            setTimeout(() => {
                dispatch(setModalState(''))
            }, 500);
        }
    }

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            setTimeout(() => {
                theForm.classList.add("blurIn")
            }, 10);
        }
    }, [])

    return (
        <div className="formEffect" id="theForm">
            <form onSubmit={(e) => deleteScene(e)} className="delete_sound_form">
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Are you sure?</label>
                <button type="submit" className="delete_sound_submit">Yes. Delete.</button>
            </form>
        </div>
    )
}
export default SceneDelete
