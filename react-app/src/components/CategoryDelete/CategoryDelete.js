import React from "react"
import FauxUserPage from "../FauxUserPage"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { deleteCategoryFunc } from "../../store/category";
import "../SoundForm/Sound.css"
import "../SoundDelete/SoundDelete.css"

function CategoryDelete() {
    const dispatch = useDispatch()
    const { catId } = useParams();
    const history = useHistory();
    // const user = useSelector(state => state.session.user)
    const redirect = useSelector(state => state.redirectPage.page)

    const goBack = () => {
        history.push(redirect)
    }

    const deleteSound = (e) => {
        e.preventDefault();
        const data = dispatch(deleteCategoryFunc(catId))
        if (data.errors) { //to do - make a better error handler(all forms)
            alert(data.errors)
        } else {
            history.push(redirect)
        }
    }

    return (
        <>
            <form onSubmit={(e) => deleteSound(e)} className="delete_sound_form">
                <div className="close_new_sound" onClick={goBack}>X</div>
                <label>Are you sure?</label>
                <button type="submit" className="delete_sound_submit">Yes. Delete.</button>
            </form>
            <div className="black_backer"></div>
            <div className="fauxUserPageContainer"><FauxUserPage></FauxUserPage></div>
        </>




    )

}
export default CategoryDelete
