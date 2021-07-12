import React from "react"
import FauxUserPage from "../FauxUserPage";
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { deleteUserCollection } from "../../store/collection";
import "../SoundForm/Sound.css"

function CollectionDelete() {
    const dispatch = useDispatch()
    const { collectionId } = useParams();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const redirect = useSelector(state => state.redirectPage.page)

    const goHome = () => {
       history.push(`/users/${user.id}`)
    }

    const deleteSound = (e) => {
        e.preventDefault();
        const data = dispatch(deleteUserCollection(collectionId))
        // console.log(collectionId, "++++++++FRONT END++++++++++")
        if (data.errors) { //to do - make a better error handler(all forms)
            alert(data.errors)
        } else {
            history.push(redirect)
        }
    }

    return (
        <>
            <form onSubmit={(e) => deleteSound(e)} className="delete_sound_form">
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Are you sure?</label>
                <button type="submit" className="delete_sound_submit">Yes. Delete.</button>
            </form>
            <div className="black_backer"></div>
            <div className="fauxUserPageContainer"><FauxUserPage></FauxUserPage></div>
        </>




    )

}
export default CollectionDelete
