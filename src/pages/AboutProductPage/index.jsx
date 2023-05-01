import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './style.module.css';
import { basketAddAction } from '../../store/reducer/basketReducer';

export default function AboutProductPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector(({ products }) =>
		products.find((item) => item.id === +id)
	);
	const link_img = 'http://localhost:3333';

	const render = () => {
		if (product === undefined) {
			return <p>Page is loading</p>;
		} else {
			const { id, image, title, price, discont_price, description } = product;
			return (
				<div>
					<h2>{title} </h2>
					<div className={s.item}>
						<img src={`${link_img}${image}`} alt={title} />
						<div className={s.info}>
							<div className={s.price}>
								<p>{price} $</p>
								<p>{discont_price} $</p>
							</div>
							<button onClick={()=>dispatch(basketAddAction(id))}>To card</button>
							<p>{description} </p>
						</div>
					</div>
				</div>
			);
		}
	};
	return render();
}
