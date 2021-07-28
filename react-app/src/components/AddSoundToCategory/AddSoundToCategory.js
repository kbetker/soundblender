
import React, { useEffect, useState } from "react"
import FauxUserPage from "../FauxUserPage"
import "../FauxUserPage/FauxUserPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import "../SoundForm/Sound.css"
import { getUserSounds } from "../../store/sound";
import { setModalState } from "../../store/modal";

function AddSoundToCategory({currentCategoryId}) {
    const dispatch = useDispatch()
    // const { catId }  = useParams();
    const history = useHistory();
    const redirect = useSelector(state => state.redirectPage.page)
    const allSounds = useSelector(state => state.newSound.sounds)
    const sounds = allSounds?.sounds.sort(function(a, b){
        if (a.name.toLowerCase() < b.name.toLowerCase()){return -1}
        if (a.name.toLowerCase() > b.name.toLowerCase()){return 1}
        return 0
    })

    const user = useSelector(state => state.session.user)
    const [soundId, setSoundId] = useState(0);

    useEffect(()=>{
        async function fetchSounds(){
        const data = await dispatch(getUserSounds(user.id))
        if(data.errors){
            alert(data.errors)
        }}
        fetchSounds()
    }, [dispatch, user.id])


    const addSound = async () => {
        const data = await fetch(`/api/categories/${currentCategoryId}/${soundId}/addsound`, {
            method: "POST",
        });

        if(data.errors){
            alert(data.errors)
        } else {
            let theForm = document.getElementById("theForm")
            theForm.classList.remove("blurIn")
            setTimeout(() => {
                dispatch(setModalState(''))
            }, 500);
        }
    }

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            theForm.classList.add("blurIn")
        }
    }, [])

    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    return (
        <div className="formEffect" id="theForm">
        <div className="new_sound_form">
            <div className="close_new_sound" onClick={goHome}>X</div>
            <div>Add Sound</div>
            <select onChange={(e) => setSoundId(e.target.value)} value={soundId} className="new_sound_input">
                     <option>--Select Sound--</option>
                {sounds?.map(sound =>
                    <option value={sound.id}>{sound.name}</option>
                )}
            </select>


            <button onClick={() => addSound()} className="category_button">Submit</button>
        </div>

        {/* <div className="black_backer"></div>
        <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div> */}

        </div>
    )
}
export default AddSoundToCategory
