import React, { useEffect, useState } from "react"
import FauxUserPage from "../FauxUserPage"
import "../FauxUserPage/FauxUserPage.css"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom";
import { editCategoryFunc } from "../../store/category"
// import { getUserInfo } from "../../store/userPage";
import "../SoundForm/Sound.css"
import { getCategoryFunc } from "../../store/category";
import CategoryColors from "./categoryColors";
import { setModalState } from "../../store/modal";
// import { getUserSounds } from "../../store/sound";

function CategoryEdit({currentCategoryId}) {
    console.log(currentCategoryId, "CURRENT CATEGORY ID IS WHAT??????????")
    const dispatch = useDispatch()
    // const { catId }  = useParams();
    const history = useHistory();
    // const user = useSelector(state => state.session.user)
    const redirect = useSelector(state => state.redirectPage.page)
    const category = useSelector(state => state.category.category)


    // const soundToEdit = sounds?.sounds.find(sound => sound.id === parseInt(catId))


    // const [owner_id, setId] = useState(user?.id);
    // const [is_public, setIs_public] = useState(false);
    // const [sound_url, setSound_url] = useState(soundToEdit?.sound_url);
    const [name, setName] = useState(category?.name);
    const [color, setColor] = useState(category?.color);
    const [arrangement, setArrangement] = useState(category?.arrangement);


    useEffect(()=>{
        async function setAttributes(){
            const data = await dispatch(getCategoryFunc(currentCategoryId))
            setName(data.name)
            setColor(data.color)
            setArrangement(data.arrangement)
          }
          setAttributes()
    }, [dispatch, currentCategoryId])




    const editCategory = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("arrangement", arrangement);
        formData.append("color", color);

        // setImageLoading(true);
        const data = await dispatch(editCategoryFunc(formData, currentCategoryId))

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

    // const updateImage = (e) => {
    //     const file = e.target.files[0];
    //     setSound_url(file);
    // }

    const goHome = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    const goToDelete = () => {
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(`NaN-${currentCategoryId}-categoryDelete`))
        }, 500);
    }

    useEffect(()=>{
        const colors = document.querySelectorAll(".color")
        if(colors){
           for(let i = 0; i < colors.length; i++){
                colors[i].addEventListener("click", (e)=>{
                    setColor(e.target.id)
                })
           }
        }
    }, [color])

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            theForm.classList.add("blurIn")
        }
    }, [])

    return (
        <div className="formEffect" id="theForm">
        <div className="category_form" style={{border: `1px solid ${color}`}}>
            <div className="close_category" onClick={goHome}>X</div>
            <label>Edit Name</label>
            <input type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="category_input"
                style={{border: `1px solid ${color}`}}
            ></input>

            <label>Arrangement</label>
            <input
                type="number"
                name="username"
                onChange={(e) => setArrangement(e.target.value)}
                value={arrangement}
                className="category_input"
                style={{border: `1px solid ${color}`}}
            ></input>

            <label> Color: {color} </label>


                <CategoryColors></CategoryColors>

                {/* <input
                type="text"
                name="color"
                onChange={(e) => setcolor(e.target.value)}
                value={color}
                className="new_sound_input"
            ></input> */}



            <button onClick={(e) => editCategory(e)} className="category_button"  style={{border: `1px solid ${color}`}}>Submit</button>
            <button className="category_delete_button" onClick={(e) => goToDelete(e)}  style={{border: `1px solid ${color}`}}>Delete</button>

        </div>
        {/* <div className="black_backer"></div>
        <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div> */}

        </div>
    )
}
export default CategoryEdit
