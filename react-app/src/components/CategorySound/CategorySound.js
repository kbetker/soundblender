import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import HomePage from "../HomePage";
import FauxUserPage from "../FauxUserPage";
import "../SoundDelete/SoundDelete.css"


const CategorySound = () => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user)
    // const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const {catId, soundId} = useParams();
    const user = useSelector(state => state.session.user)
    const redirect = useSelector(state => state.redirectPage.page)


    const removeSound = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/categories/${catId}/${soundId}`, {method: "DELETE"});
        const data = await response.json();
        if(data.erros){
            alert(data.errors)
        } else{
            history.push(redirect)
        }
    };




    const goHome = () => {
        history.push(`/users/${user?.id}`)
    }

    const editSound = () => {
        history.push(`/sound/${soundId}/edit`)
    }

    return (
        <>
            <div className="new_sound_form" style={{top: "225px"}}>
                {/* <div>  //to-do beetter error hanlding
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div> */}
                <div className="close_new_sound" onClick={goHome}  style={{top: "-13px"}}>X</div>
                {/* <div className="formTitle">Edit Sound</div> */}
                <button onClick={editSound} className="new_sound_submit">Edit Sound</button>

                {/* <div className="formTitle">Remove Sound</div> */}
                <button onClick={removeSound} className="new_sound_submit">Remove Sound</button>
            </div>
            <div className="black_backer"></div>
            <FauxUserPage></FauxUserPage>
        </>
    );
};

export default CategorySound;
