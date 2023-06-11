import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('reducer should change value to opposite value', () => {
    //data
const state : StateType = {
    collapsed: false
}

    //action
const newState = reducer(state,{type:TOGGLE_COLLAPSED})
    //
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be true', () => {
    //data
    const state : StateType = {
        collapsed: false
    }

    //action
    const newState = reducer(state,{type:TOGGLE_COLLAPSED})
    //
    expect(newState.collapsed).toBe(true)
})

test('collapsed should be false', () => {
    //data
    const state : StateType = {
        collapsed: false
    }

    expect(()=>{
        reducer(state,{type:"FAKETYPE"})
    }).toThrowError()

})