const REDIRECT_PAGE = "redirect/REDIRECT_PAGE";

// action creators
export const setRedirect = ( page ) => ({
    type: REDIRECT_PAGE,
    payload: page
})

export const setRedirectFunc = (page) => async (dispatch) => {
    await dispatch(setRedirect(page))
    return page;
}


const initialState = {page: null}
export default function redirectPage(state = initialState, action) {
    switch (action.type) {
        case REDIRECT_PAGE:
            return {page: action.payload}
        default:
            return state;
    }
}
