import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { setModalState } from "../../store/modal";
import FauxUserPage from "../FauxUserPage";
import "../SoundDelete/SoundDelete.css"


const CategorySound = (ids) => {
    const history = useHistory();
    // const {catId, soundId} = useParams();
    const user = useSelector(state => state.session.user)
    const redirect = useSelector(state => state.redirectPage.page)
    const dispatch = useDispatch()

    const removeSound = async (e) => {
        e.preventDefault();
        const response = await fetch(`/api/categories/${ids.currentCategoryId}/${ids.currentSoundId}`, {method: "DELETE"});
        const data = await response.json();
        if(data.erros){
            alert(data.errors)
        } else{
                let theForm = document.getElementById("theForm")
            theForm.classList.remove("blurIn")
            setTimeout(() => {
                dispatch(setModalState(''))
            }, 500);

        }
    };

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

    // const editSound = () => {
    //     // history.push(`/sound/${ids.currentSoundId}/edit`)
    //     setModalState(`${ids.currentSoundId}-editSound`)
    // }

    const editSound = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(`${ids.currentSoundId}-editSound`))
        }, 600);
    }

    return (
        <div className="formEffect" id="theForm">
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
                <button onClick={removeSound} className="new_sound_submit" style={{fontSize: "24px"}}>Remove From Category</button>
            </div>

        </div>
    );
};

export default CategorySound;
