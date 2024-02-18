import { createSlice } from '@reduxjs/toolkit';
// const filterInit = {
//     filter: '',
// };
// import { filterCatalog } from '../components/Filter'

// export const filterCatalog = filterData => ({
//     type: 'catalog/filterCatalog',
//     payload: filterData,
//   });

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    brand: '',
    price: '',
    mileageFrom: '',
    mileageTo: '',
  },
  
  reducers: {
    updateFilters: (state, action) => {
        const { brand, price, mileageFrom, mileageTo } = action.payload;
        state.brand = brand;
        state.price = price;
        state.mileageFrom = mileageFrom;
        state.mileageTo = mileageTo;
      },
  },
//   extraReducers: (builder) => {
//     builder.addCase('filter/filterCatalog', (state, action) => {
//       const { brand } = action.payload;
//       state.brand = brand; 
     
//     });
//   },
});

// export const setBrand = (brand) => ({
//     type: 'filter/setBrand',
//     payload: brand,
//   });
  
//   export const setPrice = (price) => ({
//     type: 'filter/setPrice',
//     payload: price,
//   });
  
//   export const setMileageFrom = (mileageFrom) => ({
//     type: 'filter/setMileageFrom',
//     payload: mileageFrom,
//   });
  
//   export const setMileageTo = (mileageTo) => ({
//     type: 'filter/setMileageTo',
//     payload: mileageTo,
//   });

export const { setBrand, setPrice, setMileageFrom, setMileageTo, updateFilters } =
  filterSlice.actions;
export const filterReducer = filterSlice.reducer;
