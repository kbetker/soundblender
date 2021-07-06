import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
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

function CollectionPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams();
    // const windoWith = useRef(window.innerWidth)
    const [windoWith, setWindowWidth] = useState(window.innerWidth)
    const currentScene = useRef("1")

    useEffect(() => {
        dispatch(getUserCollection(id))
    }, [dispatch, id]);

    const collection = useSelector(state => state.collection)
    const sceneLength =collection?.collection?.scenes.length
    const editMode = useSelector(state => state.editMode.editMode)
    const user = useSelector(state => state.session.user)


    const onLogout = async (e) => {
        await dispatch(logout());
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

    // console.log(currentScene.current, "+++++++++++ BEFORE FUNCTION ++++++++++")
    function changeSceneFunc(direction){
        // console.log(currentScene.current, "+++++++++++ Right in side ++++++++++")
        function changeScene(){
            let currentDiv = document.getElementById(currentScene.current)
            if(currentDiv){
            currentDiv.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
            }
        }

        if(direction === "none"){
            changeScene()
        } else if (direction === "right"){
                if(parseInt(currentScene.current) + 1 > sceneLength) {
                    currentScene.current = "1"
                } else {
                    currentScene.current = `${parseInt(currentScene.current) + 1}`
                }
                changeScene()
        } else {
            if(parseInt(currentScene.current) - 1 <= 0 ) {
                currentScene.current = `${sceneLength}`
            } else {
                currentScene.current = `${parseInt(currentScene.current) - 1}`
            }
            changeScene()
        }
    }

    window.addEventListener("resize", (e) =>{
        setWindowWidth(window.innerWidth)
        changeSceneFunc("none")
    })

    return(
        <>
        <div className="userPageContainer">
            <div className="blackBar"></div>
            <div className="userPageHeader">

                    <div className="userPageLogo-container">
                        <img className="userPageLogo" src={homepageLogo} alt=""></img>
                        <img className="userPageLogo-anim" src={logoAnimation} alt=""></img>
                    </div>
                    <div className="collectionName">{collection.collection?.name}</div>
                    <div className="collectionNav">
                        <div className="logOut" onClick={onLogout}>Log Out</div>
                        <div> | </div>
                        <div className="logOut" onClick={goHome}>Home</div>
                        <div className="gears" onClick={(e) =>editModeFunc(e)}>
                            {editMode ?
                                <>
                                    <img src={gear} className="gear1" draggable="false" alt=""></img>
                                    <img src={gear} className="gear2"  draggable="false" alt=""></img>
                                </>
                                :
                                <>
                                    <img src={gear} className="gear1 cw"  draggable="false" alt=""></img>
                                    <img src={gear} className="gear2 ccw"  draggable="false" alt=""></img>
                                </>}
                        </div>
                    </div>

            </div>
                <div className="ScenePageBody" style={{width: `${windoWith}px`}}>
                    <div className="prevScene" onClick={() => changeSceneFunc("left")}><img src={arrowL}></img></div>

                    <div className="scenePages" style={{width: `${windoWith - 80}px`}}>
                        <div className="scenePage"style={{width: `${(windoWith * sceneLength)}px`}} >
                            {collection?.collection?.scenes.map((scene, index) =>
                                <Scene scene={scene} key={`sceneKey-${scene.id}`} id={`${index + 1}`} currentscene={currentScene}></Scene>
                                )}
                        </div>
                     </div>

                     <div className="nextScene"  onClick={() => changeSceneFunc("right")}><img src={arrowR}></img></div>
                </div>
        </div>
        </>


    )
}

export default CollectionPage
