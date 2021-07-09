const GET_COLLECTION = "user/GET_COLLECTION";
const NEW_COLLECTION = "user/NEW_COLLECTION";


// action creators
export const getCollection = ( collection ) => ({
    type: GET_COLLECTION,
    payload: collection
})

export const newCollection = ( collection ) => ({
    type: NEW_COLLECTION,
    payload: collection
})

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


const initialState = {info: null}
export default function userCollectionReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COLLECTION:
            return {collection: action.payload}
        case NEW_COLLECTION:
            return {collection: action.payload}
        default:
            return state;
    }
}
