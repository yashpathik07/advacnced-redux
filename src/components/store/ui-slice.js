import { createSlice } from '@reduxjs/toolkit';

const uiInitialState = { isCartShown: false };

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        toggleCart(state) {
            state.isCartShown = !state.isCartShown;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
