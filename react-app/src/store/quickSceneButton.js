const QS_BUTTON = "QS_BUTTON";

// action creators
export const setQSbutton = ( qsButton ) => ({
    type: QS_BUTTON,
    payload: qsButton
})

export const setQuickSceneButton = (qsButton) => async (dispatch) => {
    dispatch(setQSbutton(qsButton))
}


const initialState = {qsButton: ''}
export default function qsButton(state = initialState, action) {
    switch (action.type) {
        case QS_BUTTON:
            return {qsButton: action.payload}
        default:
            return state;
    }
}
