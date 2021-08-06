import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import { setModalState } from "../../store/modal";


const LoginForm = () => {
    const dispatch = useDispatch();
    // const modal = useSelector(state => state.modal)
    const [errorsBackend, setErrorsBackend] = useState([]);
    const [errorsFrontEnd, setErrorsFrontEnd] = useState([]);
    const [showErrs, setShowErrs] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onLogin = async (e) => {
        e.preventDefault();
        setErrorsFrontEnd([])
        let newArr = []

        if(email === "") {
            newArr.push("email: Field required")
        } else  if (!email.includes("@") || !email.includes("@")){
            newArr.push("email: Must be valid")
        }
        if (password === ""){
            newArr.push("password: Field required")
        } else if (password.length < 5) {
            newArr.push("password: Must be more than 5 characters")
        }

        setErrorsFrontEnd(newArr)

        if(newArr.length === 0) {
            setShowErrs(false)
            const data = await dispatch(login(email, password));
            if (data.errors) {
                setErrorsBackend(data.errors);
            } else {
             await dispatch(setModalState(''))
                await history.push(`/users/${data.id}`)
            }
        } else {
            setShowErrs(true)
        }
    };

    useEffect(()=>{
        setShowErrs(false)
    }, [email, password])



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
            <div className="new_sound_form" >
            <div className="top_rounded_form">
                <div className="close_new_sound" onClick={goHome}>X</div>

                <div className="formTitle">Log In</div>
              {errorsBackend && showErrs && errorsBackend.map((err, i) => <div className="logInErrors">{err}</div>)}
              {errorsFrontEnd && showErrs && errorsFrontEnd.map((err, i) => <div className="logInErrors">{err}</div>)}
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
            {/* <div className="black_backer"></div> */}
            {/* <HomePage></HomePage> */}
                </div>
                <button onClick={(e)=> onLogin(e)} className="new_sound_submit">Login</button>
            </div>
        </div>
    );
};

export default LoginForm;
