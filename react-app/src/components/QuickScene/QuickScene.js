import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "../CollectionPage/CollectionPage.css"
import { setModalState } from "../../store/modal"
import buttonOff from "../SoundModule/images/Button_Off.png"
import gear from "../UserPage/Gear.png"
import { setEditMode } from "../../store/editMode"



{/* <div onClick={()=> setModalFunc(`${mySoundObj.id}-${categoryId}-categorySound`)} style={{display: 'inline-block'}}>
</div> */}

function QuickScene( { scene } ) {
    const editMode = useSelector(state => state.editMode.editMode)

    return (
        <>
            <div className="quickSceneComponent">
                {editMode &&
                            <img src={gear} className="quicksceneEditGear" draggable="false" alt=""></img>
                }
                <div className="quickSceneTitle">{scene.name}</div>
                <img src={buttonOff} className="quickScenePic"></img>
            </div>
        </>
    )
}
export default QuickScene
