import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/index";
// import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import UserPage from "./components/UserPage";
import { authenticate } from "./store/session";
import SoundForm from "./components/SoundForm"
import HomePage from "./components/HomePage"
import CollectionPage from "./components/CollectionPage";
import SoundEditForm from "./components/SoundEditForm";
import SoundDelete from "./components/SoundDelete";
import SoundPreview from "./components/SoundPreview";
import CategorySound from "./components/CategorySound";
import CategoryEdit from "./components/CategoryEdit";
import CategoryNew from "./components/CategoryNew";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

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
        <Route path="/collection/:id" exact={true}>
          <CollectionPage />
        </Route>
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUp />
        </Route>

        <Route path="/sound/:soundId/edit" exact={true}>
            <SoundEditForm />
        </Route>

        <Route path="/sound/:soundId/delete" exact={true}>
            <SoundDelete />
        </Route>

        <Route path="/sound/:soundId" exact={true}>
            <SoundPreview />
        </Route>

        <Route path="/sound"  exact={true}>
            <SoundForm />
        </Route>


        <Route path="/category/:catId/edit" exact={true}>
            <CategoryEdit />
        </Route>

        <Route path="/category/new/:sceneId" exact={true}>
            <CategoryNew />
        </Route>

        <Route path="/category-sound/:catId/:soundId"  exact={true}>
            <CategorySound />
        </Route>


        <ProtectedRoute path="/users/:id" exact={true}>
          <UserPage />
        </ProtectedRoute>

        <Route path="/users" exact={true}>
          <UsersList/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

        // <ProtectedRoute path="/" exact={true} >
        //   <h1>My Home Page</h1>
        // </ProtectedRoute>
