import { createSlice } from "@reduxjs/toolkit";

const activePlanSlice = createSlice({
    name:"plan",
    initialState:{Plan:""},
    reducers:{
        changePlan(state, action){
            state.Plan = action.payload;
        }
    }
})

export const activePlanReducer = activePlanSlice.reducer;

export const { changePlan } = activePlanSlice.actions;