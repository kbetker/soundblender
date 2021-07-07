import React from "react";
import "../UserPage/userPage.css"
import "./FauxUserPage.css"
import new_collection_img from "./newCollectionIcon.png"
import homepageLogo from "../HomePage/homepageLogo.gif"
import logoAnimation from "../HomePage/logoAnimationGreen.gif"
import gear from "./Gear.png"


function FauxUserPage() {

    return (
        <div className="fauxUserPageContainer">
            <div className="blackBar"></div>
            <div className="userPageHeader">

                    <div className="userPageLogo-container">
                        <img className="userPageLogo" src={homepageLogo} alt=""></img>
                        <img className="userPageLogo-anim" src={logoAnimation} alt=""></img>
                    </div>
                    <div className="homeButton">
                        <div className="logOut">Log Out</div>
                        <div className="gears">

                                    <img src={gear} className="gear1 cw"  draggable="false" alt=""></img>
                                    <img src={gear} className="gear2 ccw"  draggable="false" alt=""></img>

                        </div>
                    </div>

            </div>

            <div className="userpageBody">

                <div className="contentContainer">
                    <div className="contentTitle">My Collections</div>
                    <div className="userContentBox">

                            <div className="contentLink">
                                <img src={new_collection_img} className="contentImg" alt="New Collection Link" draggable="false"></img>
                                <div className="contentName">New Collection</div>
                            </div>
                    </div>
                </div>

                <div className="contentContainer">
                    <div className="contentTitle">My Sounds</div>
                    <div className="userContentBox">
                            <div to="/sound" className="contentLink">
                                <img src={new_collection_img} className="contentImg" alt="New Collection Link" draggable="false"></img>
                                <div className="contentName">New Sound</div>
                            </div>
                    </div>
                </div>

            </div>



            {/* {collections?.collections.map(el =>
      <div>{el.name}</div>
    )} */}


        </div>
    );
}
export default FauxUserPage;
