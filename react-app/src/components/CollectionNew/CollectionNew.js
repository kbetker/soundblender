import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { newUserCollection } from "../../store/collection";
import { setModalState } from "../../store/modal";
import "../SoundForm/Sound.css"
import "../FauxUserPage/FauxUserPage.css"

function CollectionNew() {
    const user = useSelector(state => state.session.user)
    const [name, setName] = useState('');
    const dispatch = useDispatch()

    const addCollection = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("owner_id", user.id)
        const data = await dispatch(newUserCollection(formData))
        if (data.errors) {
             alert(data.errors);
        } else {
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

    return (
        <div className="formEffect" id="theForm">
            <div className="new_sound_form" >
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Collection Name</label>
                <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="new_sound_input"
                    placeholder="Name"
                ></input>
                <button onClick={() => addCollection()} className="category_button">Add Collection</button>
            </div>
        </div>
    )
}
export default CollectionNew
