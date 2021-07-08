
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
// import { getUserSounds } from "../../store/sound";

function SoundForm() {
    const dispatch = useDispatch()
    const { sceneId }  = useParams();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const redirect = useSelector(state => state.redirectPage.page)
    // const category = useSelector(state => state.category.category)

    // useEffect(()=>{
    //     dispatch(getCategoryFunc(catId))
    // }, [dispatch, catId])
    console.log(sceneId, "wtfwtfwtf")

    const [name, setName] = useState('');
    const [color, setColor] = useState('white');
    const [arrangement, setArrangement] = useState(0);


    const newCategory = async (e) => {
        e.preventDefault();
        // console.log(name, color, arrangement)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("scene_id", Number(sceneId))
        formData.append("color", color);
        formData.append("arrangement", arrangement);

        // setImageLoading(true);
        const data = await dispatch(newCategoryFunc(formData))

        if(data.errors){
            alert(data.errors)
        } else {
            history.push(redirect)
        }

    }

    const goHome = () => {
        history.push(`/users/${user.id}`)
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

    return (
        <>
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


            <button onClick={(e) => newCategory(e)} className="category_button"  style={{border: `1px solid ${color}`}}>Submit</button>

        </div>
        <div className="black_backer"></div>
        <div className="fauxUserPage"><FauxUserPage></FauxUserPage></div>

        </>
    )
}
export default SoundForm