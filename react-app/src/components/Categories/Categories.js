import React from "react"
import { useDispatch, useSelector } from "react-redux"
import SoundModule from "../SoundModule"
import SoundModuleMIDI from "../SoundModuleMIDI"
import "../CollectionPage/CollectionPage.css"
import "../UserPage/userPage.css"
import gear from "../UserPage/Gear.png"
import "./Categories.css"
import { useHistory } from "react-router-dom"
import { setEditMode } from "../../store/editMode"
import { setModalState } from "../../store/modal"

function Categories({ category, currentscene }) {
    const editMode = useSelector(state => state.editMode.editMode)
    const history = useHistory()
    const dispatch = useDispatch()

    let sounds = category.sounds.sort((soundA, soundB) => {
        if (soundA.name.toLowerCase() < soundB.name.toLowerCase()) { return -1 }
        if (soundA.name.toLowerCase() > soundB.name.toLowerCase()) { return 1 }
        return 0
    })

    const editCategory = async () => {
        // await dispatch(setEditMode(false))
        // history.push(`/category/${category.id}/edit`)
        dispatch(setModalState(`NaN-${category.id}-categoryEdit`))
    }

    const addSound = () =>{
        // history.push(`/category/${category.id}/addSound`)
        dispatch(setModalState(`NaN-${category.id}-addSoundToCategory`))
    }

    return (
        <div className="categoryContainer" style={{ border: `1px solid ${category.color}`, order: `${category.arrangement}` }}>
            <div className="categoryName">
               {category.name}
                {editMode && <img src={gear} className="categoryEditGear" draggable="false" alt="" onClick={editCategory}></img>}
            </div>
            <div className="soundModulewrapper">
                {sounds.map(mySoundObj =>
                <>{mySoundObj.is_midi ?
                    <SoundModuleMIDI mySoundObj={mySoundObj} color={category.color} key={`midiSoundKey-${mySoundObj.id}`} currentscene={currentscene} categoryId={category.id}></SoundModuleMIDI>
                    :
                    <SoundModule mySoundObj={mySoundObj} color={category.color} key={`soundKey-${mySoundObj.id}`} currentscene={currentscene} categoryId={category.id}></SoundModule>
                   }</>
                )}
            </div>
             {editMode &&
                <div className="NewSoundModule_wrapper" onClick={addSound}>
                    <img src={gear} className="NewSoundGear" draggable="false" alt="Add new Sound Icon"></img>
                    <div>Add Sound</div>
                </div>
            }
        </div>
    )
}

export default Categories
