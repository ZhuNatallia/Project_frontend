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
	const [priceFrom, setPriceFrom] = useState("");
	const [priceTo, setPriceTo] = useState("");

	/* const formHandleFrom = (e) => {
		if (e.key === 'Enter') {
			setPriceFrom(e.target.value);
		}
	};
	const formHandleTo = (e) => {
		if (e.key === 'Enter') {
			setPriceTo(e.target.value);
		}
	}; */

	return (
		<fieldset className={s.container}>
			<div>
				<span>Price</span>
				<input
					onChange={(e) => setPriceFrom(e.target.value)}
					/* onKeyDown={formHandleFrom} */
					value={priceFrom}
					type='number'
					placeholder='from'
				/>
				<input
					onChange={(e) => setPriceTo(e.target.value)}
					/* onKeyDown={formHandleTo} */
					name='priceTo'
					value={priceTo}
					type='number'
					placeholder='to'
				/>
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
				<label htmlFor='sort'>Sorted</label>
				<select id='sort' onChange={sorthOnChange}>
					<option value='by default'>by default</option>
					<option value='1'>Price up</option>
					<option value='2'>Price down</option>
				</select>
			</div>
		</fieldset>
	);
}
