const SET_EDIT_MODE = "edit_mode/SET_EDIT_MODE";

// action creators
export const setEditModeAction = ( editMode ) => ({
    type: SET_EDIT_MODE,
    payload: editMode
})

export const setEditMode = (data) => async (dispatch) => {
    dispatch(setEditModeAction(data))
    return data;
}


const initialState = {editMode: false}
export default function editMode(state = initialState, action) {
    switch (action.type) {
        case SET_EDIT_MODE:
            return {editMode: action.payload}
        default:
            return state;
    }
}
