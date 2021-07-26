import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getUserCollection } from "../../store/collection"
import { setEditMode } from "../../store/editMode"
// import { getUserSounds } from "../../store/sound";
import "../UserPage/userPage.css"
import "../Scene/Scene.css"
import "./CollectionPage.css"
// import collection_img from "../UserPage/collectionIcon.png"
// import new_collection_img from "../UserPage/newCollectionIcon.png"
// import mySoundPlay from "../UserPage/mySoundPlay.png"
import homepageLogo from "../HomePage/homepageLogo.gif"
import logoAnimation from "../HomePage/logoAnimationGreen.gif"
import gear from "../UserPage/Gear.png"
import { logout } from "../../store/session";
import Scene from "../Scene"
import { useRef } from "react";
import arrowR from "./arrowR.png"
import arrowL from "./arrowL.png"
import { setRedirectFunc } from "../../store/redirect";
import { getAllUserCollection } from "../../store/collection";
import { setModalState } from "../../store/modal";
import { getUserInfo } from "../../store/userPage";
import SoundEditForm from "../SoundEditForm/SoundEditForm";
import SoundDelete from "../SoundDelete";
import { getUserSounds } from "../../store/sound";
import CategorySound from "../CategorySound/CategorySound";

function CollectionPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { collectionId } = useParams();
    // const windoWith = useRef(window.innerWidth)
    const [windoWith, setWindowWidth] = useState(window.innerWidth)
    const currentScene = useRef("1")
    const user = useSelector(state => state.session.user)
    const modal = useSelector(state => state.modal.modal)
    const [currentSoundId, setCurrentSoundId] = useState('')
    // useEffect(() => {
        //     dispatch(getUserCollection(collectionId))
        // }, [dispatch, collectionId]);

        useEffect(() => {
            dispatch(getUserInfo(user.id))
        }, [dispatch, user.id]);

        useEffect(() => {
            dispatch(getUserSounds(user.id))
        }, [dispatch, user.id]);

        useEffect(() => {
            dispatch(getAllUserCollection(user.id))
            // console.log(user.id, "wuuuuuuuut")
        }, [dispatch, user.id, modal])

        useEffect(() => {
            dispatch(setRedirectFunc(`/collection/${collectionId}`))
        }, [dispatch, collectionId])



    //     useEffect(()=> {
    //         if(modal.endsWith("editSound")){
    //             let getNums = modal.split('-')
    //             // console.log(getNums[0], "WUUUUUUUUUUUUUUUUUUUUUUUUUt")
    //             setCurrentSoundId(parseInt(getNums[0]))
    //         }
    // }, [modal])

    const getCurrentSound = () => {
            let getNums = modal.split('-')
            // setCurrentSoundId(parseInt(getNums[0]))
        return parseInt(getNums[0])
    }

    const getCurrentCategory = () => {
        let getNums = modal.split("-")
        return parseInt(getNums[1])
    }

    const allCollections = useSelector(state => state.collection.collection)
    const collection = allCollections?.collection.find((el) => el.id === parseInt(collectionId))
    const sceneLength = collection?.scenes?.length
    const editMode = useSelector(state => state.editMode.editMode)


    const onLogout = async (e) => {
        await dispatch(logout());
        dispatch(setEditMode(false))
        history.push('/')
    };

    const goHome = () => {
        dispatch(setEditMode(false))
        history.push(`/users/${user.id}`) //to do - change to current user
    }

    const editModeFunc = (e) => {
        e.preventDefault()
        editMode ? dispatch(setEditMode(false)) : dispatch(setEditMode(true))

    }

    // if(collection[0]?.scenes.length === 0){
    //     dispatch(setEditMode(true))
    // }

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
        } else { // "left" is the only other argument
            if (parseInt(currentScene.current) - 1 <= 0) { // loops to end
                currentScene.current = `${sceneLength}`
            } else {
                currentScene.current = `${parseInt(currentScene.current) - 1}`
            }
            changeScene()
        }
    }

    window.addEventListener("resize", (e) => {
        setWindowWidth(window.innerWidth)
        changeSceneFunc("none")
    })

    return (
        <>
            {/* {modal === "newSound" && <SoundForm />} */}
            {modal.endsWith("editSound") && <SoundEditForm currentSoundId={getCurrentSound()} />}
            {modal.endsWith("categorySound") && <CategorySound currentCategoryId={getCurrentCategory()} currentSoundId={getCurrentSound()} />}
            {/* {modal === "soundPreview" && <SoundPreview currentSoundId={currentSoundId} />} */}
            {modal === "soundDelete" && <SoundDelete currentSoundId={currentSoundId} />}

            {/* {modal === "collectionEdit" && <CollectionEdit currentCollectionId={currentCollectionId} />}
            {modal === "collectionDelete" && <CollectionDelete currentCollectionId={currentCollectionId} />}
            {modal === "collectionNew" && <CollectionNew currentCollectionId={currentCollectionId} />} */}

            <div className={modal === "" ? "userPageContainer modalEffect" : "userPageContainer modalEffect darkblur"}>
                <div className="blackBar"></div>
                <div className="userPageHeader">

                    <div className="userPageLogo-container hideSmall">
                        <img className="userPageLogo" src={homepageLogo} alt="" draggable="false"></img>
                        <img className="userPageLogo-anim" src={logoAnimation} alt="" draggable="false"></img>
                    </div>
                    <div className="collectionName">{collection?.name}</div>
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



                            {collection?.scenes?.length === 0 &&
                                <div>
                                    <div className="noScenesContainer" style={{ width: `${window.innerWidth - 122}px` }} id={1}>
                                        <div className="sceneName">
                                            <div>
                                                <Link to={`/scenes/${collection?.id}/new`} className="firstScene">
                                                    Click here to add a scene
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="eachScene">
                                        </div>
                                    </div>
                                </div>
                            }



                            {collection?.scenes.map((scene, index) =>
                                <Scene scene={scene} key={`sceneKey-${scene.id}`} id={`${index + 1}`} currentscene={currentScene}></Scene>
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
