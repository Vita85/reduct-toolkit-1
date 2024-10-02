import { createSlice } from '@reduxjs/toolkit';

const  initialState = { value: 0 }

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => { state.value += 1; },
    decrement: state => { state.value -= 1; },
    incrementBy: (state, action) => { state.value += action.payload; },
    decrementBy:  (state, action) => { state.value -= action.payload; },
    decrementPrompt:  (state, action) => { state.value += action.payload; },
    incrementPrompt:  (state, action) => { state.value -= action.payload; },
  }
});

export const { increment, decrement,incrementBy,  decrementBy, decrementPrompt, incrementPrompt} = counterSlice.actions;
export default counterSlice.reducer;