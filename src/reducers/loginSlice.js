import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        getSession: (state, action) => {
            localStorage.setItem('userData', JSON.stringify(action.payload))
        },
        removeSession: (state, action) => {
            localStorage.removeItem('userData')
        },
    },
});

export const { getSession, removeSession } = loginSlice.actions;
export default loginSlice.reducer;
