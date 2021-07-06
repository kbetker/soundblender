import React from "react"
import { useSelector } from "react-redux"
import SoundModule from "../SoundModule"
import "../CollectionPage/CollectionPage.css"
import "../UserPage/userPage.css"
import gear from "../UserPage/Gear.png"
import "./Categories.css"

function Categories({ category, currentscene }) {
    const editMode = useSelector(state => state.editMode.editMode)

    return (
        <div className="categoryContainer" style={{ border: `1px solid ${category.color}` }}>
            <div className="categoryName">
                Category: {category.name}
                {editMode && <img src={gear} className="categoryEditGear" draggable="false" alt=""></img>}
            </div>

            {category.sounds.map(mySoundObj =>
                <SoundModule mySoundObj={mySoundObj} color={category.color} key={`soundKey-${mySoundObj.id}`} currentscene={currentscene}></SoundModule>
            )}
        </div>
    )
}

export default Categories
