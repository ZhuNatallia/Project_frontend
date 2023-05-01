import React from 'react';
import s from './style.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { basketAddAction } from '../../store/reducer/basketReducer';

export default function ProductItem({
	id,
	image,
	title,
	price,
	discont_price,
}) {
	const dispatch = useDispatch();
	const link_img = 'http://localhost:3333';
	const link = `/product/${id}`;
	return (
		<div className={s.item}>
			<Link to={link} className={s.link}>
				<img src={`${link_img}${image}`} alt={title} />
				<div className={s.price}>
					<p>{price} $</p>
					<p>{discont_price} $</p>
				</div>
				<h5>{title} </h5>
			</Link>
			<button className={s.btn} onClick={() => dispatch(basketAddAction(id))}>Add to card</button>
		</div>
	);
}
