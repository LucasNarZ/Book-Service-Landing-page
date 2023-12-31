import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist';
import { configureStore } from "@reduxjs/toolkit";

import { activePlanReducer, activeBarReducer, userDataReducer, activeGenreReducer, activeBookReducer } from "./reducer";

const persistConfig = {
    key:"root",
    version:1,
    storage,
}

const reducer = combineReducers({
    plan:activePlanReducer,
    activeBar:activeBarReducer,
    userData:userDataReducer,
    activeGenre: activeGenreReducer,
    activeBook: activeBookReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)


const store = configureStore({
    reducer: persistedReducer
    
});
export default store;