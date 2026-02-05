import {configureStore} from '@reduxjs/toolkit'
import cartreducers from '../feathers/carts/cartSlice.js'


import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  cartreducers
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);