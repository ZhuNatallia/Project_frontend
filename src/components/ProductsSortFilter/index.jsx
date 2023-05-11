import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { productSort, productsReset } from '../../store/slice/productSlice';

export default function ProductsSortFilter() {
	const dispatch = useDispatch();

	const sorthOnChange = (event) => {
		dispatch(productSort(+event.target.value));
	};
	useEffect(() => {
		dispatch(productsReset());
	}, []);
	return (
		<div>
			<label htmlFor='sort'>Sorted</label>
			<select id='sort' onChange={sorthOnChange}>
				<option value='by default'>by default</option>
				<option value='1'>Price up</option>
				<option value='2'>Price down</option>
			</select>
		</div>
	);
}
