import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './style.module.css';
/* import { basketAddAction } from '../../store/reducer/basketReducer'; */
import { basketAdd } from '../../store/slice/basketSlice';
import GreenButton from '../../UI/GreenButton';

export default function AboutProductPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector(({ products }) =>
		products.list.find((item) => item.id === +id)
	);
	const link_img = 'http://localhost:3333';

	const render = () => {
		if (product === undefined) {
			return <p>Page is loading</p>;
		} else {
			const { id, image, title, price, discont_price, description } = product;
			return (
				<div className={s.container}>
					<h2>{title} </h2>
					<div className={s.item}>
						<img src={`${link_img}${image}`} alt={title} />
						<div className={s.info}>
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
									<p>
										{discont_price} €
									</p>
									<p style={{ color: 'red', fontSize: '20px' }}>
										{((price / discont_price) * 100 - 100).toFixed(1)} %
									</p>
								</div>
							) : (
								<p >
									Price: {price} €
								</p>
							)}
							<div className={s.wrapperBtn}>
								<GreenButton
									onClick={() => dispatch(basketAdd(id))}
									style={{ position: 'static' }}
								>
									To card
								</GreenButton>
							</div>
							<p>{description} </p>
						</div>
					</div>
				</div>
			);
		}
	};
	return render();
}
