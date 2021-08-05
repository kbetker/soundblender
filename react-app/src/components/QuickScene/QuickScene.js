import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../CollectionPage/CollectionPage.css"
import { setModalState } from "../../store/modal"
import buttonOff from "../SoundModule/images/Button_Off.png"
import buttonOn from "../SoundModule/images/button_press.png"
import gear from "../UserPage/Gear.png"
import { setQuickSceneButton } from "../../store/quickSceneButton"


function QuickScene( props ) {
    const dispatch = useDispatch()
    const [stopLight, setStopLight] = useState(false)
    const stopAllImg = document.getElementById(`btn-${props.quickScene.id}`)
    if (stopAllImg) stopAllImg.addEventListener("mousedown", () => {setStopLight(true)})
    if (stopAllImg) stopAllImg.addEventListener("mouseup", () => {setStopLight(false)})
    // const [soundArray, setSoundArray] = useState([])
    const sounds = props.quickScene.sounds
    const midiState = useSelector(state => state.midiState)

    function setModalFunc(){
        dispatch(setModalState(`${props.scene.id}-${props.quickScene.id}quickSceneEdit`))
    }

function qsButtonClick(){
    let currentSoundArray = []
    sounds.map(sound => currentSoundArray.push(sound.id))
    dispatch(setQuickSceneButton(currentSoundArray))
}

//Key Bind Function
// useEffect(() => {
//     document.addEventListener('keydown', (e) => {
//         if(e.key === "l") {
//             qsButtonClick()
//         }
//     })
// }, [])

useEffect(() => {
    if (midiState[0] > 0 && midiState[0] === props.quickScene.control_num) {
        qsButtonClick()
    }
})

    const editMode = useSelector(state => state.editMode.editMode)

    return (
        <>
            <div className="quickSceneComponent" id={`btn-${props.quickScene.id}`}>
                {editMode &&
                            <img src={gear} className="quicksceneEditGear" onClick={() => setModalFunc()} draggable="false" alt=""></img>
                }
                <div className="quickSceneTitle">{props.quickScene.name}</div>
                <img src={stopLight ? buttonOn : buttonOff} onClick={() => qsButtonClick()} className="quickScenePic" alt="" draggable={false}></img>
            </div>
        </>
    )
}
export default QuickScene
