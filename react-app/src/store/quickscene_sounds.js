const SET_QSARRAY = "quickscenes_array/SET_QSARRAY";

// action creators
export const qsArray = ( qsArray ) => ({
    type: SET_QSARRAY,
    payload: qsArray
})

export const setQuickSceneArray = (what) => async (dispatch) => {
    // console.log(what, "wut dis??????????????")
    dispatch(qsArray(what))
}


const initialState = {qsarray: ''}
export default function quicksceneSounds(state = initialState, action) {
    switch (action.type) {
        case SET_QSARRAY:
            return {qsarray: action.payload}
        default:
            return state;
    }
}
