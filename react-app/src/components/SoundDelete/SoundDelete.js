import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { deleteUserSound } from "../../store/sound";
import "../SoundForm/Sound.css"
import "./SoundDelete.css"
import { setModalState } from "../../store/modal";


function SoundDelete({currentSoundId}) {
    const dispatch = useDispatch()


    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            setTimeout(() => {
                theForm.classList.add("blurIn")
            }, 50);
        }
    }, [])

    const deleteSound = (e) => {
        e.preventDefault(currentSoundId);
        console.log(currentSoundId, "DELETE THIS DUDE!!!!!!!!!")
        const data = dispatch(deleteUserSound(currentSoundId))
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

    return (
        <div className="formEffect" id="theForm">
            <form onSubmit={(e) => deleteSound(e)} className="delete_sound_form">
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Are you sure? </label>
                <label>This cannot be undone</label>
                <button type="submit" className="delete_sound_submit">Yes. Delete.</button>
            </form>
            {/* <div className="black_backer"></div> */}
            {/* <div className="fauxUserPageContainer"><FauxUserPage></FauxUserPage></div> */}
        </div>




    )

}
export default SoundDelete
