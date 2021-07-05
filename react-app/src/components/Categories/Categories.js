import React from "react"
// import Scene from "../Scene"

import "./Categories.css"

function Categories({category}){
    console.log(category.sounds, "==+============")
    return(
        <div className="categoryContainer" style={{border: `1px solid ${category.color}`}}>
            <div className="categoryName">Category: {category.name}</div>

        </div>
    )}

export default Categories
