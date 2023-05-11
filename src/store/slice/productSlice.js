import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const asyncLoadProducts = createAsyncThunk(
	'products/asyncLoadProducts',
	async () => {
		const response = await fetch('http://localhost:3333/products/all');
		const data = await response.json();
		const newData = data.map((item) => ({
			...item,
			show: true,//сортировка по возрастанию и убыванию цены
			show_sale: true, /* item.discont_price ? item : '' товары со скидкой*/
			show_flg: true, //фильтрация по цене
			filteredPrice: item.discont_price ? item.discont_price : item.price,
		}));

		return newData;
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
				show_sale: true /* item.discont_price ? item : '' */,
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
			state.list = state.list.map((item) => ({
				...item,
				show: true,
				show_sale: true,
			}));
		},
		productSort(state, action) {
			/* if (action.payload === 1) {
				state.list = state.list.sort((a, b) => getPrice(a) - getPrice(b));
			} else if (action.payload === 2) {
				state.list = state.list.sort((a, b) => getPrice(b) - getPrice(a));
			}
			return 0 */
				state.list = state.list.sort((a, b) => {
					if (action.payload === 1) {
						return getPrice(a) - getPrice(b);
					} else if (action.payload === 2) {
						return getPrice(b) - getPrice(a);
					}
					return 0;
				});
		},
		productSale(state,{payload}) {
			state.list.map((item) => {
				if(payload) {
					item.show_sale=item.discont_price ? true : false
				}else{
					item.show_sale = true
				}
			})
		},
		productsFilter(state, { payload }) {
			const { min = 0, max = Infinity } = payload
			state.list.map(item => {
				if (item.price <= max && item.price >= min) {
					item.show_flg = true
				} else {
					item.show_flg = false
				}
			
			})
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(asyncLoadProducts.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(asyncLoadProducts.fulfilled, (state, { payload }) => {
				state.status = 'resolve';
				state.list = payload;
			})
			.addCase(asyncLoadProducts.rejected, (state, { payload }) => {
				state.status = 'rejected';
				state.error = payload;
			});
	},
});

export const {
	productLoad,
	productsSearch,
	productsReset,
	productSort,
	productSale,
	productsFilter,
} = productSlice.actions;

export default productSlice.reducer;
