import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
	name: 'product',
	initialState: {
		list: [],
	},
	reducers: {
        productsSearch(state, action) {
            state.list=state.list.map((item) => ({
							...item,
							show: item.title
								.toLowerCase()
								.startsWith(action.payload.toLowerCase()),
						}));
        },
        productsReset(state, action) {
            state.list = state.list.map((item) => ({ ...item, show: true }));
        },
        productSort(state, action) {
            const getPrice = ({ filteredPrice }) => +filteredPrice;
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
});

export const {productsSearch, productsReset, productSort } = productSlice.actions;

export default productSlice.reducer;