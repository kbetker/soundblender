import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import Categories from "../Categories/Categories"
import QuickScene from "../QuickScene"

import gear from "../UserPage/Gear.png"
import buttonOff from "../SoundModule/images/Button_Off.png"
import buttonOn from "../SoundModule/images/button_press.png"
import buttonPress from "../SoundModule/images/button_press2.png"

import { setModalState } from "../../store/modal"
import { setQuickSceneButton } from "../../store/quickSceneButton"
import { midiControl } from "../../store/midiKeyPress"

import "./Scene.css"
import "../CollectionPage/CollectionPage.css"

function Scene({ scene, id, currentscene }) {
    const scenes = scene?.categories
    const sceneId = scene?.id
    const editMode = useSelector(state => state.editMode.editMode)
    const stopAllBtnLight = useSelector(state => state.stopLight)
    const { collectionId } = useParams()
    const dispatch = useDispatch()
    const sortedQuickScenes = scene.quickscenes.sort((soundA, soundB) => {
        if (soundA.id < soundB.id) { return -1 }
        if (soundA.id > soundB.id) { return 1 }
        return 0
    })
    const editScene = () => dispatch(setModalState(`${sceneId}-${collectionId}-sceneEdit`))
    const newCategory = () => dispatch(setModalState(`${sceneId}categoryNew`))
    const newScene = () => dispatch(setModalState(`${collectionId}-sceneNew`))
    const [stopLight, setStopLight] = useState(false)
    const stopAllImg = document.getElementById("quickScenePic")
    if (stopAllImg) stopAllImg.addEventListener("mousedown", () => { setStopLight(true) })
    if (stopAllImg) stopAllImg.addEventListener("mouseup", () => { setStopLight(false) })

    const addQuickScene = () => {
        dispatch(setModalState(`${scene.id}-quickSceneNew`))
    }

    async function stopAllSounds() {
        await dispatch(setQuickSceneButton(["stop"]))
    }

    // document.addEventListener('keydown', (e) => {
    //     if(e.key === 's'){
    //         stopAllSounds()
    //     }
    // })

    //=============  listening for MIDI Input ===================
    useEffect(() => {
        navigator.requestMIDIAccess().then(access => {
            const devicesInput = access.inputs.values();
            for (let input of devicesInput) {
                input.onmidimessage = onMidiMesage;
            }
        })

        function onMidiMesage(message) {
            dispatch(midiControl([message.data[1], message.data[2], scene.id]))
        }
    }, [])

    return (
        <>
            <div className="sceneContainer" style={{ width: `${window.innerWidth - 122}px` }} id={id}>

                <div className="quickSceneContainer">

                    {id === "1" &&
                        <div className="quickSceneComponent" onClick={() => stopAllBtnLight.length > 0 && stopAllSounds()}>
                            <div className="quickSceneTitle">&#40;S&#41;top All</div>
                            <img src={
                                stopAllBtnLight.length > 0 && !stopLight ? buttonOn
                                    : stopAllBtnLight.length > 0 && stopLight ? buttonPress
                                        : buttonOff

                            } className="quickScenePic" id="quickScenePic" alt="" draggable={false}></img>
                        </div>
                    }
                    {sortedQuickScenes.map(quickScene =>
                        <QuickScene quickScene={quickScene} scene={scene} key={`${quickScene.id}-QuickScene`} />
                    )}
                    {editMode &&
                        <div onClick={() => addQuickScene()} className="quickSceneComponent hover">
                            <img src={gear} className="quicksceneEditGear" alt=""></img>
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
