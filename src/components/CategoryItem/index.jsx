import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';


export default function CategoryItem({ id, title, image }) {
	const link = 'http://localhost:3333';

	

	return (
		<div className={s.item}>
			<Link to={`/categories/${id}`} className={s.item_link}>
				<img src={`${link}${image}`} alt={title} />
				<p>{title}</p>
			</Link>
		</div>
	);
}
