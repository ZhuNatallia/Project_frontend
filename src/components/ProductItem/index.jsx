import React from 'react';
import s from './style.module.css';

export default function ProductItem({
	id,
	image,
	title,
	price,
	discont_price,
}) {
	const link = 'http://localhost:3333';
	return (
		<div className={s.item}>
			<img src={`${link}${image}`} alt={title} />
			<div className={s.price}>
				<p>{price} $</p>
				<p>{discont_price} $</p>
			</div>
			{/* <button>Add to card</button> */}
			<h5>{title} </h5>
		</div>
	);
}
