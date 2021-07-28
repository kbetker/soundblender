import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUserSound } from "../../store/sound";
import SoundModulePreview from "../SoundModulePreview/SoundModulePreview";
import FauxUserPage from "../FauxUserPage";
import { setModalState } from "../../store/modal";
import "../UserPage/userPage.css"


function SoundPreview({currentSoundId}){
    const { soundId }  = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const redirect = useSelector(state => state.redirectPage)

    // useEffect(() => {
    //     dispatch(getUserSound(currentSoundId))
    // }, [dispatch, currentSoundId]);
    const sounds = useSelector(state => state.newSound.sounds.sounds)
    const mySoundObj =sounds.find((sound) => sound.id === currentSoundId)
    const goBack = () => history.push(redirect?.page);

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            theForm.classList.add("blurIn")
        }
    }, [])

    const goHome = () => {
        // history.push("/")
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
            {/* <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div> */}
    </div>
    )

}

export default SoundPreview
