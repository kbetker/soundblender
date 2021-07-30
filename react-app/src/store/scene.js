const NEW_SCENE = "user/NEW_SCENE";
const EDIT_SCENE = "user/EDIT_SCENE";
const DELETE_SCENE = "user/DELETE_SCENE";


// action creators
export const deleteScene = (scene) => ({
    type: DELETE_SCENE,
    payload: scene
})

export const newScene = (scene) => ({
    type: NEW_SCENE,
    payload: scene
})

export const editScene = (scene) => ({
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

export const editUserScene = (formData, sceneId) => async (dispatch) => {
    const response = await fetch(`/api/scenes/${sceneId}/edit`, {
        method: "PUT",
        body: formData,
    })
    const data = await response.json();
    dispatch(newScene(data))
    return data;
}

export const deleteUserScene = (sceneId, categoryArray, quickSceneArray) => async (dispatch) => {
    const categoryDelete = await Promise.all(categoryArray.map(async el => {
        const response1 = await fetch(`/api/categories/${el.id}/delete`, { method: "DELETE" });
        return response1.json();
    }))

    const quickSceneDelete = await Promise.all(quickSceneArray.map(async el => {
        const response2 = await fetch(`/api/quickscenes/${el.id}/delete`, { method: "DELETE" });
        return response2.json();
    }))



    const response = await fetch(`/api/scenes/${sceneId}/delete`, {
        method: "DELETE"
    })
    const data = await response.json();
    dispatch(newScene(data))
    return [data, categoryDelete, quickSceneDelete];
}


const initialState = { scene: null }
export default function scene(state = initialState, action) {
    switch (action.type) {
        case NEW_SCENE:
            return { scene: action.payload }
        case EDIT_SCENE:
            return { scene: action.payload }
        case DELETE_SCENE:
            return { deletedScene: action.payload }
        default:
            return state;
    }
}
