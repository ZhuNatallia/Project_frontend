import React from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem';


export default function SaleSlice() {
	const products = useSelector((state) => state.products.list);
	const discontProducts = products
		.slice() //без аргументов создаться копия массива, и в последующем sort не изменит исходный массив
		.filter(({ discont_price }) => discont_price !== null)
		.sort(() => Math.random() - 0.5)
		.slice(0, 3);
	
	

	return (
		<div className={s.container}>
			<p className={s.title}>Sale</p>
			<div className={s.wrapper}>
				{discontProducts.map((item, index) => (
					<ProductItem key={item.id} {...item}{...index} />
				))}
			</div>
		</div>
	);
}
