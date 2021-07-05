import React from "react"
import Categories from "../Categories/Categories"
import "./Scene.css"

function Scene({scene, id}){
    const scenes= scene?.categories
    // const windowWidth = window.innerWidth;
    // console.log(scenes.length)
    return(
        // <div className="ScenePageBody"> This div i up one in Categories
        <div className="sceneContainer" style={{width: `${window.innerWidth-122}px`}} id={id}>
            <div className="sceneName">Scene: {scene.name}</div>
            <div className="eachScene">
            {scenes.map(category =>
                <Categories category={category} key={`categoryId-${category.id}`}></Categories>
                        )
            }
            </div>
        </div>
    )}

export default Scene
