import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import HomePage from "../HomePage";
import FauxUserPage from "../FauxUserPage";


const CategorySound = () => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user)
    // const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {catId, soundId} = useParams();
    const user = useSelector(state => state.session.user)
    console.log("CAAAAAAT", catId, "SOOOOOUUUUUUNNNNND", soundId)

    const removeSound = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/categories/${catId}/${soundId}`);
        const data = await response.json();
        if(data.erros){
            alert(data.errors)
        } else{
            history.push(`/`)
        }

        // const data = await dispatch(login(catId, soundId));
        // if (data.errors) {
        //     alert(data.errors);
        // } else {
        // }
    };


    // if (user) {
    //     return <Redirect to="/" />;
    // }

    const goHome = () => {
       //to do - make a conditional to return to userpage or sound page
        history.push(`/users/${user?.id}`)
    }

    const editSound = () => {
        history.push(`/sound/${soundId}/edit`)
    }

    return (
        <>
            <div className="new_sound_form" style={{top: "225px"}}>
                {/* <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div> */}
                <div className="close_new_sound" onClick={goHome}>X</div>
                <div className="formTitle">Edit Sound</div>
                <button onClick={editSound} className="new_sound_submit">Edit Sound</button>

                <div className="formTitle">Remove Sound</div>
                <button onClick={removeSound} className="new_sound_submit">Remove</button>
            </div>
            <div className="black_backer"></div>
            <FauxUserPage></FauxUserPage>
        </>
    );
};

export default CategorySound;
