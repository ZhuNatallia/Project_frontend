import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';

export default function CategoryItem({id, title, image }) {
	const link = `category/${title}`;
	/* const photo = `category/image/category_img/${image}`; */
	return (
		<div className={s.item}>
			<Link to={link}>
				<img className={s.img} src={image} alt={title} />
				<p>{title}</p>
			</Link>
		</div>
	);
}
