import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getUserSound } from "../../store/sound";
import SoundModulePreview from "../SoundModulePreview/SoundModulePreview";
import FauxUserPage from "../FauxUserPage";
import "../UserPage/userPage.css"


function SoundPreview(){
    const { soundId }  = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const redirect = useSelector(state => state.redirectPage)

    useEffect(() => {
        dispatch(getUserSound(soundId))
    }, [dispatch, soundId]);

    const mySoundObj = useSelector(state => state.newSound)
    const goBack = () => history.push(redirect?.page);

    return(
    <>
            <div className="soundPreviewWrapper">
                <div className="soundPreview">
                    <div className="close_soundPreview" onClick={goBack}>X</div>
                {mySoundObj.sounds?.target_volume && <SoundModulePreview mySoundObj={mySoundObj.sounds} color="white" key={`soundKey-${mySoundObj.id}`}></SoundModulePreview>}
                </div>
            </div>
            <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div>
    </>
    )

}

export default SoundPreview
