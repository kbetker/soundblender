import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../CollectionPage/CollectionPage.css"
import { setModalState } from "../../store/modal"
import buttonOff from "../SoundModule/images/Button_Off.png"
import gear from "../UserPage/Gear.png"
import { setQuickSceneButton } from "../../store/quickSceneButton"



{/* <div onClick={()=> setModalFunc(`${mySoundObj.id}-${categoryId}-categorySound`)} style={{display: 'inline-block'}}>
</div> */}

function QuickScene( props ) {
    const dispatch = useDispatch()
    // const [soundArray, setSoundArray] = useState([])
    const sounds = props.quickScene.sounds
    function setModalFunc(){
        dispatch(setModalState(`${props.scene.id}-${props.quickScene.id}quickSceneEdit`))
    }

function qsButtonClick(){
    let currentSoundArray = []
    sounds.map(sound => currentSoundArray.push(sound.id))
    dispatch(setQuickSceneButton(currentSoundArray))
}


    const editMode = useSelector(state => state.editMode.editMode)

    return (
        <>
            <div className="quickSceneComponent">
                {editMode &&
                            <img src={gear} className="quicksceneEditGear" onClick={() => setModalFunc()} draggable="false" alt=""></img>
                }
                <div className="quickSceneTitle">{props.quickScene.name}</div>
                <img src={buttonOff} onClick={() => qsButtonClick()} className="quickScenePic"></img>
            </div>
        </>
    )
}
export default QuickScene
