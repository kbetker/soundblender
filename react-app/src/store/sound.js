const ADD_SOUND = "session/ADD_SOUND"

// action creators
const setSound = (sound) => ({
    type: ADD_SOUND,
    payload: sound
})



export const addSound = (formData) => async (dispatch) => {
    console.log("===================== in the thunk =====================")
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
        default:
            return state;
    }
}
