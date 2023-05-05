import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import ProductsFilter from '../../components/ProductsFilter';

export default function AllProductsPage() {
	const state = useSelector((state) => state.products);
	/* const categories = useSelector((state) => state.categories); */
	

	return (
		<div>
			<ProductsFilter/>
			<div className={s.container}>
				{state.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
