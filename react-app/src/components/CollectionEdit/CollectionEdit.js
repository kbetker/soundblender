import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editUserCollection } from "../../store/collection";
import { setModalState } from "../../store/modal";
import "../SoundForm/Sound.css"
import "../FauxUserPage/FauxUserPage.css"
import "../SceneEdit/SceneEdit.css"

function CollectionEdit({currentCollectionId}) {
    const dispatch = useDispatch()
    const allCollections = useSelector(state => state.collection.collection)
    const midiState = useSelector(state => state.midiState)

    const [name, setName] = useState('')
    const [is_midi, setIs_midi] = useState(false);
    const [stop_all, setStop_all] = useState(0);
    const [scene_left, setScene_left] = useState(0);
    const [scene_right, setScene_right] = useState(0);
    const [owner_id, setOwner_id] = useState(0)

    const [currentMidiInput, setCurrentMidiInput] = useState('0')


    useEffect(()=>{
        const collectionToEdit = allCollections?.collection.find(collection => collection.id === parseInt(currentCollectionId))
        setName(collectionToEdit?.name)
        setIs_midi(collectionToEdit?.is_midi)
        setStop_all(collectionToEdit?.stop_all)
        setScene_left(collectionToEdit?.scene_left)
        setScene_right(collectionToEdit?.scene_right)
        setOwner_id(collectionToEdit?.owner_id)
    }, [])


    const editCollection = async () => {
        const formData = new FormData()
        formData.append("name", name)
        formData.append("is_midi", is_midi)
        formData.append("stop_all", stop_all)
        formData.append("scene_left", scene_left)
        formData.append("scene_right", scene_right)
        formData.append("owner_id", owner_id)

        const data = await dispatch(editUserCollection(formData, currentCollectionId))
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

    // const goToDelete = () => {
    //     history.push(`/collection/${currentCollectionId}/delete`)
    // }

    const goToDelete = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState('collectionDelete'))
        }, 600);
    }



    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }


    useEffect(() => {
        if (midiState[1] > 0 && !undefined) {
            setCurrentMidiInput(`${midiState[0]}`)
        }
    }, [midiState])

    return (
        <div className="formEffect" id="theForm">
             <div className="new_sound_form" >
            <div className="top_rounded_form" >
                <div className="close_new_sound" onClick={goHome}>X</div>


                <label>Collection Name</label>
                    <input type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="new_sound_input"
                        placeholder="Name"
                    ></input>


                    <label>
                        Use MIDI?:
                        <input
                            name="isMidi"
                            type="checkbox"
                            checked={is_midi}
                            onChange={(e) => { setIs_midi(e.target.checked) }} />
                    </label>

                    {is_midi &&
                        <div className="collectionMidiDisplay">
                            <div className="collectionMidiInput">
                                <label>Stop All Sounds</label>
                                <input
                                    type="number"
                                    name="stop_all"
                                    onChange={(e) => setStop_all(e.target.value)}
                                    value={stop_all}
                                    className="new_sound_input"
                                    style={{ width: "90px", marginBottom: "5px" }}
                                ></input>
                            </div>
                            <div className="currentMIDI_COLLECTION">
                                <div style={{ fontSize: "18px" }} >MIDI Input#</div>
                                <div className="wtf">{currentMidiInput}</div>
                            </div>

                        </div>
                    }



            </div>

                <button onClick={() => editCollection()} className="submit_notRounded">Update</button>
                <button className="scene_delete_button" onClick={(e) => goToDelete(e)} >Delete</button>
            </div>
        </div>
    )
}
export default CollectionEdit
