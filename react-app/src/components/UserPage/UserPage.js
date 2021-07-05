import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserInfo } from "../../store/userPage"
import "./userPage.css"

function UserPage() {
    // const [user, setUser] = useState({});
    // Notice we use useParams here instead of getting the params
    // From props.
    const { id } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUserInfo(id))
    }, [dispatch, id]);

    const collections = useSelector(state => state.userInfo.info)
    console.log(collections?.collections[0].name)

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
                            <div className="contentLink">wat</div>
                        )}
                    </div>
                </div>

                <div className="contentContainer">
                    <div className="contentTitle">My Sounds</div>
                    <div className="userContentBox">

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
