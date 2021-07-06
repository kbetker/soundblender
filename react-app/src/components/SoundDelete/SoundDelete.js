import React, { useEffect, useState } from "react"
import UserPage from "../UserPage"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { editUserSound } from "../../store/sound"
import { deleteUserSound } from "../../store/sound";
// import { getUserInfo } from "../../store/userPage";
import "../SoundForm/Sound.css"
import "./SoundDelete.css"

function SoundDelete() {
    const dispatch = useDispatch()
    const { soundId }  = useParams();
    const history = useHistory();
    const user = useSelector(state => state.session.user)

    const goHome = () => {
        history.push(`/users/${user.id}`)
    }

    const deleteSound = (e) => {
        e.preventDefault();
        const data = dispatch(deleteUserSound(soundId))
        if(data.errors){
            alert(data.errors)
        } else {
            history.push(`/users/${user.id}`)
        }
    }

    return(
        <>
        <form onSubmit={(e) => deleteSound(e)} className="delete_sound_form">
            <div className="close_new_sound" onClick={goHome}>X</div>



            <label>Are you sure?</label>

            <button type="submit" className="delete_sound_submit">Yes. Delete.</button>

        </form>
        <div className="black_backer"></div>
        <UserPage></UserPage>

        </>




    )

}
export default SoundDelete
