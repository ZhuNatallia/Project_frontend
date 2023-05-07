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
	/* const priceProcent = (discont_price * 100 / price)
	const sale = (100 - priceProcent).toFixed(2)}; */

	const isSale = ({ isSale }) => (isSale ? s.active : '');

	return (
		<div className={s.item}>
			<Link to={link} className={s.link}>
				<img src={`${link_img}${image}`} alt={title} />

				<h5>{title} </h5>
			</Link>

			{discont_price !== null ? (
				<div className={s.price}>
					<div className={s.sale}>Sale</div>
					<p
						style={{
							textDecoration: 'line-through',
							color: '#8B8B8B',
							fontSize: '20px',
						}}
					>
						{price} $
					</p>
					<p
						style={{ fontWeight: 'bold', fontSize: '26px' }}
					>
						{discont_price} $
					</p>
					<p style={{ color: 'red', fontSize: '20px' }}>
						{((price / discont_price) * 100 - 100).toFixed(1)} %
					</p>
				</div>
			) : (
				<p style={{ fontWeight: 'bold', fontSize: '26px' }}>{price} $</p>
			)}

			<button className={s.btn} onClick={() => dispatch(basketAddAction(id))}>
				Add to card
			</button>
		</div>
	);
}
