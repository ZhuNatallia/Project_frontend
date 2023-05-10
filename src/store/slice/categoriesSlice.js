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
			state.list = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncLoadCategories.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(asyncLoadCategories.fulfilled, (state, { payload }) => {
				state.status = 'resolve';
				state.list = payload;
			})
			.addCase(asyncLoadCategories.rejected, (state, { payload }) => {
				state.status = 'rejected';
				state.error = payload;
			});
	},
});

export const { categoriesLoad } = categoriesSlice.actions;
export default categoriesSlice.reducer;