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

const activeBarSlice = createSlice({
    name:"activeBar",
    initialState:"p1",
    reducers:{
        changeActive(state, action){
            return action.payload;
        }
    }
})

const userDataSlice = createSlice({
    name:"userData",
    initialState:[],
    reducers:{
        updateUserData(state, action){
            return [...state, action.payload]
        },
        resetUserData(state, action){
            return []
        }
    }
})

export const activePlanReducer = activePlanSlice.reducer;
export const activeBarReducer = activeBarSlice.reducer;
export const userDataReducer = userDataSlice.reducer;


export const { changePlan } = activePlanSlice.actions;
export const { changeActive } = activeBarSlice.actions;
export const { updateUserData, resetUserData } = userDataSlice.actions;