import React from 'react';
import s from './style.module.css';
import BackgroundPhoto from './media/5.jpg';
import GreenButton from '../../UI/GreenButton';

export default function SaleMainPage() {
	const urlSale = 'http://localhost:3333/sale/send';
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
		<div className={s.container}>
			<h4>5 % off </h4>
			<p>on the first order</p>
			<form onSubmit={onSubmit}>
				<input type='tel' name='phone' placeholder='+49' />
				<GreenButton>Get a discount</GreenButton>
			</form>
			<img className={s.backgroundPhoto} src={BackgroundPhoto} alt='photo' />
		</div>
	);
}
