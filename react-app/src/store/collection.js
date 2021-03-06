const GET_COLLECTION = "user/GET_COLLECTION";
const GET_ALL_COLLECTION = "user/GET_ALL_COLLECTION";
const NEW_COLLECTION = "user/NEW_COLLECTION";
const EDIT_COLLECTION = "user/EDIT_COLLECTION";
const DELETE_COLLECTION = "user/DELETE_COLLECTION";




// action creators
export const getCollection = (collection) => ({
    type: GET_COLLECTION,
    payload: collection
})

export const getAllCollection = (collection) => ({
    type: GET_ALL_COLLECTION,
    payload: collection
})

export const newCollection = (collection) => ({
    type: NEW_COLLECTION,
    payload: collection
})

export const editCollection = (collection) => ({
    type: EDIT_COLLECTION,
    payload: collection
})

export const deleteCollection = (collection) => ({
    type: DELETE_COLLECTION,
    payload: collection
})

// export const deleteQuickSceneFunc = (qsId, soundsArray) => async (dispatch) => {

//     const deleteQSrelations = await Promise.all(soundsArray.map(async soundId => {
//         const response = await fetch(`/api/quickscenes/${qsId}/${soundId}/delete`, { method: "DELETE" });
//         return response.json();
//     }))

//     const response = await fetch(`/api/quickscenes/${qsId}/delete`, {method: "DELETE"});
//     const data = await response.json();
//     dispatch(deleteQuickScene(data))
//     return [deleteQSrelations, data];
// }







export const deleteUserCollection = (collectionId, userId, scenesAray) => async (dispatch) => {
    // delete all categories
    const categoryDelete = await Promise.all(scenesAray.map(async scene => {
        await Promise.all(scene.categories.map(async cat => {
            const response = await fetch(`/api/categories/${cat.id}/delete`, { method: "DELETE" });
            return response.json();
        }))
    }))

    //delete all quickscenes
      const quickSceneDelete = await Promise.all(scenesAray.map(async scene => {
        await Promise.all(scene.quickscenes.map(async qs => {
            const response = await fetch(`/api/quickscenes/${qs.id}/delete`, { method: "DELETE" });
            return response.json();
        }))
    }))


    // delete all scenes
    const sceneDelete = await Promise.all(scenesAray.map(async el => {
        const response = await fetch(`/api/scenes/${el.id}/delete`, { method: "DELETE" });
        return response.json();
    }))

    //delete the collection
    const response = await fetch(`/api/collections/${collectionId}/${userId}/delete`, {
        method: "DELETE"
    });
    const collection = await response.json();
    dispatch(deleteCollection(collection))
    return [categoryDelete, sceneDelete, collection];
    return quickSceneDelete
}



export const getUserCollection = (id) => async (dispatch) => {
    const response = await fetch(`/api/collections/${id}`);
    const data = await response.json();
    dispatch(getCollection(data))
    return data;
}

export const getAllUserCollection = (id) => async (dispatch) => {
    const response = await fetch(`/api/collections/all/${id}`);
    const data = await response.json();
    dispatch(getAllCollection(data))
    return data;
}



export const newUserCollection = (formData) => async (dispatch) => {
    const response = await fetch(`/api/collections/new`, {
        method: "POST",
        body: formData
    });
    const data = await response.json();
    dispatch(newCollection(data))
    return data;
}

export const editUserCollection = (formData, collectionId) => async (dispatch) => {
    const response = await fetch(`/api/collections/${collectionId}/edit`, {
        method: "PUT",
        body: formData,
    })
    const data = await response.json();
    dispatch(editCollection(data))
    return data;
}


const initialState = { collection: null }
export default function userCollectionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COLLECTION:
            return { collection: action.payload }

        case GET_ALL_COLLECTION:
            return { collection: action.payload }

        case NEW_COLLECTION:
            return { collection: action.payload }

        case EDIT_COLLECTION:
            return { collection: action.payload }

        case DELETE_COLLECTION:
            return { collection: action.payload }
        default:
            return state;
    }
}
