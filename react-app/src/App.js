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
import CategoryDelete from "./components/CategoryDelete/CategoryDelete";
import AddSoundToCategory from "./components/AddSoundToCategory";
import SceneNew from "./components/SceneNew";
import SceneEdit from "./components/SceneEdit"
import SceneDelete from "./components/SceneDelete";

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
        <Route path="/login" exact={true}>
          <Login />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUp />
        </Route>

        <ProtectedRoute path="/users/:id" exact={true}>
          <UserPage />
        </ProtectedRoute>

        <Route path="/collection/:collectionId" exact={true}>
          <CollectionPage />
        </Route>



        <Route path="/scenes/:collectionId/new" exact={true}>
          <SceneNew />
        </Route>

        <Route path="/scenes/:sceneId/edit" exact={true}>
          <SceneEdit />
        </Route>

        <Route path="/scenes/:sceneId/delete" exact={true}>
          <SceneDelete />
        </Route>



        <Route path="/category/:catId/edit" exact={true}>
            <CategoryEdit />
        </Route>
        <Route path="/category/:catId/addSound" exact={true}>
            <AddSoundToCategory />
        </Route>
        <Route path="/category/:catId/delete" exact={true}>
            <CategoryDelete />
        </Route>
        <Route path="/category/new/:sceneId" exact={true}>
            <CategoryNew />
        </Route>
        <Route path="/category-sound/:catId/:soundId"  exact={true}>
            <CategorySound />
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






      </Switch>
    </BrowserRouter>
  );
}

export default App;

        // <ProtectedRoute path="/" exact={true} >
        //   <h1>My Home Page</h1>
        // </ProtectedRoute>
