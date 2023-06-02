import React from 'react';
import { useSelector } from 'react-redux';
import BasketItem from '../../components/BasketItem';
import s from './style.module.css';
import BasketCalculation from '../../components/BasketCalculation';
import { Link } from 'react-router-dom';
import ScrollButton from '../../UI/GreenButton/ScrollButton';

export default function BasketPage() {
	const basket = useSelector((state) => state.basket.list);
	const products = useSelector((state) => state.products.list);
	const data = basket.map((item) => {
		const product = products.find(({ id }) => id === item.id);
		return { ...item, ...product };
	});

	return (
		<div className={s.basket_page}>
			<p className={s.title}>Shopping cart</p>
			<div className={s.container}>
				<Link to='/products/all' className={s.wrapper_chevron}>
					<p>Back to the store</p>
					<div className={s.container_chevron}>
						<div className={s.chevron}></div>
						<div className={s.chevron}></div>
						<div className={s.chevron}></div>
					</div>
				</Link>
			</div>
			<div className={s.wrapper}>
				{products.length === 0 ? (
					<p>Data is being loaded</p>
				) : (
					<>
						<div className={s.wrapper_basket}>
							<div className={s.basket_calculation}>
								{data.map((item) => (
									<BasketItem key={item.id} {...item} />
								))}
							</div>
							<BasketCalculation />
						</div>
					</>
				)}
			</div>
			<ScrollButton />
		</div>
	);
}
