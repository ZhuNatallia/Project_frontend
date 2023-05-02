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

const defaultState = JSON.parse(localStorage.getItem('basket')) ?? [];

const writeToLocalStorage = (basket) =>
	localStorage.setItem('basket', JSON.stringify(basket));

export const basketReducer = (state = defaultState, action) => {
	if (action.type === BASKET_ADD) {
		const product = state.find(({ id }) => id === action.payload);

		if (product === undefined) {
			const newstate = [...state, { id: action.payload, count: 1 }];
			writeToLocalStorage(newstate);
			return newstate;
		} else {
			product.count++;
			writeToLocalStorage(state);
			return [...state];
		}
	} else if (action.type === BASKET_REMOVE) {
		const newState = state.filter(({ id }) => id !== action.payload);
		writeToLocalStorage(newState)
		return newState
	} else if (action.type === BASKET_INCR) {
		const product = state.find(({ id }) => id === action.payload);
		product.count++;
		writeToLocalStorage(state);
		return [...state];
	} else if (action.type === BASKET_DECR) {
		const product = state.find(({ id }) => id === action.payload);
		product.count--;
		if (product.count === 0) {
			const newState = state.filter((item) => item !== product);
			writeToLocalStorage(newState);
			return newState;
		}
		writeToLocalStorage(state);
		return [...state];
	}
	return state;
};
