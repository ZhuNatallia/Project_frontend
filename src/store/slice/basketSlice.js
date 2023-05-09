import { createSlice } from '@reduxjs/toolkit';

const writeToLocalStorage = (basket) =>
	localStorage.setItem('basket', JSON.stringify(basket));

export const basketSlice = createSlice({
	name: 'basket',
	initialState: {
		list: JSON.parse(localStorage.getItem('basket')) ?? [],
	},
	reducers: {
		basketIncrement(state, action) {
			const product = state.list.find(({ id }) => id === action.payload);
			product.count++;
			writeToLocalStorage(state.list);
		},
		basketDecrement(state, action) {
			const product = state.list.find(({ id }) => id === action.payload);
			product.count--;
			if (product.count === 0) {
				state.list = state.list.filter((item) => item !== product);
				writeToLocalStorage(state.list);
			}
			writeToLocalStorage(state);
		},
		basketAdd(state, action) {
			const product = state.list.find(({ id }) => id === action.payload);

			if (product === undefined) {
				state.list = [...state.list, { id: action.payload, count: 1 }];
				writeToLocalStorage(state.list);
			} else {
                product.count++;
                state.list = [...state.list];
				writeToLocalStorage(state.list);
			}
		},
		basketRemove(state, action) {
			state.list = state.list.filter(({ id }) => id !== action.payload);
			writeToLocalStorage(state.list);
		},
	},
});

export const { basketIncrement, basketDecrement, basketAdd, basketRemove } =
	basketSlice.actions;
export default basketSlice.reducer;
