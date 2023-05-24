/* import {
	productFilterAction,
	productSaleAction,
	productSortAction,
} from '../../store/reducer/productsReducer'; */
import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { productsFilter, productsReset } from '../../store/slice/productSlice';
import ProductsFilterBar from '../ProductsFilterBar';
import ProductsSortFilter from '../ProductsSortFilter';
import ProductsCheckBox from '../ProductsCheckBox';

export default function ProductsFilter() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.list);

	const initialValue = { min: 0, max: Infinity };
	const [price, setPrice] = useState(initialValue);

	useEffect(() => {
		dispatch(productsReset());
		dispatch(productsFilter(price));
	}, [price]);

	const maxInput = (value) => {
		setPrice(({ min }) => ({
			min,
			max: value,
		}));
	};
	const minInput = (value) => {
		setPrice(({ max }) => ({
			max,
			min: value,
		}));
	};
	const maxHandler = ({ target }) => {
		const value = +target.value === '' ? Infinity : +target.value;
		maxInput(value);
	};
	const minHandler = ({ target }) => {
		const value = +target.value;
		minInput(value);
	};

	return (
		<fieldset className={s.container}>
			<form className={s.filter_container}>
				<span>Price</span>
				<input
					type='number'
					placeholder='min'
					value={price.min === 0 ? '' : price.min}
					onChange={minHandler}
				/>
				<input
					type='number'
					placeholder='max'
					value={price.max === Infinity ? '' : price.max}
					onChange={maxHandler}
				/>
				<button onClick={() => setPrice(initialValue)}>X</button>
			</form>
			<ProductsCheckBox />
			<ProductsSortFilter />
			<ProductsFilterBar />
		</fieldset>
	);
}
