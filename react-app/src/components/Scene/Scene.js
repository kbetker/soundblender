import React from "react"
import Categories from "../Categories/Categories"
import "./Scene.css"

function Scene({scene}){
    const scenes= scene?.categories

    console.log(scenes, "==+============")
    return(
        <div className="sceneContainer">
            <div className="sceneName">Scene: {scene.name}</div>
            {scenes.map(category =>
                <Categories category={category} key={`categoryId-${category.id}`}></Categories>
                        )
            }
        </div>
    )}

export default Scene
