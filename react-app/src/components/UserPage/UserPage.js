import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useHistory } from "react-router-dom";
import { getUserInfo } from "../../store/userPage"
import { getUserSounds } from "../../store/sound";
import "./userPage.css"
import collection_img from "./collectionIcon.png"
import new_collection_img from "./newCollectionIcon.png"
import mySoundPlay from "./mySoundPlay.png"
import homepageLogo from "../HomePage/homepageLogo.gif"
import logoAnimation from "../HomePage/logoAnimationGreen.gif"
import gear from "./Gear.png"
import { logout } from "../../store/session";
import { setRedirectFunc } from "../../store/redirect";


function UserPage() {
    // const [user, setUser] = useState({});
    // Notice we use useParams here instead of getting the params
    // From props.
    const { id } = useParams();
    const dispatch = useDispatch()
    const history = useHistory()
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getUserSounds(id))
    }, [dispatch, id]);

    useEffect(()=>{
        dispatch(setRedirectFunc(`/users/${id}`))
    }, [dispatch, id])

    const onLogout = async (e) => {
        await dispatch(logout());
        history.push('/')
      };
    const editModeFunc = (e) => {
        e.preventDefault()
        editMode ? setEditMode(false) : setEditMode(true)
    }

    const collections = useSelector(state => state.userInfo.info)
    const sounds = useSelector(state => state.newSound.sounds)
    const user = useSelector(state => state.session)


    useEffect(()=>{
        if(user?.user?.id != id){
            history.push(`/users/${user.user.id}`)
        }
    }, [user])
    // if(user.id !== id) history.push(`/users/${user.id}`);
    // console.log(user)
    // const user = useSelector(state => state.session.user)
    // useEffect(()=>{
    //   if(collections.collections){
    //   console.log(collections?.collections)}
    // })

    return (
        <div className="userPageContainer">
            <div className="blackBar"></div>
            <div className="userPageHeader">

                    <div className="userPageLogo-container">
                        <img className="userPageLogo" src={homepageLogo} alt=""></img>
                        <img className="userPageLogo-anim" src={logoAnimation} alt=""></img>
                    </div>
                    <div className="homeButton">
                        <div className="logOut" onClick={onLogout}>Log Out</div>
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

            <div className="userpageBody">

                <div className="contentContainer">
                    <div className="contentTitle">My Collections</div>
                    <div className="userContentBox">
                        {collections?.collections.map(el =>
                            <Link to={!editMode ? `/collection/${el.id}` : `#`} className="contentLink" key={`collectionKey-${el.id}`}>

                                <img src={collection_img} className="contentImg" draggable="false" alt={`collectionImg-${el.id}`}></img>
                                <div key={`collectionKey-${el.id}`} className="contentName">{el.name} </div>
                                    {editMode && <img src={gear} className="linkEditGear" draggable="false" alt={`editGear-${el.id}`}></img>}

                            </Link>
                        )}

                            <Link to="/collection/new" className="contentLink">
                                <img src={new_collection_img} className="contentImg" alt="New Collection Link" draggable="false"></img>
                                <div className="contentName">New Collection</div>
                            </Link>
                    </div>
                </div>

                <div className="contentContainer">
                    <div className="contentTitle">My Sounds</div>
                    <div className="userContentBox">
                        {sounds?.sounds?.map(el =>
                            <Link to={!editMode ? `/sound/${el.id}` : `/sound/${el.id}/edit`} className="contentLink" key={`soundKey-${el.id}`}>
                                <img src={mySoundPlay} className="contentImg" alt="Content Link" draggable="false"></img>
                                <div className="contentName">{el.name}</div>
                                {editMode && <img src={gear} className="linkEditGear" draggable="false" alt=""></img>}
                            </Link>
                        )}

                            <Link to="/sound" className="contentLink">
                                <img src={new_collection_img} className="contentImg" alt="New Collection Link" draggable="false"></img>
                                <div className="contentName">New Sound</div>
                            </Link>
                    </div>
                </div>

            </div>



            {/* {collections?.collections.map(el =>
      <div>{el.name}</div>
    )} */}


        </div>
    );
}
export default UserPage;
