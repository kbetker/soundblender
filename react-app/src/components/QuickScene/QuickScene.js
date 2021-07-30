import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "../CollectionPage/CollectionPage.css"
import { setModalState } from "../../store/modal"
import buttonOff from "../SoundModule/images/Button_Off.png"
import gear from "../UserPage/Gear.png"
import { setEditMode } from "../../store/editMode"
import { editQuickscene } from "../../store/quickscene"



{/* <div onClick={()=> setModalFunc(`${mySoundObj.id}-${categoryId}-categorySound`)} style={{display: 'inline-block'}}>
</div> */}

function QuickScene( props ) {
    const dispatch = useDispatch()

    function setModalFunc(){
        dispatch(setModalState(`${props.scene.id}-${props.quickScene.id}quickSceneEdit`))
    }




    const editMode = useSelector(state => state.editMode.editMode)

    return (
        <>
            <div className="quickSceneComponent">
                {editMode &&
                            <img src={gear} className="quicksceneEditGear" onClick={() => setModalFunc()} draggable="false" alt=""></img>
                }
                <div className="quickSceneTitle">{props.quickScene.name}</div>
                <img src={buttonOff} className="quickScenePic"></img>
            </div>
        </>
    )
}
export default QuickScene
