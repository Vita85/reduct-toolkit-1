import { configureStore } from '@reduxjs/toolkit';
import counterSliceReducer from "./counter/counterSlice"

const store = configureStore({
    reducer: counterSliceReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
});

export default store;