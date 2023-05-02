import React from 'react';
import { useSelector } from 'react-redux';
import BasketItem from '../../components/BasketItem';
import s from './style.module.css';
import BasketCalculation from '../../components/BasketCalculation';

export default function BasketPage() {
	const { basket, products } = useSelector((state) => state);
	const data = basket.map((item) => {
		const product = products.find(({ id }) => id === item.id);
		return { ...item, ...product };
	});

	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				{data.map((item) => (
					<BasketItem key={item.id} {...item} />
				))}
			</div>
			<BasketCalculation />
		</div>
	);
}
