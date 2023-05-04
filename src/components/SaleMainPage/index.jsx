import React from 'react';
import s from './style.module.css';
import BackgroundPhoto from './media/5.jpg';

export default function SaleMainPage() {
	return (
		<div className={s.container}>
			<h4>5 % off </h4>
			<p>on the first order</p>
			<input type='tel' name='' placeholder='+49' />
			<button className={s.btn}>Get a discount</button>
			<img className={s.backgroundPhoto} src={BackgroundPhoto} alt='photo' />
		</div>
	);
}
