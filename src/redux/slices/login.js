import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
        updateCountry: (state, action) => {
            if (state.user) {
                state.user.country = action.payload;
            }
        },
        updateDishes: (state, action) => {
            if (state.user) {
                state.user.dishes = action.payload;
            }
        },
        updatePreferences: (state, action) => {
            if (state.user) {
                state.user.preferences = action.payload;
            }
        },
        updatePhone: (state, action) => {
            if (state.user) {
                state.user.phone = action.payload;
            }
        },
        updateUserField: (state, action) => {
            const { key, value } = action.payload;
            if (state.user && key in state.user) {
                state.user[key] = value;
            }
        }

    },
});

export const {
    login,
    logout,
    updateCountry,
    updateDishes,
    updatePreferences,
    updateUserField,
} = userSlice.actions;

export default userSlice.reducer;
