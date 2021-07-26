const GET_COLLECTION = "user/GET_COLLECTION";
const GET_ALL_COLLECTION = "user/GET_ALL_COLLECTION";
const NEW_COLLECTION = "user/NEW_COLLECTION";
const EDIT_COLLECTION = "user/EDIT_COLLECTION";
const DELETE_COLLECTION = "user/DELETE_COLLECTION";




// action creators
export const getCollection = ( collection ) => ({
    type: GET_COLLECTION,
    payload: collection
})

export const getAllCollection = ( collection ) => ({
    type: GET_ALL_COLLECTION,
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


export const deleteUserCollection = (collectionId, userId) => async (dispatch) => {
    // console.log(collectionId, "++++++++THUNK++++++++")
    const response = await fetch(`/api/collections/${collectionId}/${userId}/delete`, {
        method: "DELETE"
    });
    const collection = await response.json();
    dispatch(deleteCollection(collection))
    return collection;
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


const initialState = {collection: null}
export default function userCollectionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COLLECTION:
            return {collection: action.payload}

        case GET_ALL_COLLECTION:
            return {collection: action.payload}

        case NEW_COLLECTION:
            return {collection: action.payload}

        case EDIT_COLLECTION:
            return {collection: action.payload}

        case DELETE_COLLECTION:
            return {collection: action.payload}
        default:
            return state;
    }
}
