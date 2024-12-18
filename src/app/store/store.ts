import { configureStore } from '@reduxjs/toolkit';
import exampleReducer from './slices/exampleSlice';
import routeReducer from "./slices/routeSlice"


export const store = configureStore({
    reducer: {
        example: exampleReducer,
        route: routeReducer, 
    },
});

// Ekspor tipe untuk digunakan di seluruh aplikasi
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
