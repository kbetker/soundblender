import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "../UserPage/userPage.css"
import "../Scene/Scene.css"
import "./CollectionPage.css"

import { logout } from "../../store/session";
import { setRedirectFunc } from "../../store/redirect";
import { getAllUserCollection } from "../../store/collection";
import { setEditMode } from "../../store/editMode"
import { setModalState } from "../../store/modal";
import { getUserSounds } from "../../store/sound";
import { getUserInfo } from "../../store/userPage";
import { clearLights } from "../../store/stopAllLights";
import { midiControl } from "../../store/midiKeyPress";

import SoundEditForm from "../SoundEditForm/SoundEditForm";
import SoundDelete from "../SoundDelete";
import AddSoundToCategory from "../AddSoundToCategory"
import CategorySound from "../CategorySound/CategorySound";
import CategoryEdit from "../CategoryEdit"
import CategoryNew from "../CategoryNew"
import CategoryDelete from "../CategoryDelete"
import SceneNew from "../SceneNew/SceneNew";
import SceneEdit from "../SceneEdit"
import SceneDelete from "../SceneDelete"
import QuickSceneNew from "../QuickSceneNew/QuickSceneNew";
import QuickSceneEdit from "../QuickSceneEdit";
import QuickSceneDelete from "../QuickSceneDelete";

import logoAnimation from "../HomePage/logoAnimationGreen.gif"
import homepageLogo from "../HomePage/homepageLogo.gif"
import gear from "../UserPage/Gear.png"
import Scene from "../Scene"
import arrowR from "./arrowR.png"
import arrowL from "./arrowL.png"

function CollectionPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { collectionId } = useParams();
    const [windoWith, setWindowWidth] = useState(window.innerWidth)
    const currentScene = useRef("1")
    const user = useSelector(state => state.session.user)
    const modal = useSelector(state => state.modal.modal)

    useEffect(() => {
        dispatch(getUserInfo(user.id))
    }, [dispatch, user.id, modal]);

    useEffect(() => {
        dispatch(getUserSounds(user.id))
    }, [dispatch, user.id]);

    useEffect(() => {
        dispatch(getAllUserCollection(user.id))
    }, [dispatch, user.id, modal])

    useEffect(() => {
        if (modal === "sceneFocus") {
            currentScene.current = `${sceneLength + 1}`
            dispatch(setModalState(''))
            setTimeout(() => {
                changeSceneFunc()
            }, 530);
        }
    }, [modal])

    useEffect(() => {
        dispatch(setRedirectFunc(`/collection/${collectionId}`))
    }, [dispatch, collectionId])


    const getIdAt0 = () => {
        let getNums = modal.split('-')
        return parseInt(getNums[0])
    }

    const getIdAt1 = () => {
        let getNums = modal.split("-")
        return parseInt(getNums[1])
    }

    const allCollections = useSelector(state => state.collection.collection)
    const currentCollection = allCollections?.collection.find((el) => el.id === parseInt(collectionId))
    const sortedScenes = currentCollection?.scenes.sort(function (a, b) {
        if (a.id < b.id) { return -1 }
        if (a.id > b.id) { return 1 }
        return 0
    })

    const sceneLength = sortedScenes?.length
    const editMode = useSelector(state => state.editMode.editMode)

    const onLogout = async (e) => {
        await dispatch(logout());
        dispatch(setEditMode(false))
        history.push('/')
    };

    const goHome = () => {
        dispatch(setEditMode(false))
        dispatch(clearLights())
        history.push(`/users/${user.id}`)
    }

    const editModeFunc = (e) => {
        e.preventDefault()
        editMode ? dispatch(setEditMode(false)) : dispatch(setEditMode(true))
    }

    function changeSceneFunc(direction) {

        function changeScene() {
            let currentDiv = document.getElementById(currentScene.current)
            if (currentDiv) {
                currentDiv.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
            }
        }

        if (direction === "none") { // "none" is passed when resizing the window so the current scene will stay in view
            changeScene()
        } else if (direction === "right") {
            if (parseInt(currentScene.current) + 1 > sceneLength) { //loops to begining
                currentScene.current = "1"
            } else {
                currentScene.current = `${parseInt(currentScene.current) + 1}`
            }
            changeScene()
        } else if (direction === "left") {
            if (parseInt(currentScene.current) - 1 <= 0) { // loops to end
                currentScene.current = `${sceneLength}`
            } else {
                currentScene.current = `${parseInt(currentScene.current) - 1}`
            }
            changeScene()
        } else {
            changeScene()
        }
    }

    window.addEventListener("resize", (e) => {
        setWindowWidth(window.innerWidth)
        changeSceneFunc("none")
    })


    function getAllSounds() {
        let theSound = {}
        let sceneId = getIdAt0()
        let currentScene = sortedScenes.find(scene => scene.id === sceneId)
        let cats = currentScene.categories

        cats.map(category => {
            for (let i = 0; i < category.sounds.length; i++) {
                let soundName = category.sounds[i].name
                let soundId = category.sounds[i].id
                if (!(soundName in theSound)) {
                    theSound[soundName] = soundId
                }
            }
        })
        return theSound;
    }


    function getCurrentQS() {
        let sceneId = getIdAt0()
        let quickSceneId = getIdAt1()
        let currentScene = sortedScenes.find(scene => scene.id === sceneId)
        let currentQuickSCene = currentScene.quickscenes.find((qs) => qs.id === quickSceneId)
        // console.log(currentQuickSCene, "CURRENT QUICKSCENE <================")
        return currentQuickSCene
    }

    // if(sortedScenes){
    //     getAllSounds()
    // }



    return (
        <>
            {modal.endsWith("categorySound") && <CategorySound currentCategoryId={getIdAt1()} currentSoundId={getIdAt0()} />}
            {modal.endsWith("addSoundToCategory") && <AddSoundToCategory currentCategoryId={getIdAt1()} />}

            {modal.endsWith("editSound") && <SoundEditForm currentCategoryId={getIdAt1()} currentSoundId={getIdAt0()} />}
            {modal.endsWith("soundDelete") && <SoundDelete currentSoundId={getIdAt0()} />}

            {modal.endsWith("categoryEdit") && <CategoryEdit currentCategoryId={getIdAt1()} />}
            {modal.endsWith("categoryNew") && <CategoryNew currentSceneId={getIdAt0()} />}
            {modal.endsWith("categoryDelete") && <CategoryDelete currentCategoryId={getIdAt1()} />}

            {modal.endsWith("sceneNew") && <SceneNew currentCollectionId={getIdAt0()} />}
            {modal.endsWith("sceneEdit") && <SceneEdit currentSceneId={getIdAt0()} currentCollectionId={getIdAt1()} />}
            {modal.endsWith("sceneDelete") && <SceneDelete currentSceneId={getIdAt0()} currentCollectionId={getIdAt1()} />}

            {modal.endsWith("quickSceneNew") && <QuickSceneNew currentSceneId={getIdAt0()} currentCollectionSounds={getAllSounds()} />}
            {modal.endsWith("quickSceneEdit") && <QuickSceneEdit currentSceneId={getIdAt0()} currentCollectionSounds={getAllSounds()} currentQuickscene={getCurrentQS()} />}
            {modal.endsWith("quickSceneDelete") && <QuickSceneDelete currentQuickscene={getIdAt0()} />}






            {/* {modal === "collectionDelete" && <CollectionDelete currentCollectionId={currentCollectionId} />}
            {modal === "collectionNew" && <CollectionNew currentCollectionId={currentCollectionId} />} */}
            <div className={modal === "" ? "userPageContainer modalEffect" : "userPageContainer modalEffect darkblur"}>
                <div className="blackBar"></div>
                <div className="userPageHeader">

                    <div className="userPageLogo-container hideSmall">
                        <img className="userPageLogo" src={homepageLogo} alt="" draggable="false"></img>
                        <img className="userPageLogo-anim" src={logoAnimation} alt="" draggable="false"></img>
                    </div>
                    <div className="collectionName">{currentCollection?.name}</div>
                    <div className="collectionNav">
                        <div className="logOut" onClick={onLogout}>Log Out</div>
                        <div> | </div>
                        <div className="goHome" onClick={goHome}>Home</div>
                        <div className="gears" onClick={(e) => editModeFunc(e)}>
                            {editMode ?
                                <>
                                    <img src={gear} className="gear1" draggable="false" alt=""></img>
                                    <img src={gear} className="gear2" draggable="false" alt=""></img>
                                </>
                                :
                                <>
                                    <img src={gear} className="gear1 cw" draggable="false" alt=""></img>
                                    <img src={gear} className="gear2 ccw" draggable="false" alt=""></img>
                                </>}
                        </div>
                    </div>

                </div>
                <div className="ScenePageBody" style={{ width: `${windoWith}px` }}>
                    <div className="prevScene" onClick={() => changeSceneFunc("left")} ><img src={arrowL} draggable="false" alt="sceneLeft"></img></div>

                    <div className="scenePages" style={{ width: `${windoWith - 80}px` }}>
                        <div className="scenePage" style={{ width: `${(windoWith * sceneLength)}px` }} >



                            {sortedScenes?.length === 0 &&
                                <div>
                                    <div className="noScenesContainer" style={{ width: `${window.innerWidth - 122}px` }} id={1}>
                                        <div className="sceneName">
                                            <div>
                                                <div onClick={() => dispatch(setModalState(`${collectionId}-sceneNew`))} className="firstScene">
                                                    Click here to add a scene
                                                </div>
                                            </div>
                                        </div>
                                        <div className="eachScene">
                                        </div>
                                    </div>
                                </div>
                            }



                            {sortedScenes?.map((scene, index) =>
                                <Scene scene={scene} key={`sceneKey-${scene.id}`} id={`${index + 1}`} currentscene={currentScene} currentCollection={currentCollection}></Scene>

                            )}
                        </div>
                    </div>

                    <div className="nextScene" onClick={() => changeSceneFunc("right")}><img src={arrowR} draggable="false" alt="sceneRight"></img></div>
                </div>
            </div>



        </>


    )
}

export default CollectionPage
