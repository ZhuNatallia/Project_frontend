import React from 'react';
import s from './style.module.css';
import { useDispatch } from 'react-redux';
import {
	basketDecrementAction,
	basketIncrementAction,
    basketRemoveAction,
} from '../../store/reducer/basketReducer';

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
		<div className={s.item}>
			<img src={`${link_img}${image}`} alt={title} />
			<div className={s.info}>
				<p>{title} </p>
				<div className={s.btns}>
					<button onClick={() => dispatch(basketIncrementAction(id))}>+</button>
					<p>
						{price} x {count} = {price * count}
					</p>
					<button onClick={() => dispatch(basketDecrementAction(id))}>-</button>
				</div>
			</div>
			<div className={s.price}>
				<p>{price} $</p>
				<p>{discont_price} $</p>
            </div>
            <button onClick={()=>dispatch(basketRemoveAction(id))}>X</button>
		</div>
	);
}
