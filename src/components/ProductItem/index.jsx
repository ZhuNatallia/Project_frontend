import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function ProductItem({
	id,
	image,
	title,
	price,
	discont_price,
}) {
	const link_img = 'http://localhost:3333';
	const link = `/product/${id}`;
	return (
		<Link to={link} className={s.item}>
			<img src={`${link_img}${image}`} alt={title} />
			<div className={s.price}>
				<p>{price} $</p>
				<p>{discont_price} $</p>
			</div>
			{/* <button>Add to card</button> */}
			<h5>{title} </h5>
		</Link>
	);
}
