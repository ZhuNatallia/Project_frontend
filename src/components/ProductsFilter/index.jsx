import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
/* import {
	productFilterAction,
	productSaleAction,
	productSortAction,
} from '../../store/reducer/productsReducer'; */
import {
	productSale,
	/* productSort, */
	productsFilter,
	productsReset,
} from '../../store/slice/productSlice';
import ProductsFilterBar from '../ProductsFilterBar';
import ProductsSaleFilter from '../ProductsSaleFilter';

export default function ProductsFilter() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.list);

	const [checkboxState, setcheckboxState] = useState(false);

/* 	const sorthOnChange = (event) => {
		dispatch(productSort(+event.target.value));
	}; */

	/* useEffect(()=> {
		productSort(products)
	}, []) */
	const initialValue = { min: 0, max: Infinity };
	const [price, setPrice] = useState(initialValue);

	useEffect(() => {
		dispatch(productsReset());
		dispatch(productsFilter(price));
	}, []);

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

	const productSaleOnChange = (event) => {
		dispatch(productSale(event.target.checked));
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
			<div>
				<p>Discounted items:{/* {checkboxState ? '+' : '-'} */} </p>
				<input
					type='checkbox'
					checked={checkboxState}
					onChange={productSaleOnChange}
				/>
			</div>

{/* 			<div>
				<label htmlFor='sort'>Sorted</label>
				<select id='sort' onChange={sorthOnChange}>
					<option value='by default'>by default</option>
					<option value='1'>Price up</option>
					<option value='2'>Price down</option>
				</select>
			</div> */}
			<ProductsSaleFilter/>
			<ProductsFilterBar />
		</fieldset>
	);
}
