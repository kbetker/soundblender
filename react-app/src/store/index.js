import {createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session"
import soundReducer from "./sound";
import userInfoReducer from "./userPage"
import userCollectionReducer from "./collection";
import editMode from "./editMode";
import redirectPage from "./redirect";
import category from "./category";
import scene from "./scene"
import quickscene from "./quickscene"
import modalReducer from "./modal";

const rootReducer = combineReducers({
    session,
    newSound: soundReducer,
    userInfo: userInfoReducer,
    collection: userCollectionReducer,
    editMode,
    redirectPage,
    category,
    scene,
    modal: modalReducer,
    quickscene,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
