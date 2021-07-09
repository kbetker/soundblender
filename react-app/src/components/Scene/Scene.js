import React from "react"
import { useSelector } from "react-redux"
import Categories from "../Categories/Categories"
import "./Scene.css"
import gear from "../UserPage/Gear.png"
import "../CollectionPage/CollectionPage.css"
import { useHistory, useParams } from "react-router-dom"

function Scene({scene, id, currentscene}){
    const scenes= scene?.categories
    const sceneId = scene?.id
    const editMode = useSelector(state => state.editMode.editMode)
    const {collectionId} = useParams()
    // const dispatch = useDispatch()
    const history = useHistory()

    const editScene = () => history.push(`/scenes/${sceneId}/edit`)
    const newCategory = () => history.push(`/category/new/${sceneId}`)
    const newScene = () => history.push(`/scenes/${collectionId}/new`)
    // console.log(scenes[0].name, "wwwwwaaaaattttttt")

    return(
        // <div className="ScenePageBody"> This div i up one in Categories
        <>

        <div className="sceneContainer" style={{width: `${window.innerWidth-122}px`}} id={id}>
            <div className="sceneName">
                <div>
                    {scene.name}
                    {editMode && <img src={gear} className="sceneEditGear" draggable="false" alt="" onClick={editScene} ></img>}
                </div>
                {(!editMode && scenes.length === 0) && <div className="addCategoryPrompt">Click the spinning gears above to add categories</div>}

                {editMode &&
                <div className="addNewSceneText" onClick={newScene}>
                    Add New Scene
                    {editMode && <img src={gear} className="sceneEditGear" draggable="false" alt=""></img>}
                </div>
                }

            </div>
            <div className="eachScene">
            {scenes.map(category =>
                <Categories category={category} key={`${category.id}`} currentscene={currentscene} sceneId={sceneId}></Categories>
                )
            }  {editMode &&
            <div className="newSceneWrapper" onClick={()=> newCategory()}>
                <img src={gear} className="newSceneGear" draggable="false" alt=""></img>
                <div className="addNewCategoryText" >Add New Category</div>
            </div>
            }

            </div>
        </div>
        </>
    )}

export default Scene
