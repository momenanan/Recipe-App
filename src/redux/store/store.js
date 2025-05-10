import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/login.js';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});
