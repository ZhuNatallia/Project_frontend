import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncLoadProducts = createAsyncThunk(
	'products/asyncLoadProducts',
	async () => {
		const response = await fetch('http://localhost:3333/products/all');
		const data = await response.json();

		return data;
		
	}
);
const getPrice = ({ filteredPrice }) => +filteredPrice;

export const productSlice = createSlice({
	name: 'products',
	initialState: {
		list: [],
	},
	reducers: {
		productLoad(state, action) {
			state.products = action.payload.map((item) => ({
				...item,
				show: true,
				show_sale: item.discont_price ? item : '',
				show_flg: true,
				filteredPrice: item.discont_price ? item.discont_price : item.price,
			}));
		},

		productsSearch(state, action) {
			state.list = state.list.map((item) => ({
				...item,
				show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()),
			}));
		},
		productsReset(state) {
			state.list = state.list.map((item) => ({ ...item, show: true }));
		},
		productSort(state, action) {
			
			state.list = state.list.sort((a, b) => {
				if (action.payload === 1) {
					return getPrice(a) - getPrice(b);
				} else if (action.payload === 2) {
					return getPrice(b) - getPrice(a);
				}
				return 0;
			});
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncLoadProducts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(asyncLoadProducts.fulfilled, (state,{payload} ) => {
				state.status = 'resolve';
				state.list = payload;
			})
			.addCase(asyncLoadProducts.rejected, (state,{payload} ) => {
				state.status = 'rejected';
				state.error = payload
			});
	}
});

export const { productLoad, productsSearch, productsReset, productSort } =
	productSlice.actions;

export default productSlice.reducer;
