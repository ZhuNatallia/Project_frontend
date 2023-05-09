import { createSlice } from '@reduxjs/toolkit';


export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		list: [],
	},
	reducers: {
        categoriesLoad(state, action) {
            state.list= action.payload
        },
	},
});

export const { categoriesLoad } = categoriesSlice.actions;
export default categoriesSlice.reducer;