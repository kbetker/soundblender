
import React, { useEffect, useState } from "react"
import FauxUserPage from "../FauxUserPage"
import "../FauxUserPage/FauxUserPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { newCategoryFunc } from "../../store/category"
// import { getUserInfo } from "../../store/userPage";
import "../SoundForm/Sound.css"
// import { getCategoryFunc } from "../../store/category";
import CategoryColors from "../CategoryEdit/categoryColors";
import { getUserSounds } from "../../store/sound";

function SoundForm() {
    const dispatch = useDispatch()
    const { catId }  = useParams();
    const history = useHistory();
    const redirect = useSelector(state => state.redirectPage.page)
    const sounds = useSelector(state => state.newSound.sounds)
    const user = useSelector(state => state.session.user)
    const [soundId, setSoundId] = useState(0);
    // console.log(sounds)
    useEffect(async ()=>{
        const data = await dispatch(getUserSounds(user.id))
        if(data.errors){
            alert(data.errors)
        }
    }, [])



    const addSound = async () => {

        const data = await fetch(`/api/categories/${catId}/${soundId}/addsound`, {
            method: "POST",
        });

        if(data.errors){
            alert(data.errors)
        } else {
            history.push(redirect)
        }

    }

    const goBack = () => {
        history.push(redirect)
    }

    useEffect(()=>{
        //todo fetch - data to useState
    }, [])

    return (
        <>
        <div className="new_sound_form" >
            <div className="close_new_sound" onClick={goBack}>X</div>
            <div>Add Sound</div>
            <select onChange={(e) => setSoundId(e.target.value)} value={soundId} className="new_sound_input">
                {sounds?.sounds.map(sound =>
                    <option value={sound.id}>{sound.name}</option>
                )}
            </select>


            <button onClick={() => addSound()} className="category_button">Submit</button>
        </div>

        <div className="black_backer"></div>
        <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div>

        </>
    )
}
export default SoundForm
