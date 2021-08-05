import React from "react"
import { useDispatch } from "react-redux"
import { midiControl } from "../../store/midiKeyPress"



function MIDI(){
    const dispatch = useDispatch()

    navigator.requestMIDIAccess().then(access => {
        const devicesInput = access.inputs.values();
        for (let input of devicesInput) {
            input.onmidimessage = onMidiMesage;
        }
    })

    function onMidiMesage(message) {
        dispatch(midiControl([message.data[1], message.data[2]]))
    }

    return(
        <>
        </>
    )
}

export default MIDI
