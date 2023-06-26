import { createSlice } from "@reduxjs/toolkit";

const activePlanSlice = createSlice({
    name:"plan",
    initialState:"",
    reducers:{
        changePlan(state, action){
            return action.payload;
        }
    }
})

export const activePlanReducer = activePlanSlice.reducer;

export const { changePlan } = activePlanSlice.actions;