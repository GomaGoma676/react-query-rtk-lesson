import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

export interface CounterState {
  value: number
  mode: boolean
}

const initialState: CounterState = {
  value: 0,
  mode: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    toggleMode: (state) => {
      state.mode = !state.mode
    },
  },
})

export const { increment, decrement, toggleMode } = counterSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value
export const selectMode = (state: RootState) => state.counter.mode

export default counterSlice.reducer
