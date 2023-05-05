import React from 'react';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.css';

export default function CategoriesPage() {
	const categories = useSelector((state) => state.categories);

	return (
		<div className={s.page}>
			<h3>Categories</h3>
			
			<div className={s.container}>
				{categories.map((item) => (
					<CategoryItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
