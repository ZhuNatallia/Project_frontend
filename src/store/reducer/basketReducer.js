const BASKET_INCR = 'BASKET_INCR';
const BASKET_DECR = 'BASKET_DECR';
const BASKET_ADD = 'BASKET_ADD';
const BASKET_REMOVE = 'BASKET_REMOVE';

export const basketIncrementAction = (payload) => ({
	type: BASKET_INCR,
	payload,
});
export const basketDecrementAction = (payload) => ({
	type: BASKET_DECR,
	payload,
});
export const basketAddAction = (payload) => ({
	type: BASKET_ADD,
	payload,
});
export const basketRemoveAction = (payload) => ({
	type: BASKET_REMOVE,
	payload,
});

const defaultState = [
	{ id: 1, count: 5 },
	{ id: 2, count: 7 },
	{ id: 3, count: 3 },
];

export const basketReducer = (state = defaultState, action) => {
	if (action.type === BASKET_ADD) {
		const product = state.find(({ id }) => id === action.payload);

		if (product === undefined) {
			return [...state, { id: action.payload, count: 1 }];
		} else {
			product.count++;
			return [...state];
		}
	} else if (action.type === BASKET_REMOVE) {

		return state.filter(({id}) => id !== action.payload)
	} else if (action.type === BASKET_INCR) {

		const product = state.find(({ id }) => id === action.payload);
		product.count++;
		return [...state];
	} else if (action.type === BASKET_DECR) {

		const product = state.find(({ id }) => id === action.payload);
		product.count--;
		if (product.count === 0) {
			return state.filter((item) => item !== product);
		}
		return [...state];
	}
	return state;
};
