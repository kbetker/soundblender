const ADD_SOUND = "sound/ADD_SOUND"
const GET_SOUNDS = "sounds/GET_SOUNDS";
const EDIT_SOUND = "sound/EDIT_SOUND";
const DELETE_SOUND = "sound/DELETE_SOUND";
const GET_SOUND = "sound/GET_SOUND";


// action creators
const setSound = (sound) => ({
    type: ADD_SOUND,
    payload: sound
})

export const getSounds = ( sounds ) => ({
    type: GET_SOUNDS,
    payload: sounds
})

export const editSound = ( sound ) => ({
    type: EDIT_SOUND,
    payload: sound
})

export const deleteSound = (data) => ({
    type: DELETE_SOUND,
    payload: data
})

export const getSound = (data) => ({
    type: GET_SOUND,
    payload: data
})

export const getUserSounds = (id) => async (dispatch) => {
    const response = await fetch(`/api/sound/s/${id}`);
    const data = await response.json();
    dispatch(getSounds(data))
    return data;
}


export const getUserSound = (soundId) => async (dispatch) => {
    const response = await fetch(`/api/sound/${soundId}`);
    const data = await response.json();
    dispatch(getSounds(data))

    return data;
}

export const deleteUserSound = (soundId) => async (dispatch) => {
    const response = await fetch(`/api/sound/${soundId}/delete`, {
        method: "DELETE"
    });
    const data = await response.json();
    if (data.errors) {
        return data;
    }
    dispatch(setSound(data))
    return;
}

export const editUserSound = (formData, soundId) => async (dispatch) => {
    const response = await fetch(`/api/sound/${soundId}/edit`, {
        method: "PUT",
        body: formData,
    });
    const data = await response.json();
    // console.log(data.errors, "=================================")
    if (data.errors) {
        return data;
    }
    dispatch(editSound(data))
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
    let newSound;
    switch (action.type) {
        case ADD_SOUND:
            newSound = Object.assign({}, state);
            newSound.sounds.sounds[state.sounds.sounds.length] = action.payload
            return newSound
        case GET_SOUNDS:
            return {sounds: action.payload}
        case GET_SOUND:
            return {sound: action.payload}
        case EDIT_SOUND:
            return {sounds: action.payload}
        case DELETE_SOUND:
            return {deletedSound: action.payload}
        default:
            return state;
    }
}
