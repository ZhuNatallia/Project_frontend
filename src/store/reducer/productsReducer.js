const PRODUCTS_LOAD = 'PRODUCTS_LOAD';
const PRODUCTS_SEARCH_FILTER = 'PRODUCTS_SEARCH_FILTER';
const PRODUCTS_RESET_FILTER = 'PRODUCTS_RESET_FILTER';
const PRODUCTS_SORT_PRICE = 'PRODUCTS_SORT_PRICE';
const PRODUCTS_FILTER_PRICE = 'PRODUCTS_FILTER_PRICE';
const PRODUCTS_SALE = 'PRODUCTS_SALE';

export const productLoadAction = (payload) => ({
	type: PRODUCTS_LOAD,
	payload,
});
export const productsSearchFilterAction = (payload) => ({
	type: PRODUCTS_SEARCH_FILTER,
	payload,
});
export const productsResetFilter = () => ({ type: PRODUCTS_RESET_FILTER });

export const productSortAction = (payload) => ({
	type: PRODUCTS_SORT_PRICE,
	payload,
});
export const productFilterAction = (payload) => ({
	type: PRODUCTS_FILTER_PRICE,
	payload,
});
export const productSaleAction = (state, {payload} )=> ({
	type: PRODUCTS_SALE,
	payload,
});

const getPrice = ({ filteredPrice }) => +filteredPrice;

export const productsReducer = (state = [], action) => {
	if (action.type === PRODUCTS_LOAD) {
		return action.payload.map((item) => ({
			...item,
			show: true,
			show_sale: item.discont_price ? item : '',
			show_flg: true,
			filteredPrice: item.discont_price ? item.discont_price : item.price,
		}));
	} else if (action.type === PRODUCTS_SEARCH_FILTER) {
		return state.map((item) => ({
			...item,
			show: item.title.toLowerCase().startsWith(action.payload.toLowerCase()),
		}));
	} else if (action.type === PRODUCTS_RESET_FILTER) {
		return state.map((item) => ({ ...item, show: true }));
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
		};
		return state;
	} else if (action.type === PRODUCTS_SORT_PRICE) {
		return [...state] /* .slice() */
			.sort((a, b) => {
				if (action.payload === 1) {
					return getPrice(a) - getPrice(b);
				} else if (action.payload === 2) {
					return getPrice(b) - getPrice(a);
				}
				return 0;
			});
	} /* else if (action.type === PRODUCTS_SALE) {
		
			state.list = state.list.map(item => {
				if (item.discont_price !== null) {
					state.list = state.list.map(elem=>({...elem, show_sale: true}))
				} else {
					return {...item}
				}
			})
		
		
		
	} */
	return state;
};
