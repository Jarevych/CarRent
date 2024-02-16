const { createSlice } = require('@reduxjs/toolkit');
// const filterInit = {
//     filter: '',
// };

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        brand: null,
        price: null,
        mileageFrom: null,
        mileageTo: null, 
    },

    reducers: {
        setBrand: (state, action) => {
            state.brand = action.payload;
        },
        setPrice: (state, action) => {
            state.price = action.payload;
        },
        setMileageFrom: (state, action) => {
            state.mileageFrom = action.payload;
        },
        setMileageTo: (state, action) => {
            state.mileageTo = action.payload;
        },
    },
});

export const { setBrand, setPrice, setMileageFrom, setMileageTo } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;