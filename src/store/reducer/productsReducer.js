const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
const PRODUCTS_SORT_PRICE = 'PRODUCTS_SORT_PRICE';
const PRODUCTS_FILTER_PRICE = 'PRODUCTS_FILTER_PRICE';

export const productLoadAction = (payload) => ({
	type: PRODUCTS_LOAD,
	payload,
});
export const productSortAction = (payload) => ({
	type: PRODUCTS_SORT_PRICE,
	payload,
});
export const productFilterAction = (payload) => ({
	type: PRODUCTS_FILTER_PRICE,
	payload,
});

const getPrice = ({ filteredPrice }) => +filteredPrice;

export const productsReducer = (state = [], action) => {
	if (action.type === PRODUCTS_LOAD) {
		return action.payload.map((item) => ({
			...item,
			show_flg: true,
			filteredPrice: item.discont_price ? item.discont_price : item.price,
		}));
	} else if (action.type === PRODUCTS_FILTER_PRICE) {
		const filterPrice = () => {
			/* setProduct((previosValue) =>
				previosValue
					.filter(({ show_flg }) => show_flg)
					.map((product) => {
						const { max, min } = priceFilter;
						state.show_flg = product.price >= min && product.price <= max;
						return product;
					})
			); */
		}; return state
		
	} else if (action.type === PRODUCTS_SORT_PRICE) {
		return [...state]/* .slice() */.sort((a, b) => {
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
