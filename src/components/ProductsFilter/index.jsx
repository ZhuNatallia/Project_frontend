import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {productFilterAction, productSortAction} from '../../store/reducer/productsReducer';

export default function ProductsFilter() {
	const list = useSelector((state) => state.products.list);

	const dispatch = useDispatch();

	const sorthOnChange = (event) => {
		dispatch(productSortAction(+event.target.value));
	};
	const filterOnChange = (event) => {
		dispatch(productFilterAction());
	};
	/* const [state, setState] = useState(false); */

	const [priceFilter, setPriceFilter] = useState({
		min: -Infinity,
		max: Infinity,
	});
	const [products, setProduct] = useState(list);

	/* const filterPrice = () => {
		setProduct((previosValue) =>
			previosValue.filter(({show_flg})=> show_flg).map((product) => {
				const { max, min } = priceFilter;
				product.show_flg =
					product.price >= min && product.price <= max;
				return product;
			})
		);
	}; */

	useEffect(() => {
		productFilterAction()
	},[priceFilter])

	const maxInput = (event) => {
		setPriceFilter((previosValue) => ({
			...previosValue,
			max: +event.target.value || Infinity,
		}));
	};
	const minInput = (event) => {
		setPriceFilter((previosValue) => ({
			...previosValue,
			min: +event.target.value || Infinity,
		}));
	}; 

	return (
		<fieldset className={s.container}>
			<form>
				<span>Price</span>
				<input
					type='number'
					placeholder='min'
					value={priceFilter.min}
					onChange={minInput}
				/>
				<input
					type='number'
					placeholder='max'
					value={priceFilter.max}
					onChange={maxInput}
				/>
			</form>
			{/* <div>
				<p>Discounted items {state ? 'yes' : 'No'}</p>
				<input
					type='checkbox'
					checked={state}
					onChange={() => setState(!state)}
				/>
			</div> */}

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
