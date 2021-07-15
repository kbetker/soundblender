import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
// import Login from "./components/LogIn/Login";
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
import CollectionNew from "./components/CollectionNew"
import CollectionEdit from "./components/CollectionEdit"
import CollectionDelete from "./components/CollectionDelete";
import AboutPage from "./components/AboutPage";

function App() {
    // const [authenticated, setAuthenticated] = useState(false);
    const dispatch = useDispatch();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
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
                {/* =================== About ================================== */}
                <Route path="/about" exact={true}>
                    <AboutPage />
                </Route>

                {/* =================== Auth ================================== */}
                <Route path="/" exact={true}>
                    <HomePage />
                </Route>

                {/* <Route path="/login" exact={true}>
                    <Login />
                </Route> */}

                <Route path="/sign-up" exact={true}>
                    <SignUp />
                </Route>


                {/* =================== User Homepage ================================== */}
                <ProtectedRoute path="/users/:id" exact={true}>
                    <UserPage />
                </ProtectedRoute>


                {/* =================== Collections ================================== */}
                <ProtectedRoute path="/collection/new" exact={true}>
                    <CollectionNew />
                </ProtectedRoute>

                <ProtectedRoute path="/collection/:collectionId/edit" exact={true}>
                    <CollectionEdit />
                </ProtectedRoute>

                <ProtectedRoute path="/collection/:collectionId/delete" exact={true}>
                    <CollectionDelete />
                </ProtectedRoute>

                <ProtectedRoute path="/collection/:collectionId" exact={true}>
                    <CollectionPage />
                </ProtectedRoute>


                {/* =================== Scenes ================================== */}
                <ProtectedRoute path="/scenes/:collectionId/new" exact={true}>
                    <SceneNew />
                </ProtectedRoute>

                <ProtectedRoute path="/scenes/:sceneId/edit" exact={true}>
                    <SceneEdit />
                </ProtectedRoute>

                <ProtectedRoute path="/scenes/:sceneId/delete" exact={true}>
                    <SceneDelete />
                </ProtectedRoute>


                {/* =================== Categories ================================== */}
                <ProtectedRoute path="/category/:catId/edit" exact={true}>
                    <CategoryEdit />
                </ProtectedRoute>

                <ProtectedRoute path="/category/:catId/addSound" exact={true}>
                    <AddSoundToCategory />
                </ProtectedRoute>

                <ProtectedRoute path="/category/:catId/delete" exact={true}>
                    <CategoryDelete />
                </ProtectedRoute>

                <ProtectedRoute path="/category/new/:sceneId" exact={true}>
                    <CategoryNew />
                </ProtectedRoute>

                <ProtectedRoute path="/category-sound/:catId/:soundId" exact={true}>
                    <CategorySound />
                </ProtectedRoute>


                {/* =================== Sounds ================================== */}
                <ProtectedRoute path="/sound/:soundId/edit" exact={true}>
                    <SoundEditForm />
                </ProtectedRoute>

                <ProtectedRoute path="/sound/:soundId/delete" exact={true}>
                    <SoundDelete />
                </ProtectedRoute>

                <ProtectedRoute path="/sound/:soundId" exact={true}>
                    <SoundPreview />
                </ProtectedRoute>

                <ProtectedRoute path="/sound" exact={true}>
                    <SoundForm />
                </ProtectedRoute>

            </Switch>
        </BrowserRouter>
    );
}

export default App;

        // <ProtectedRoute path="/" exact={true} >
        //   <h1>My Home Page</h1>
        // </ProtectedRoute>
