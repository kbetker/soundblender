const GET_COLLECTION = "user/GET_COLLECTION";
const NEW_COLLECTION = "user/NEW_COLLECTION";
const EDIT_COLLECTION = "user/NEW_COLLECTION";
const DELETE_COLLECTION = "user/DELETE_COLLECTION";




// action creators
export const getCollection = ( collection ) => ({
    type: GET_COLLECTION,
    payload: collection
})

export const newCollection = ( collection ) => ({
    type: NEW_COLLECTION,
    payload: collection
})

export const editCollection = ( collection ) => ({
    type: EDIT_COLLECTION,
    payload: collection
})

export const deleteCollection = ( collection ) => ({
    type: DELETE_COLLECTION,
    payload: collection
})


export const deleteUserCollection = (collectionId) => async (dispatch) => {
    console.log(collectionId, "++++++++THUNK++++++++")
    const response = await fetch(`/api/collections/${collectionId}/delete`, {
        method: "DELETE"
    });
    const data = await response.json();
    dispatch(deleteCollection(data))
    return data;
}



export const getUserCollection = (id) => async (dispatch) => {
    const response = await fetch(`/api/collections/${id}`);
    const data = await response.json();
    dispatch(getCollection(data))
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


const initialState = {info: null}
export default function userCollectionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COLLECTION:
            return {collection: action.payload}
        case NEW_COLLECTION:
            return {newCollection: action.payload}
        case EDIT_COLLECTION:
            return {editeCollection: action.payload}
        case DELETE_COLLECTION:
            return {deletedCollection: action.payload}
        default:
            return state;
    }
}
