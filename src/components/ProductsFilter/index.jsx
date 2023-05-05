import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { productSortAction } from '../../store/reducer/productsReducer';

export default function ProductsFilter() {
	const dispatch = useDispatch();
	const sorthOnChange = (event) => {
		dispatch(productSortAction(+event.target.value));
	};
	return (
		<div className={s.container}>
			<select onChange={sorthOnChange}>
				<option value='1'>Price up</option>
				<option value='2'>Price down</option>
			</select>
		</div>
	);
}
