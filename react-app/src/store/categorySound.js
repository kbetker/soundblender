const GET_INFO = "user/GET_INFO";

// action creators
export const getInfo = ( info ) => ({
    type: GET_INFO,
    payload: info
})

export const getUserInfo = (id) => async (dispatch) => {
    const response = await fetch(`/api/users/${id}`);
    const data = await response.json();
    dispatch(getInfo(data))
    return data;
}


const initialState = {info: null}
export default function userInfoReducer(state = initialState, action) {
    switch (action.type) {
        case GET_INFO:
            return {info: action.payload}
        default:
            return state;
    }
}
