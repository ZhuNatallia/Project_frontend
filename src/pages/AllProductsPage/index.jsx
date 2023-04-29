import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';

export default function AllProductsPage() {
	const state = useSelector((state) => state.products);

	return (
		<div className={s.container}>
			{state.map((item) => (
				<ProductItem key={item.id} {...item} />
			))}
		</div>
	);
}
