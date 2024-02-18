import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import { createAction } from '@reduxjs/toolkit';
import { fetchAllCars } from '../services/ApiHandler';
// import { persistConfig } from './store'

const INITIAL_STATE = {
    items: [],
    isLoading: false,
    error: null,
    favoriteId: [],
};

export const toggleFavorite = (itemId) => ({
    type: 'itams/toggleFavorite',
    payload: itemId,
})

const catalogSlice = createSlice({
    name: 'items',
    initialState: INITIAL_STATE,

    reducers: {
        toggleFavorite: (state, action) => {
            const itemId = action.payload;
            const index = state.favoriteId.indexOf(itemId);
            if(index === -1) {
                state.favoriteId.push(itemId);
            } else {
                state.favoriteId.splice(index, 1);
            }
        }   
    },

extraReducers: (builder) => 
    builder.addCase(fetchAllCars.pending, (state, action) => {
        state.isLoading = true;
        state.error = null
    })
    .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
    })
    .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
    })
})




export const catalogReducer = catalogSlice.reducer;
