import React from "react"
import { useSelector } from "react-redux"
import Categories from "../Categories/Categories"
import "./Scene.css"
import gear from "../UserPage/Gear.png"
import "../CollectionPage/CollectionPage.css"

function Scene({scene, id, currentscene}){
    const scenes= scene?.categories
    const editMode = useSelector(state => state.editMode.editMode)
    // const windowWidth = window.innerWidth;
    // console.log(scenes.length)
    return(
        // <div className="ScenePageBody"> This div i up one in Categories
        <div className="sceneContainer" style={{width: `${window.innerWidth-122}px`}} id={id}>
            <div className="sceneName">
                Scene: {scene.name}
                {editMode && <img src={gear} className="sceneEditGear" draggable="false" alt=""></img>}
            </div>
            <div className="eachScene">
            {scenes.map(category =>
                <Categories category={category} key={`categoryId-${category.id}`} currentscene={currentscene}></Categories>
                        )
            }

            </div>
        </div>
    )}

export default Scene
