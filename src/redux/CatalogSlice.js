import { createSlice } from '@reduxjs/toolkit';
import { fetchAllCars } from '../services/ApiHandler';
// import { filterCatalog } from './filterSlice';


export const toggleFavorite = (itemId) => ({
    type: 'itams/toggleFavorite',
    payload: itemId,
})

const catalogSlice = createSlice({
  name: 'catalog',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favoriteId: [],
    filteredItems: [],
  },
  reducers: {
    setCatalogItems: (state, action) => {
      state.items = action.payload;
      state.filteredItems = action.payload;
    },
    toggleFavorite: (state, action) => {
      const itemId = action.payload;
      const index = state.favoriteId.indexOf(itemId);
      if (index === -1) {
        state.favoriteId.push(itemId);
      } else {
        state.favoriteId.splice(index, 1);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchAllCars.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload];
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase('catalog/filterCatalog', (state, action) => {
        // Додавання відповідного типу дії
        const { brand, price, mileageFrom, mileageTo } = action.payload;
        state.filteredItems = state.items.filter(item => {
          // Логіка фільтрації на основі обраних критеріїв
          return (
            (!brand || item.brand === brand) &&
            (!price || item.price === price) &&
            (!mileageFrom || item.mileage >= mileageFrom) &&
            (!mileageTo || item.mileage <= mileageTo)
          );
        });
      });
  },
});

export const { setCatalogItems } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;
