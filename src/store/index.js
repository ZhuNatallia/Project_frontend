import { combineReducers, createStore } from 'redux';
import { categoriesReducer } from './reducer/categoriesReduser';

const rootReduser = combineReducers({
    categories: categoriesReducer
})

export const store = createStore(rootReduser)