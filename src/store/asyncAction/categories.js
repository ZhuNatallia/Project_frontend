import { categoriesLoadAction } from '../reducer/categoriesReduser';

export const asynkLoadCategoriesAction = async (dispatch) => {
	const response = await fetch('http://localhost:3333/categories/all');
	const data = await response.json();
	dispatch(categoriesLoadAction(data));
};
