import React from "react"
import SoundModule from "../SoundModule"

import "./Categories.css"

function Categories({ category }) {
    return (
        <div className="categoryContainer" style={{ border: `1px solid ${category.color}` }}>
            <div className="categoryName">Category: {category.name}</div>
            {category.sounds.map(mySoundObj =>
                <SoundModule mySoundObj={mySoundObj} color={category.color} key={`soundKey-${mySoundObj.id}`}></SoundModule>
            )}
        </div>
    )
}

export default Categories
