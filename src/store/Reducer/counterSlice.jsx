import { createSlice } from "@reduxjs/toolkit";
import registrationuser from '../Reducer/counterSlice';

const initialState = {
	name :"",
	email : "",
	id : ""
}

export const registrationuser = createSlice({
	name : 'counter',
	initialState,
    reducers:{
		registrationuser :(state, action)=> {
          state.name = action.payload.name;
          state.email = action.payload.email;
          state.id = action.payload.id;
		}
	}
})


export const {counterSlice} = counterSlice.action;
export default counterSlice.reducer;