const SET_MODAL = "modal/SET_MODAL";

// action creators
export const setModal = ( modal ) => ({
    type: SET_MODAL,
    payload: modal
})

export const setModalState = (modal) => async (dispatch) => {
    dispatch(setModal(modal))
}


const initialState = {modal: ''}
export default function modalReducer(state = initialState, action) {
    switch (action.type) {
        case SET_MODAL:
            return {modal: action.payload}
        default:
            return state;
    }
}
