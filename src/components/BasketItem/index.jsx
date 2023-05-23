import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
/* import {
	basketDecrementAction,
	basketIncrementAction,
	basketRemoveAction,
} from '../../store/reducer/basketReducer'; */
import { basketDecrement, basketIncrement, basketRemove } from '../../store/slice/basketSlice';

export default function BasketItem({
	id,
	image,
	title,
	price,
	discont_price,
	count,
}) {
	const dispatch = useDispatch();
	const link_img = 'http://localhost:3333';
	return (
		<div>
			<div className={s.item}>
				<img src={`${link_img}${image}`} alt={title} />
				<div className={s.info}>
					<p className={s.title}>{title} </p>
					<div className={s.btns}>
						<button onClick={() => dispatch(basketIncrement(id))}>+</button>
						<p>{count}</p>
						<button onClick={() => dispatch(basketDecrement(id))}>-</button>
					</div>
				</div>
				{discont_price !== null ? (
					<div className={s.price}>
						<p
							style={{
								textDecoration: 'line-through',
								color: '#8B8B8B',
								fontSize: '20px',
							}}
						>
							{price} €
						</p>
						<p style={{ fontWeight: 'bold', fontSize: '26px' }}>
							{discont_price} €
						</p>
					</div>
				) : (
					<p
						className={s.price}
						style={{ fontWeight: 'bold', fontSize: '26px' }}
					>
						{price} €
					</p>
				)}
				<button className={s.clearBtn} onClick={() => dispatch(basketRemove(id))}>X</button>
			</div>
		</div>
	);
}
