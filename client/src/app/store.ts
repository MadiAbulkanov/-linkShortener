import productSlice from '@/features/links/links.slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { 
    [productSlice.name]: productSlice.reducer,
   },
});


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
