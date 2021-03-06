import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { editCategoryFunc } from "../../store/category"
import { getCategoryFunc } from "../../store/category";
import { setModalState } from "../../store/modal";
import CategoryColors from "./categoryColors";
import "../FauxUserPage/FauxUserPage.css"
import "../SoundForm/Sound.css"

function CategoryEdit({currentCategoryId}) {
    const dispatch = useDispatch()
    const category = useSelector(state => state.category.category)



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
        <div className="category_formEdit" style={{border: `1px solid ${color}`}}>
            <div className="close_category" onClick={goHome}>X</div>

            <div className="labelAndInput">
            <label>Edit Name</label>
            <input type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="category_input"
                style={{border: `1px solid ${color}`}}
            ></input>
            </div>

            <div className="labelAndInput">
            <label>Arrangement</label>
            <input
                type="number"
                name="username"
                onChange={(e) => setArrangement(e.target.value)}
                value={arrangement}
                className="category_input"
                style={{border: `1px solid ${color}`}}
            ></input>
            </div>

            <div className="labelAndInput">
            <label> Color: {color} </label>
                <CategoryColors></CategoryColors>

                {/* <input
                type="text"
                name="color"
                onChange={(e) => setcolor(e.target.value)}
                value={color}
                className="new_sound_input"
            ></input> */}
            </div>



            <button onClick={(e) => editCategory(e)} className="category_button"  style={{border: `1px solid ${color}`}}>Submit</button>
            <button className="category_delete_button" onClick={(e) => goToDelete(e)}  style={{border: `1px solid ${color}`}}>Delete</button>

        </div>
        {/* <div className="black_backer"></div>
        <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div> */}

        </div>
    )
}
export default CategoryEdit
