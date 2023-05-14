import React from 'react';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function CatalogMainPageRandom() {
	const categories = useSelector((state) => state.categories.list)
		.slice()
		.sort(() => Math.random() - 0.5)
		.slice(0, 4);;


	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<h2>Catalog</h2>
				<Link to='/categories'>
					<button className={s.btn}>All categories</button>
				</Link>
			</div>

			<div className={s.container}>
				{categories.map((item) => (
					<CategoryItem key={item.id} {...item} />
				))}
			</div>
		</div>
	);
}
