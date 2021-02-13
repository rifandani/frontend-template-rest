import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// files
// import { RootState } from '../store'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 3,
  },
  // Redux Toolkit allows us to write "mutating" logic in reducers. It
  // doesn't actually mutate the state because it uses the Immer library.
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    reset: (state) => {
      state.value = 0
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// export const counterSelector = (state: RootState): number => state.counter.value

// counter actions
export const {
  increment,
  decrement,
  reset,
  incrementByAmount,
} = counterSlice.actions

// counter reducer
export default counterSlice.reducer
