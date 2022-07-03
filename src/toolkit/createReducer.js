import { createAction, createReducer } from '@reduxjs/toolkit'

export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')
export const incrementByAmount = createAction('counter/incrementByAmount')

const initialState = { counter: 0 }

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.counter++
    })
    .addCase(decrement, (state, action) => {
      state.counter--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.counter += action.payload
    })
});


