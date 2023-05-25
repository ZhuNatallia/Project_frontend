import React from 'react';
import { productSale } from '../../store/slice/productSlice';
import { useDispatch } from 'react-redux';
import s from './style.module.css';
import { useLocation } from 'react-router-dom';

export default function ProductsCheckBox() {
	const dispatch = useDispatch();
	const saleLocation = useLocation();

	const productSaleOnChange = (event) => {
		dispatch(productSale(event.target.checked));
	};

	return (
		<div>
			{saleLocation.pathname === '/products/sale' ? (
				''
			) : (
				<div className={s.container}>
					<label>Discounted items:</label>
					<input type='checkbox' onChange={productSaleOnChange} />
				</div>
			)}
		</div>
	);
}
