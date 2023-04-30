import React from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import { useSelector } from 'react-redux';

export default function CategoryProductsPage() {
	const { category } = useParams();

/* 	const state = useSelector((state) =>
		state.filter((item) => item.category === category)
	);

	return (
		<div className={s.container}>
			<h2> {category}</h2>
			<div>
				{state.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
		</div>
	); */
	const products_category = useSelector(({ products }) =>
		products.filter((item) => item.category === category)
	);
	return (
		<div className={s.container}>
			<h2> {category}</h2>
			<div>
				{products_category.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
