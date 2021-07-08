import React from "react"
import { useSelector } from "react-redux"
import SoundModule from "../SoundModule"
import "../CollectionPage/CollectionPage.css"
import "../UserPage/userPage.css"
import gear from "../UserPage/Gear.png"
import "./Categories.css"
import { useHistory } from "react-router-dom"

function Categories({ category, currentscene }) {
    const editMode = useSelector(state => state.editMode.editMode)
    const history = useHistory()

    const editCategory = () => {
        history.push(`/category/${category.id}/edit`)
    }

    return (
        <div className="categoryContainer" style={{ border: `1px solid ${category.color}` }}>
            <div className="categoryName">
                Category: {category.name}
                {editMode && <img src={gear} className="categoryEditGear" draggable="false" alt="" onClick={editCategory}></img>}
            </div>

            {category.sounds.map(mySoundObj =>
                <SoundModule mySoundObj={mySoundObj} color={category.color} key={`soundKey-${mySoundObj.id}`} currentscene={currentscene} categoryId={category.id}></SoundModule>
            )}
        </div>
    )
}

export default Categories
