import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';
import HomePage from "../HomePage";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user)
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const history = useHistory();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
    }
  };

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

//   if (user) {
//     return <Redirect to="/" />;
//   }

const goHome = () => {
    history.push("/")
}
  return (
      <>
    <form onSubmit={onSignUp} className="new_sound_form">
        <div className="close_new_sound" onClick={goHome}>X</div>
        <div className="formTitle">Sign Up</div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
          className="new_sound_input"
        ></input>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
          className="new_sound_input"
        ></input>

        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
          className="new_sound_input"
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
      <HomePage></HomePage>

    </>
  );
};

export default SignUpForm;
