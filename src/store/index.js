import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReducer } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';

const rootReduser = combineReducers({
	categories: categoriesReducer,
	products: productsReducer
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
