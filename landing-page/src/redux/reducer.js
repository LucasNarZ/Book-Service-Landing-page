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

const activeGenreSlice = createSlice({
    name: "activeGenre",
    initialState:'',
    reducers:{
        changeActiveGenre(state, action){
            return action.payload;
        }
    }
})

const activeBookSlice = createSlice({
    name:"activeBook",
    initialState: [],
    reducers:{
        changeActiveBook(state, action){
            return action.payload;
        }
    }
})

export const activePlanReducer = activePlanSlice.reducer;
export const activeBarReducer = activeBarSlice.reducer;
export const userDataReducer = userDataSlice.reducer;
export const activeGenreReducer = activeGenreSlice.reducer;
export const activeBookReducer = activeBookSlice.reducer;


export const { changePlan } = activePlanSlice.actions;
export const { changeActive } = activeBarSlice.actions;
export const { updateUserData, resetUserData } = userDataSlice.actions;
export const { changeActiveGenre } = activeGenreSlice.actions;
export const { changeActiveBook } = activeBookSlice.actions;