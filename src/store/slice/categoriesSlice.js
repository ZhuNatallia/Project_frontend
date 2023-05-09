import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncLoadCategories = createAsyncThunk(
	'categories / asyncLoadCategories',
	async () => {
		const response = await fetch('http://localhost:3333/categories/all');
		const data = await response.json();
		return data;
	}
);

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