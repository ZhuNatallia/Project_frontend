import React from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
/* import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; */

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
				{/* <button onClick={() => setCurrentIndex((prevState) => prevState - 1)}>
					<FiChevronLeft />
				</button> */}
				{discontProducts.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}

				{/* <button onClick={() => setCurrentIndex((prevState) => prevState + 1)}>
					<FiChevronRight />
				</button> */}
			</div>
		</div>
	);
}
