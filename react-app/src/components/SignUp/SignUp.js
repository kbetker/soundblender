import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import { setModalState } from "../../store/modal";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useHistory();
  const [errors, setErrors] = useState([]);


  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data.errors) {
        setErrors(data.errors)
      } else {
        await dispatch(setModalState(''))
        await history.push(`/users/${data.id}`)
      }

    }
  };

  useEffect(() => {
    let theForm = document.getElementById("theForm")
    if (theForm) {
      theForm.classList.add("blurIn")
    }
  }, [])



  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const goHome = () => {
    let theForm = document.getElementById("theForm")
    theForm.classList.remove("blurIn")
    setTimeout(() => {
      dispatch(setModalState(''))
    }, 500);
  }

  return (
    <div className="formEffect" id="theForm">
      <form onSubmit={onSignUp} className="standard_form">
        <div className="close_new_sound" onClick={goHome}>X</div>
        <div className="formTitle">Sign Up</div>
        {errors && errors.map((err, i) => <div className="logInErrors">{err}</div>)}
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
          className="new_sound_input"
          required={true}
        ></input>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          className="new_sound_input"
          required={true}
        ></input>

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          className="new_sound_input"
          required={true}
        ></input>

        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
          className="new_sound_input"
        ></input>

        <button type="submit" className="new_sound_submit">Sign Up</button>
      </form>
      <div className="black_backer"></div>

    </div>
  );
};

export default SignUpForm;
