import React, { useEffect, useState } from 'react';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
/* import {
	productFilterAction,
	productSaleAction,
	productSortAction,
} from '../../store/reducer/productsReducer'; */
import { productSort } from '../../store/slice/productSlice';
import ProductsFilterBar from '../ProductsFilterBar';

export default function ProductsFilter({ filterByPrice }) {
	const products = useSelector((state) => state.products.list);

	const dispatch = useDispatch();

	const sorthOnChange = (event) => {
		dispatch(productSort(+event.target.value));
	};

	const initialValue = { min: 0, max: Infinity };

	const [price, setPrice] = useState(initialValue);

	useEffect(() => filterByPrice(price), [price]);

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
	/* 	const filterOnChange = (event) => {
		dispatch(productFilterAction());
	};

	
	const [checkboxState, setcheckboxState] = useState(false);

const productSaleOnChange = (event) => {
	setcheckboxState(event.target.checked)
	dispatch(productSaleAction(event.target.checked));
	};
	 */
	/* const [products, setProduct] = useState(list); */

	/* const filterPrice = () => {
		setProduct((state) =>
			state.filter(({show_flg})=> show_flg).map((product) => {
				const { max, min } = priceFilter;
				product.show_flg =
					product.price >= min && product.price <= max;
				return product;
			})
		);
	}; */

	/* 	useEffect(() => {
		productFilterAction();
	}, [priceFilter]);

	 */

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
			{/*<div>
				<p>Discounted items</p>
				<input type='checkbox' onChange={productSaleOnChange()} />
			</div> */}

			<div>
				<label htmlFor='sort'>Sorted</label>
				<select id='sort' onChange={sorthOnChange}>
					<option value='by default'>by default</option>
					<option value='1'>Price up</option>
					<option value='2'>Price down</option>
				</select>
			</div>
			<ProductsFilterBar />
		</fieldset>
	);
}
