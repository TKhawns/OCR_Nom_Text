import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        isUploadModal: false,
    },
    reducers: {
        isUploadTrue: (state, action) => {
            state.isUploadModal = action.payload;
        },
    },
});

export const { isUploadTrue } = eventSlice.actions;
export default eventSlice.reducer;
