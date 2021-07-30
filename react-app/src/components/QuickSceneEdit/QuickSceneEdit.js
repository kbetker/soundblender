import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "../SoundForm/Sound.css"
// import { newUserCollection } from "../../store/collection";
import { deleteQuickScene, editQuicksceneFunc } from "../../store/quickscene"
import { setModalState } from "../../store/modal";
import { setQuickSceneArray } from "../../store/quickscene_sounds";

function QuickSceneNew( props ) {

    let theSounds = Object.entries(props.currentCollectionSounds)


    // const user = useSelector(state => state.session.user)
    const [name, setName] = useState(props.currentQuickscene.name);
    const [curr_QS_Sounds, setCurr_QS_Sounds] = useState([]);
    const [soundObj, setSoundObj] = useState({})
    const dispatch = useDispatch()


    const updateQuickScene = async () => {
        let soundIdArray = Object.values(soundObj);
        const formData = new FormData()
        formData.append("name", name)

        const data = await dispatch(editQuicksceneFunc(formData, props.currentQuickscene.id, soundIdArray, curr_QS_Sounds))
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

    const goToDelete = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(`${props.currentQuickscene.id}-quickSceneDelete`))
            dispatch(setQuickSceneArray(curr_QS_Sounds))
        }, 500);
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

    useEffect(()=>{
        let newSoundObj = soundObj;
        let oldSoundArry = [];
        let sounds = props.currentQuickscene.sounds;

        for(let i = 0; i < sounds.length; i++){
            let soundEl = document.getElementById(`${sounds[i].id}-soundEl`)
                oldSoundArry.push(sounds[i].id)
                newSoundObj[sounds[i].name] = sounds[i].id;
                soundEl.classList.add("soundQS_Clicked");

    }

        setSoundObj(soundObj);
        setCurr_QS_Sounds(oldSoundArry);
    }, [])

    return (
        <div className="formEffect" id="theForm">
            <div className="quickScene_form" >
                <div className="close_new_sound" onClick={goHome}>X</div>
                <label>Edit QuickScene</label>
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


                <button onClick={() => updateQuickScene()} className="category_button">Update QuickScene</button>
                <button onClick={() => goToDelete()} className="scene_delete_button">Delete QuickScene</button>

            </div>
        </div>
    )
}
export default QuickSceneNew
