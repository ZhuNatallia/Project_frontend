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

const getPrice = ({ filteredPrice }) => +filteredPrice;

export const productsReducer = (state = [], action) => {
	if (action.type === PRODUCTS_LOAD) {
		return action.payload.map((item) => ({
			...item,
			filteredPrice: item.discont_price ? item.discont_price : item.price,
		}));
	} else if (action.type === PRODUCTS_SORT_PRICE) {
		return [...state].sort((a, b) => {
			if (action.payload === 1) {
				return getPrice(a) - getPrice(b);
			} else if (action.payload === 2) {
				return getPrice(b) - getPrice(a);
			}
			return 0;
		});
	}
	return state;
};
