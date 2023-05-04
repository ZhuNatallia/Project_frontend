import React from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';

export default function BasketCalculation() {
	const { basket, products } = useSelector((state) => state);

	const totalPrice = basket.reduce((acc, item) => {
		const product = products.find(({ id }) => id === item.id);
		return acc + item.count * product.price;
	}, 0);
	return (
		<div className={s.wrapper}>
			<h3>Order details</h3>
			<p>Total: {totalPrice} $</p>
			<form>
				<input type='tel' name='phone_number' />
				
			</form>
			<button className={s.btn}>Order</button>
		</div>
	);
}
