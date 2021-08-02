const ADD_LIGHT = "ADD_LIGHT";
const REMOVE_LIGHT = "REMOVE_LIGHT";


// action creators
export const add_stop_light = ( stopLight ) => ({
    type: ADD_LIGHT,
    payload: stopLight
})

export const remove_stop_light = ( stopLight ) => ({
    type: REMOVE_LIGHT,
    payload: stopLight
})

export const addStopLight = (stopLight) => async (dispatch) => {
    dispatch(add_stop_light(stopLight))
}

export const removeStopLight = (stopLight) => async (dispatch) => {
    dispatch(remove_stop_light(stopLight))
}


const initialState = []
export default function stopLight(state = initialState, action) {
    let newObj;
    switch (action.type) {
        case ADD_LIGHT:
            newObj = [...state];
            if(!newObj.includes(action.payload)) newObj.push(action.payload)
            return newObj
        case REMOVE_LIGHT:
            newObj = [...state];
            let i = newObj.indexOf(action.payload)
            if(i > -1) newObj.splice(i, 1);
            return newObj
        default:
            return state;
    }
}
