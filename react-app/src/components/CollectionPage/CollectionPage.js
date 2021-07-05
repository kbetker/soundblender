import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getUserCollection } from "../../store/collection"
// import { getUserSounds } from "../../store/sound";
import "../UserPage/userPage.css"
import "../Scene/Scene.css"
// import collection_img from "../UserPage/collectionIcon.png"
// import new_collection_img from "../UserPage/newCollectionIcon.png"
// import mySoundPlay from "../UserPage/mySoundPlay.png"
import homepageLogo from "../HomePage/homepageLogo.gif"
import logoAnimation from "../HomePage/logoAnimationGreen.gif"
import gear from "../UserPage/Gear.png"
import { logout } from "../../store/session";
import Scene from "../Scene"
import { useRef } from "react";

function CollectionPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const [editMode, setEditMode] = useState(false)
    const { id } = useParams();
    // const windoWith = useRef(window.innerWidth)
    const [windoWith, setWindowWidth] = useState(window.innerWidth)
    const currentScene = useRef("1")

    useEffect(() => {
        dispatch(getUserCollection(id))
    }, [dispatch, id]);

    const collection = useSelector(state => state.collection)
    const sceneLength =collection?.collection?.scenes.length


    const onLogout = async (e) => {
        await dispatch(logout());
        history.push('/')
      };

    const goHome = () => {
        history.push('/users/1') //to do - change to current user
      }

      const editModeFunc = (e) => {
        e.preventDefault()
        editMode ? setEditMode(false) : setEditMode(true)
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

                    <div className="homeButton">
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
                    <div className="nexPrevScene" onClick={() => changeSceneFunc("left")}>V</div>

                    <div className="scenePages" style={{width: `${windoWith - 80}px`}}>
                        <div className="scenePage"style={{width: `${(windoWith * sceneLength)}px`}} >
                            {collection?.collection?.scenes.map((scene, index) =>
                                <Scene scene={scene} key={`sceneKey-${scene.id}`} id={`${index + 1}`}></Scene>
                            )}
                        </div>
                     </div>

                     <div className="nexPrevScene"  onClick={() => changeSceneFunc("right")}>V</div>
                </div>
        </div>
        </>


    )
}

export default CollectionPage
