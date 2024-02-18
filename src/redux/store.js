import { configureStore } from '@reduxjs/toolkit';
// import { catalogReducer } from './CatalogSlice';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { catalogReducer } from './CatalogSlice';

const persistConfig = {
  key: 'items',
  storage,
  whitelist: ['favoriteId', 'catalog'],
};

export const persistedReducer = persistReducer(
  persistConfig, 
  catalogReducer
);


export const store = configureStore({
  reducer: {
    catalog: persistedReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);