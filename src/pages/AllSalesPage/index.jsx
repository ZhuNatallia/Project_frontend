import React from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import ProductsFilter from '../../components/ProductsFilter';

export default function AllSalesPage() {
	const products = useSelector((state) => state.products.list);
	const discontProducts = products.filter(
		({ discont_price }) => discont_price !== null
	);
	return (
		<div className={s.wrapper}>
			<ProductsFilter/>
			<p className={s.title}>Products with sale</p>
			<div className={s.container}>
				{discontProducts.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
