import React, { useState } from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import { productSortAction } from '../../store/reducer/productsReducer';

export default function ProductsFilter() {
	const dispatch = useDispatch();
	const sorthOnChange = (event) => {
		dispatch(productSortAction(+event.target.value));
	};

	const [state, setState] = useState(false);

	return (
		<div className={s.container}>
			<div>
				Price
				<input type='text' placeholder='from' />
				<input type='text' placeholder='to' />
			</div>
			<div>
				<p>Discounted items {state ? 'yes' : 'No'}</p>
				<input
					type='checkbox'
					checked={state}
					onChange={() => setState(!state)}
				/>
			</div>

			<div>
				<label htmlFor="sort">Sorted</label>
				<select id='sort' onChange={sorthOnChange}>
					<option value='1'>
						by default
					</option>
					<option value='2'>Price up</option>
					<option value='3'>Price down</option>
				</select>
			</div>
		</div>
	);
}
