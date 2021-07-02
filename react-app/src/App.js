import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/index";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import UserPage from "./components/UserPage";
import { authenticate } from "./store/session";
import Sound from "./components/Sound"
import HomePage from "./components/HomePage"

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUp />
        </Route>
        <Route path="/sound">
            <Sound></Sound>
        </Route>

        <ProtectedRoute path="/users/:userId" exact={true}>
          <UserPage />
        </ProtectedRoute>

        <ProtectedRoute path="/users" exact={true}>
          <UsersList/>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

        // <ProtectedRoute path="/" exact={true} >
        //   <h1>My Home Page</h1>
        // </ProtectedRoute>
