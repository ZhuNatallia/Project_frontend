import { applyMiddleware, combineReducers, createStore } from 'redux';
import { categoriesReducer } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';

const rootReduser = combineReducers({
	categories: categoriesReducer,
});

export const store = createStore(rootReduser, applyMiddleware(thunk));
