import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Categories from "../Categories/Categories"
import "./Scene.css"
import gear from "../UserPage/Gear.png"
import "../CollectionPage/CollectionPage.css"
import { useHistory, useParams } from "react-router-dom"
import { setModalState } from "../../store/modal"
import buttonOff from "../SoundModule/images/Button_Off.png"
import QuickScene from "../QuickScene"

function Scene({ scene, id, currentscene }) {
    const scenes = scene?.categories
    const sceneId = scene?.id
    const editMode = useSelector(state => state.editMode.editMode)
    const { collectionId } = useParams()
    // const dispatch = useDispatch()
    const history = useHistory()
    const dispatch = useDispatch()

    const editScene = () => dispatch(setModalState(`${sceneId}-${collectionId}-sceneEdit`))
    const newCategory = () => dispatch(setModalState(`${sceneId}categoryNew`))
    const newScene = () => dispatch(setModalState(`${collectionId}-sceneNew`))

    const addQuickScene = () =>{
        dispatch(setModalState(`${scene.id}-quickSceneNew`))
    }

    return (
        // <div className="ScenePageBody"> This div i up one in Categories
        <>



            <div className="sceneContainer" style={{ width: `${window.innerWidth - 122}px` }} id={id}>

                <div className="quickSceneContainer">

                    <div className="quickSceneComponent">
                        <div className="quickSceneTitle">Stop All</div>
                        <img src={buttonOff} className="quickScenePic"></img>
                    </div>

                    {scene.quickscenes.map(scene =>
                        <QuickScene scene={scene} key={scene.id} />
                    )}
                    {editMode &&
                    <div onClick={()=>addQuickScene()} className="quickSceneComponent hover">
                        <img src={gear} className="quicksceneEditGear"></img>
                        <div className="quickSceneTitle">Add QuickScene</div>
                        {/* <img src={buttonOff} className="quickScenePic"></img> */}
                    </div>
                    }



                </div>



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
                        <div className="newSceneWrapper" onClick={() => newCategory()}>
                            <img src={gear} className="newSceneGear" draggable="false" alt=""></img>
                            <div className="addNewCategoryText" >Add New Category</div>
                        </div>
                    }

                </div>


            </div>

        </>
    )
}

export default Scene
