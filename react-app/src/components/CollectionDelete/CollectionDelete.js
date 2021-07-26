import React, { useEffect } from "react"
import FauxUserPage from "../FauxUserPage";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { deleteUserCollection } from "../../store/collection";
import { setModalState } from "../../store/modal";
import "../SoundForm/Sound.css"

function CollectionDelete({currentCollectionId}) {
    const dispatch = useDispatch()
    const { collectionId } = useParams();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const redirect = useSelector(state => state.redirectPage.page)

    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    const deleteSound = (e) => {
        e.preventDefault();
        const data = dispatch(deleteUserCollection(currentCollectionId, user.id))
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
            }, 50);
        }
    }, [])

    return (
        <div className="formEffect" id="theForm">
            <form onSubmit={(e) => deleteSound(e)} className="delete_sound_form">
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Are you sure?</label>
                <button type="submit" className="delete_sound_submit">Yes. Delete.</button>
            </form>
            {/* <div className="black_backer"></div>
            <div className="fauxUserPageContainer"><FauxUserPage></FauxUserPage></div> */}
        </div>




    )

}
export default CollectionDelete
