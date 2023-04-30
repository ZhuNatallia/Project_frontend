import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';

export default function CategoryItem({ id, title, image }) {
	const link = 'http://localhost:3333';
	const linkCategory = `http://localhost:3333/categories/${id}`;

	return (
		<div className={s.item}>
			<Link to={linkCategory} className={s.item_link}>
				<img src={`${link}${image}`} alt={title} />
				<p>{title}</p>
			</Link>
		</div>
	);
}
