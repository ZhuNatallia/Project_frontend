import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
/* import { productsSearchFilterAction } from '../../store/reducer/productsReducer'; */
import { productsSearch } from '../../store/slice/productSlice';

export default function ProductsFilterBar() {
	const dispatch = useDispatch();

	const searchOnChange = (event) => {
		dispatch(productsSearch(event.target.value));
	};

	return (
		<div className={s.container}>
			<input type='text' placeholder='поиск...' onChange={searchOnChange} />
		</div>
	);
}
