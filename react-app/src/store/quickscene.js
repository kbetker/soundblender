const GET_QUICKSCENE = "category/GET_QUICKSCENE";
const EDIT_QUICKSCENE = "category/EDIT_QUICKSCENE";
const NEW_QUICKSCENE = "category/NEW_QUICKSCENE";
const DELETE_QUICKSCENE = "category/DELETE_QUICKSCENE";


// action creators
export const getQuickScene = (category) => ({
    type: GET_QUICKSCENE,
    payload: category
})

export const editQuickscene = (category) => ({
    type: EDIT_QUICKSCENE,
    payload: category
})

export const newQuickScene = (category) => ({
    type: NEW_QUICKSCENE,
    payload: category
})

export const deleteQuickScene = (data) => ({
    type: DELETE_QUICKSCENE,
    payload: data
})



export const deleteQuickSceneFunc = (qsId, soundsArray) => async (dispatch) => {
    const response = await fetch(`/api/quickscenes/${qsId}/delete`, {method: "DELETE"});
    const data = await response.json();
    dispatch(deleteQuickScene(data))
    return data
}



// export const getQuickSceneFunc = (catId) => async (dispatch) => {
//     // const response = await fetch(`/api/categories/${catId}`);
//     // const data = await response.json();
//     // dispatch(getQuickScene(data))
//     // return data;
// }

export const editQuicksceneFunc = (formData, qsId, soundArray, oldSoundArray) => async (dispatch) => {
    console.log(`FormData:${formData}, qsId:${qsId}, soundARRAY:${soundArray}, oldSOundArray:${oldSoundArray}`)
    const deleteQSrelations = await Promise.all(oldSoundArray.map(async soundId => {
        const response = await fetch(`/api/quickscenes/${qsId}/${soundId}/delete`, { method: "DELETE" });
        return response.json();
    }))

    const addQuickScene = await Promise.all(soundArray.map(async soundId => {
        const response = await fetch(`/api/quickscenes/${qsId}/${soundId}/addquickscene`, { method: "POST" });
        return response.json();
    }))


    const response = await fetch(`/api/quickscenes/${qsId}/edit`, {
        method: "PUT",
        body: formData,
    });
    const data = await response.json();
    dispatch(getQuickScene(data))
    return [data, deleteQSrelations, addQuickScene];
}


export const newQuickSceneFunc = (formData, sceneId, soundArray) => async (dispatch) => {
    const response = await fetch(`/api/quickscenes/${sceneId}/new`, {
        method: "POST",
        body: formData,
    });
    const data = await response.json();



    const addQuickScene = await Promise.all(soundArray.map(async soundId => {
        const response = await fetch(`/api/quickscenes/${data.id}/${soundId}/addquickscene`, { method: "POST" });
        return response.json();
    }))

    // `/${data.id}/${soundId}/addquickscene`
    // add quickscene_sound Routes
    //promise all fetch

    // let data = "test"
    return addQuickScene;
}




const initialState = { quickscene: null }
export default function quickscene(state = initialState, action) {
    switch (action.type) {
        case GET_QUICKSCENE:
            return { quickscene: action.payload }
        case EDIT_QUICKSCENE:
            return { quickscene: action.payload }
        case NEW_QUICKSCENE:
            return { quickscene: action.payload }
        case DELETE_QUICKSCENE:
            return { quickscene: action.payload }
        default:
            return state;
    }
}
