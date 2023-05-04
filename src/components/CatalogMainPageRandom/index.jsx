import React from 'react';
import { useSelector } from 'react-redux';
import CategoryItem from '../../components/CategoryItem';
import s from './style.module.css';
import { Link } from 'react-router-dom';

export default function CatalogMainPageRandom() {
	const categories = useSelector((state) => state.categories);

	/* function shuffle(categories) {
		for (var i = 0; i < categories.length; i++) {
			var j = Math.floor(Math.random() * (i + 1));
			var tmp = categories[i];
			categories[i] = categories[j];
			categories[j] = tmp;
		}
		return categories.map(function (item, index) {
			return { key: index + 1, value: item };
		});
    }
    console.log(shuffle()); */

	return (
		<div className={s.wrapper}>
			<div className={s.title}>
				<h2>Catalog</h2>
				<Link to='/catalog'>
					<button >All categories</button>
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
