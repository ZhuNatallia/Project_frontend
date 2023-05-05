const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
const PRODUCTS_SORT_PRICE = 'PRODUCTS_SORT_PRICE';

export const productLoadAction = (payload) => ({
	type: PRODUCTS_LOAD,
	payload,
});
export const productSortAction = (payload) => ({
	type: PRODUCTS_SORT_PRICE,
	payload,
});

export const productsReducer = (state = [], action) => {
	if (action.type === PRODUCTS_LOAD) {
		return action.payload;
	} else if (action.type === PRODUCTS_SORT_PRICE) {
		return [...state].sort((a, b) => {
			const discont_price = state.find(({ id }) => id === action.payload);
			if (action.payload === 1 && discont_price !== null) {
				return a.discont_price - b.discont_price;
			} else if (action.payload === 2 && discont_price !== null) {
				return b.discont_price - a.discont_price;
			} else if (action.payload === 1 && discont_price === null) {
				return a.price - b.price;
			} else if (action.payload === 2 && discont_price === null) {
				return b.price - a.price;
			}
		});
	}
	return state;
};
