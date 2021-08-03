import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { setModalState } from "../../store/modal";


const LoginForm = () => {
    const dispatch = useDispatch();
    // const modal = useSelector(state => state.modal)
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));

        if (data.errors) {
            setErrors(data.errors);
        } else {
         await dispatch(setModalState(''))
            await history.push(`/users/${data.id}`)
    }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(()=>{
        let theForm = document.getElementById("theForm")
        if (theForm){
            theForm.classList.add("blurIn")
        }
    }, [])

    const goHome = () => {
        // history.push("/")
        let theForm = document.getElementById("theForm")
        theForm.classList.remove("blurIn")
        setTimeout(() => {
            dispatch(setModalState(''))
        }, 500);
    }

    return (
        <div className="formEffect" id="theForm">
            <form onSubmit={(e) => onLogin(e)}  className="new_sound_form" style={{ top: "225px" }}>
                <div className="close_new_sound" onClick={goHome}>X</div>

                <div className="formTitle">Log In</div>
              {errors && errors.map((err, i) => <div className="logInErrors">{err}</div>)}
                <label>Email</label>
                <input
                    name="email"
                    type="text"
                    // placeholder="Email"
                    value={email}
                    onChange={updateEmail}
                    className="new_sound_input"
                />

                <label>Password</label>
                <input
                    name="password"
                    type="password"
                    // placeholder="Password"
                    value={password}
                    onChange={updatePassword}
                    className="new_sound_input"
                />
                <button type="submit" className="new_sound_submit">Login</button>

            {/* <div className="black_backer"></div> */}
            {/* <HomePage></HomePage> */}
            </form>
        </div>
    );
};

export default LoginForm;
