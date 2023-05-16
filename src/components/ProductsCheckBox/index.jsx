import React from 'react';
import { productSale } from '../../store/slice/productSlice';
import { useDispatch } from 'react-redux';
import s from './style.module.css'

export default function ProductsCheckBox() {

    const dispatch = useDispatch();
    

    const productSaleOnChange = (event) => {
			dispatch(productSale(event.target.checked));
		};

	return (
		<div className={s.container}>
			<label>Discounted items:{/* {checkboxState ? '+' : '-'} */} </label>
			<input
				type='checkbox'
				onChange={productSaleOnChange}
			/>
		</div>
	);
}
