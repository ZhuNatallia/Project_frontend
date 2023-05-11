import React, { useState } from 'react';
import { productSale } from '../../store/slice/productSlice';
import { useDispatch } from 'react-redux';

export default function ProductsCheckBox() {

    const dispatch = useDispatch();
    

    const productSaleOnChange = (event) => {
			dispatch(productSale(event.target.checked));
		};

	return (
		<div>
			<label>Discounted items:{/* {checkboxState ? '+' : '-'} */} </label>
			<input
				type='checkbox'
				onChange={productSaleOnChange}
			/>
		</div>
	);
}
