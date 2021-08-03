import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { deleteQuickSceneFunc } from "../../store/quickscene";
import { setModalState } from "../../store/modal";
import "../SoundForm/Sound.css"
import "../SoundDelete/SoundDelete.css"

function QuickSceneDelete({currentQuickscene}) {
    const soundsArray = useSelector(state => state.quicksceneSounds.qsarray)
    const dispatch = useDispatch()
    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    const deleteSound = (e) => {
        e.preventDefault();
        const data = dispatch(deleteQuickSceneFunc(currentQuickscene, soundsArray))
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
            let theForm = document.getElementById("theForm")
            theForm.classList.remove("blurIn")
            setTimeout(() => {
                theForm.classList.add("blurIn")

            }, 10);



        }
    }, [])

    return (
        <div className="formEffect" id="theForm">
            <form onSubmit={(e) => deleteSound(e)} className="delete_sound_form">
                <div className="close_new_sound" onClick={goHome}>X</div>
                <div>Are you sure?</div>
                <div style={{fontSize: "16px"}}>This will remove sounds and delete this Category. However,
               Sounds will still remain in your library</div>
                <button type="submit" className="delete_sound_submit">Yes. Delete.</button>
            </form>
            {/* <div className="black_backer"></div>
            <div className="fauxUserPageContainer"><FauxUserPage></FauxUserPage></div> */}
        </div>




    )

}
export default QuickSceneDelete
