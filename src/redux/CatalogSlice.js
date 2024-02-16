import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import { createAction } from '@reduxjs/toolkit';
import { fetchAllCars } from '../services/ApiHandler';

const INITIAL_STATE = {
    items: [],
    isLoading: false,
    error: null,
    favouriteId: [],
};

const catalogSlice = createSlice({
    name: 'catalog',
    initialState: INITIAL_STATE,

    extraReducers: (builder) => 
    builder.addCase(fetchAllCars.pending, (state, action) => {
        state.isLoading = true;
        state.error = null
    })
    .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalog = action.payload;
    })
    .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
})

const persistConfig = {
    key: 'catalog',
    storage,
    whitelist: ['catalog'],
};

export const persistedReducer = persistReducer(
    persistConfig, 
    catalogSlice.reducer
);

export const catalogReducer = catalogSlice.reducer;
