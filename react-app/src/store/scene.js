const NEW_SCENE = "user/NEW_SCENE";
const EDIT_SCENE = "user/EDIT_SCENE";

// action creators
export const newScene = ( scene ) => ({
    type: NEW_SCENE,
    payload: scene
})

export const editScene = ( scene ) => ({
    type: EDIT_SCENE,
    payload: scene
})

export const addNewScene = (formData) => async (dispatch) => {
    const response = await fetch(`/api/scenes/new`, {
        method: "POST",
        body: formData,
    })
    const data = await response.json();
    dispatch(newScene(data))
    return data;
}

export const editNewScene = (formData, sceneId) => async (dispatch) => {
    const response = await fetch(`/api/scenes/sceneId/new`, {
        method: "PUT",
        body: formData,
    })
    const data = await response.json();
    dispatch(newScene(data))
    return data;
}


const initialState = {scene: null}
export default function scene(state = initialState, action) {
    switch (action.type) {
        case NEW_SCENE:
            return {scene: action.payload}
        default:
            return state;
    }
}
