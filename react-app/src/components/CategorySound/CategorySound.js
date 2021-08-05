import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setModalState } from "../../store/modal";
import "../SoundDelete/SoundDelete.css"


const CategorySound = (ids) => {
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
            <div className="standard_form">
                {/* <div>  //to-do beetter error hanlding
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div> */}
                <div className="close_new_sound" onClick={goHome}  style={{top: "-13px"}}>X</div>
                {/* <div className="formTitle">Edit Sound</div> */}
                <button onClick={editSound} className="top_rounded_submit">Edit Sound</button>

                {/* <div className="formTitle">Remove Sound</div> */}
                <button onClick={removeSound} className="scene_delete_button" style={{fontSize: "24px"}}>Remove From Category</button>
            </div>

        </div>
    );
};

export default CategorySound;
