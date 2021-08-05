const MIDI_BUTTON = "MIDI_BUTTON";

// action creators
export const midiControlFunc = ( midiData ) => ({
    type: MIDI_BUTTON,
    payload: midiData
})

export const midiControl = (midiData) => async (dispatch) => {
    dispatch(midiControlFunc(midiData))
}


const initialState = {midiData: [0, 0]}
export default function midiState(state = initialState, action) {
    switch (action.type) {
        case MIDI_BUTTON:
            return action.payload
        default:
            return state;
    }
}
