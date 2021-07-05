const ADD_SOUND = "session/ADD_SOUND"
const GET_SOUNDS = "user/GET_SOUNDS";

// action creators
const setSound = (sound) => ({
    type: ADD_SOUND,
    payload: sound
})

export const getSounds = ( sounds ) => ({
    type: GET_SOUNDS,
    payload: sounds
})






export const getUserSounds = (id) => async (dispatch) => {
    const response = await fetch(`/api/sound/${id}`);
    const data = await response.json();
    dispatch(getSounds(data))
    return data;
}



export const addSound = (formData) => async (dispatch) => {
    const response = await fetch("/api/sound", {
        method: "POST",
        body: formData,
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    dispatch(setSound(data))
    return data;
}



const initialState = {sound: null}

export default function soundReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SOUND:
            return {sound: action.payload}
        case GET_SOUNDS:
            return {sounds: action.payload}
        default:
            return state;
    }
}
