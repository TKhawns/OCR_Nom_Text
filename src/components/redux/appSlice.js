import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
    name: 'app',
    initialState: {
        language: 'vi',
    },
    reducers: {
        appLanguage: (state, action) => {
            state.language = action.payload;
            state.error = null;
        },
    },
});

export const { appLanguage } = appSlice.actions;
export default appSlice.reducer;
