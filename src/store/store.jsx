import { configureStore } from "@reduxjs/toolkit";
import { registrationSlice } from './Reducer/counterSlice'

export const store = configureStore({
  reducer: {
    registration: registrationSlice.reducer
  }
})
