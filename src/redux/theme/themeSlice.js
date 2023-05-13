// Create a slice that has an initial state with dark theme as false
// Create an action that would toggle theme for the state 

import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        darkTheme: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkTheme = !state.darkTheme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;