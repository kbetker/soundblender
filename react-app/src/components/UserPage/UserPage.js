import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUserInfo } from "../../store/userPage"
import { getUserSounds } from "../../store/sound";
import "./userPage.css"
import collection_img from "./collectionIcon.png"
import new_collection_img from "./newCollectionIcon.png"
import mySoundPlay from "./mySoundPlay.png"

function UserPage() {
    // const [user, setUser] = useState({});
    // Notice we use useParams here instead of getting the params
    // From props.
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [dispatch, id]);

    useEffect(() => {
        dispatch(getUserSounds(id))
    }, [dispatch, id]);

    const collections = useSelector(state => state.userInfo.info)
    const sounds = useSelector(state => state.newSound.sounds)
    console.log(sounds?.sounds)
    // useEffect(()=>{
    //   if(collections.collections){
    //   console.log(collections?.collections)}
    // })

    return (
        <div className="userPageContainer">

            <div className="userPageHeader">wat</div>

            <div className="userpageBody">

                <div className="contentContainer">
                    <div className="contentTitle">My Collections</div>
                    <div className="userContentBox">
                        {collections?.collections.map(el =>
                            <Link to={`/collections/${el.id}`} className="contentLink" key={`collectionKey-${el.id}`}>
                                <img src={collection_img} className="contentImg" alt="Content Link" draggable="false"></img>
                                <div key={`collectionKey-${el.id}`}>{el.name}</div>
                            </Link>
                        )}

                            <Link to="collections/new" className="contentLink">
                                <img src={new_collection_img} className="contentImg" alt="New Collection Link" draggable="false"></img>
                                <div>New Collection</div>
                            </Link>
                    </div>
                </div>

                <div className="contentContainer">
                    <div className="contentTitle">My Sounds</div>
                    <div className="userContentBox">
                        {sounds?.sounds.map(el =>
                            <Link to={`/collections/${el.id}`} className="contentLink" key={`soundKey-${el.id}`}>
                                <img src={mySoundPlay} className="contentImg" alt="Content Link" draggable="false"></img>
                                <div>{el.name}</div>
                            </Link>
                        )}

                            <Link to="collections/new" className="contentLink">
                                <img src={new_collection_img} className="contentImg" alt="New Collection Link" draggable="false"></img>
                                <div>New Sound</div>
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
