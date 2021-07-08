import React from "react"
import { useDispatch, useSelector } from "react-redux"
import SoundModule from "../SoundModule"
import "../CollectionPage/CollectionPage.css"
import "../UserPage/userPage.css"
import gear from "../UserPage/Gear.png"
import "./Categories.css"
import { useHistory } from "react-router-dom"
import { setEditMode } from "../../store/editMode"

function Categories({ category, currentscene }) {
    const editMode = useSelector(state => state.editMode.editMode)
    const history = useHistory()
    const dispatch = useDispatch()

    const editCategory = async () => {
        await dispatch(setEditMode(false))
        history.push(`/category/${category.id}/edit`)
    }

    const addSound = () =>{
        history.push(`/category/${category.id}/addSound`)
    }

    return (
        <div className="categoryContainer" style={{ border: `1px solid ${category.color}`, order: `${category.arrangement}` }}>
            <div className="categoryName">
               {category.name}
                {editMode && <img src={gear} className="categoryEditGear" draggable="false" alt="" onClick={editCategory}></img>}
            </div>

            {category.sounds.map(mySoundObj =>
                <SoundModule mySoundObj={mySoundObj} color={category.color} key={`soundKey-${mySoundObj.id}`} currentscene={currentscene} categoryId={category.id}></SoundModule>
            )}
             {editMode &&
                <div className="NewSoundModule_wrapper" onClick={addSound}>
                    <img src={gear} className="NewSoundGear" draggable="false" alt="" onClick={editCategory}></img>
                    <div>Add Sound</div>
                </div>
            }
        </div>
    )
}

export default Categories
