import React from 'react';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.css';

export default function CategoriesPage() {
	const categories = useSelector((state) => state.categories);
	return (
		<div className={s.page}>
			<h3>Catalog</h3>
			<div className={s.container}>
				{categories.map((item) => (
					<CategoryItem key={item} label={item} />
				))}
			</div>
		</div>
	);
}