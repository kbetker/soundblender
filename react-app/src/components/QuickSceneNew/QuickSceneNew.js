import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../SoundForm/Sound.css"
// import { newUserCollection } from "../../store/collection";
import { newQuickSceneFunc } from "../../store/quickscene"
import { setModalState } from "../../store/modal";

function QuickSceneNew( props ) {

    let theSounds = Object.entries(props.currentCollectionSounds)


    // const user = useSelector(state => state.session.user)
    const [name, setName] = useState('');
    const [soundObj, setSoundObj] = useState({})
    const dispatch = useDispatch()

    const addCollection = async () => {
        let soundIdArray = Object.values(soundObj);
        const formData = new FormData()
        formData.append("name", name)

        const data = await dispatch(newQuickSceneFunc(formData, props.currentSceneId, soundIdArray))
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

    function addQuickScene(name, id){
        let newSoundObj = soundObj
        let soundEl = document.getElementById(`${id}-soundEl`)

        if(!(name in newSoundObj)){
            newSoundObj[name] = id
            soundEl.classList.add("soundQS_Clicked")
        } else if(name in newSoundObj){
            delete newSoundObj[name]
            soundEl.classList.remove("soundQS_Clicked")
        }
        // soundQS_Clicked
        setSoundObj(soundObj)
    }

    return (
        <div className="formEffect" id="theForm">
            <div className="quickScene_form" >
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Select Sounds for QuickScene</label>
                <div className="quickSceneSoundContainer">
                    {theSounds.length === 0 && <div style={{fontSize: "18px"}}>There are currently now sounds in this collection. You can still add a QuickScene and add sounds later.</div>}
                {theSounds.map(el =>
                    <div onClick={() => addQuickScene(el[0], el[1])} className={`soundsForQuickScene`} key={`${el[1]}`} id={`${el[1]}-soundEl`}>
                        {`${el[0]}`}
                    </div>
                    )}
                </div>
                    <label>QuickScene Name</label>
                <input type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="new_sound_input"
                    placeholder="Name"
                ></input>


                <button onClick={() => addCollection()} className="category_button">Add QuickScene</button>
            </div>
        </div>
    )
}
export default QuickSceneNew
