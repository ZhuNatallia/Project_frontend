import React from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import GreenButton from '../../UI/GreenButton';

export default function BasketCalculation() {
	const basket = useSelector((state) => state.basket.list);
	const products = useSelector((state) => state.products.list);

	const totalPrice = basket.reduce((acc, item) => {
		const product = products.find(({ id }) => id === item.id);
		return acc + item.count * product.price;
	}, 0);

	const urlSale = 'http://localhost:3333/order/send ';
	const onSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch(urlSale, {
				method: 'POST',
				body: JSON.stringify({
					id: Date.now(),
					phone: +event.target.phone.value,
				}),
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log(error);
		}
		event.target.phone.value = '';
	};
	return (
		<div className={s.wrapper}>
			<h3>Order details</h3>
			<div className={s.container_price}>
				<p className={s.title}>Total:</p>
				<p className={s.price}>{totalPrice} €</p>
			</div>

			<form onSubmit={onSubmit} className={s.form}>
				<input type='tel' name='phone' placeholder='+49' />
				<GreenButton style={{ right: 50, bottom: 40 }}>Order</GreenButton>
			</form>
		</div>
	);
}
