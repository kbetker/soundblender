import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserSound } from "../../store/sound";
import SoundModulePreview from "../SoundModulePreview/SoundModulePreview";
import FauxUserPage from "../FauxUserPage";
import "../UserPage/userPage.css"

import homepageLogo from "../HomePage/homepageLogo.gif"
import logoAnimation from "../HomePage/logoAnimationGreen.gif"
import gear from "../UserPage/Gear.png"


function SoundPreview(){
    const { soundId }  = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserSound(soundId))
    }, [dispatch, soundId]);

    const mySoundObj = useSelector(state => state.newSound)
    return(
    <>
            <div className="soundPreviewWrapper">
                <div className="soundPreview">
                {mySoundObj.sounds?.target_volume && <SoundModulePreview mySoundObj={mySoundObj.sounds} color="white" key={`soundKey-${mySoundObj.id}`}></SoundModulePreview>}
                </div>
            </div>
                <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div>
    </>
    )

}

export default SoundPreview
