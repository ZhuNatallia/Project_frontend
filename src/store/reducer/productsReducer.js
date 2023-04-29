const PRODUCTS_LOAD = 'PRODUCTS_LOAD';

export const productLoadAction = (payload) => ({ type: PRODUCTS_LOAD, payload });

export const productsReducer = (state = [], action) => {
    if (action.type === PRODUCTS_LOAD) {
        return action.payload
    }
    return state
}