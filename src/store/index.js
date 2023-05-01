import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReducer } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';
import { basketReducer } from './reducer/basketReducer';

const rootReduser = combineReducers({
	categories: categoriesReducer,
	products: productsReducer,
	basket: basketReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
