import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import SoundModulePreview from "../SoundModulePreview/SoundModulePreview";
import { setModalState } from "../../store/modal";
import "../UserPage/userPage.css"


function SoundPreview({currentSoundId}){
    const dispatch = useDispatch()
    const sounds = useSelector(state => state.newSound.sounds.sounds)
    const mySoundObj =sounds.find((sound) => sound.id === currentSoundId)

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

    return(
    <div className="formEffect" id="theForm">
            <div className="soundPreviewWrapper">
                <div className="soundPreview">
                    <div className="close_soundPreview" onClick={goHome}>X</div>
                {mySoundObj.target_volume && <SoundModulePreview mySoundObj={mySoundObj} color="white" key={`soundKey-${mySoundObj.id}`}></SoundModulePreview>}
                </div>
            </div>
    </div>
    )

}

export default SoundPreview
