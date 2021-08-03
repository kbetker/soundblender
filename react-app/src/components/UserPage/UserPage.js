import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getUserInfo } from "../../store/userPage"
import { getUserSounds } from "../../store/sound";
import "./userPage.css"
import "../HomePage/HomePage.css"
import collection_img from "./collectionIcon.png"
import new_collection_img from "./newCollectionIcon.png"
import mySoundPlay from "./mySoundPlay.png"
import homepageLogo from "../HomePage/homepageLogo.gif"
import logoAnimation from "../HomePage/logoAnimationGreen.gif"
import gear from "./Gear.png"
import { logout } from "../../store/session";
import { setRedirectFunc } from "../../store/redirect";
import { setModalState } from "../../store/modal"
import SoundForm from "../SoundForm/SoundForm";
import SoundEditForm from "../SoundEditForm/SoundEditForm";
import SoundPreview from "../SoundPreview/SoundPreview";
import SoundDelete from "../SoundDelete";
import CollectionEdit from "../CollectionEdit"
import CollectionDelete from "../CollectionDelete"
import CollectionNew from "../CollectionNew"
import { getAllUserCollection } from "../../store/collection";





function UserPage() {
    const { id } = useParams();
    const modal = useSelector(state => state.modal.modal)
    const dispatch = useDispatch()
    const history = useHistory()
    const [editMode, setEditMode] = useState(false)
    const [currentSoundId, setCurrentSoundId] = useState('')
    const [currentCollectionId, setCurrentCollectionId] = useState('')


    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getUserSounds(id))
    }, [dispatch, id]);

    useEffect(()=>{
        dispatch(setRedirectFunc(`/users/${id}`))
    }, [dispatch, id])

    useEffect(()=>{
        dispatch(getAllUserCollection(id))
    }, [dispatch, id])

    const onLogout = async (e) => {
        await dispatch(logout());
        history.push('/')
      };
    const editModeFunc = (e) => {
        e.preventDefault()
        editMode ? setEditMode(false) : setEditMode(true)
    }

    const collections = useSelector(state => state.collection.collection)
    const sortedCollections = collections?.collection.sort(function(a, b){
        if (a.name.toLowerCase() < b.name.toLowerCase()){return -1}
        if (a.name.toLowerCase() > b.name.toLowerCase()){return 1}
        return 0
    })


    const sounds = useSelector(state => state.newSound.sounds)
    const user = useSelector(state => state.session)
    const sortedSounds = sounds?.sounds?.sort((soundA, soundB) => {
        if (soundA.name.toLowerCase() < soundB.name.toLowerCase()){return -1}
        if (soundA.name.toLowerCase() > soundB.name.toLowerCase()){return 1}
        return 0
    })

    useEffect(()=>{
        if(user?.user?.id !== id){
            history.push(`/users/${user.user.id}`)
        }
    }, [user])

    const setModalFunc = async (modalState) => {
        await dispatch(setModalState(modalState))
    }

    function editSoundProp(id){
        setCurrentSoundId(id);
        setModalFunc("editSound")
    }

    function previewSoundIdProp(id){
       setCurrentSoundId(id);
        setModalFunc("soundPreview")
    }

    function editCollectionProp(id){
        setCurrentCollectionId(id);
        setModalFunc("collectionEdit")
    }



    return (
        <>
         {modal === "newSound" && <SoundForm />}
         {modal === "editSound" && <SoundEditForm currentSoundId={currentSoundId} />}
         {modal === "soundPreview" && <SoundPreview currentSoundId={currentSoundId} />}
         {modal.endsWith("soundDelete") && <SoundDelete currentSoundId={currentSoundId} />}

         {modal === "collectionEdit" && <CollectionEdit currentCollectionId={currentCollectionId} />}
         {modal === "collectionDelete" && <CollectionDelete currentCollectionId={currentCollectionId} />}
         {modal === "collectionNew" && <CollectionNew currentCollectionId={currentCollectionId} />}


        <div className={modal === "" ? "userPageContainer modalEffect" : "userPageContainer modalEffect darkblur"}>
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
                            <div onClick={()=> setModalFunc("collectionNew")} className="contentLink">
                                <img src={new_collection_img} className="contentImg" alt="New Collection Link" draggable="false"></img>
                                <div className="contentName">New Collection</div>
                            </div>
                        {sortedCollections?.map(el =>
                            // <Link to={!editMode ? `/collection/${el.id}` : `/collection/${el.id}/edit`} className="contentLink" key={`collectionKey-${el.id}`}>
                            <div onClick= {!editMode ? () => history.push(`/collection/${el.id}`) : () => editCollectionProp(el.id)} className="contentLink" key={`collectionKey-${el.id}`}>
                                <img src={collection_img} className="contentImg" draggable="false" alt={`collectionImg-${el.id}`}></img>
                                <div key={`collectionKey-${el.id}`} className="contentName">{el.name} </div>
                                    {editMode && <img src={gear} className="linkEditGear" draggable="false" alt={`editGear-${el.id}`}></img>}
                            </div>
                        )}


                    </div>
                </div>

                <div className="contentContainer">
                    <div className="contentTitle">My Sounds</div>
                    <div className="userContentBox">
                            <div onClick={()=> setModalFunc("newSound")} className="contentLink">
                                <img src={new_collection_img} className="contentImg" alt="New Collection Link" draggable="false"></img>
                                <div className="contentName">New Sound</div>
                            </div>
                        {sortedSounds?.map(el =>
                            // <Link to={!editMode ? `/sound/${el.id}` : `/sound/${el.id}/edit`} className="contentLink" key={`soundKey-${el.id}`}>
                            <div onClick= {!editMode ? () => previewSoundIdProp(el.id) : () => editSoundProp(el.id)} className="contentLink" key={`collectionKey-${el.id}`}>
                                <img src={mySoundPlay} className="contentImg" alt="Content Link" draggable="false"></img>
                                <div className="contentName">{el.name}</div>
                                {editMode && <img src={gear} className="linkEditGear" draggable="false" alt=""></img>}
                            </div>
                        )}
                    </div>
                </div>
            </div>



            {/* {collections?.collections.map(el =>
      <div>{el.name}</div>
    )} */}


        </div>
        </>
    );
}
export default UserPage;
