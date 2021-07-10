import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../store/session";
import HomePage from "../HomePage";


const LoginForm = () => {
    const dispatch = useDispatch();
    // const user = useSelector(state => state.session.user)
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onLogin = async (e) => {
        e.preventDefault();
        const data = await dispatch(login(email, password));
        if (data.errors) {
            console.log(data.errors)
            setErrors(data.errors);
        } else {
        await history.push(`/users/${data.id}`)
    }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    // if (user) {
    //     return <Redirect to="/" />;
    // }

    const goHome = () => {
        history.push("/")
    }

    return (
        <>
            <form onSubmit={(e) => onLogin(e)} className="new_sound_form" style={{ top: "225px" }}>
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

            </form>
            <div className="black_backer"></div>
            <HomePage></HomePage>
        </>
    );
};

export default LoginForm;
