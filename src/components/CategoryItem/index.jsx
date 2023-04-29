import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';

export default function CategoryItem({ title, image }) {
	const link = 'http://localhost:3333';

	return (
		<div className={s.item}>
			<Link to='/catalog'> {/* тут изменить линк на конкретную категорию */}
				<img src={`${link}${image}`} alt={image} />
				<p>{title}</p>
			</Link>
		</div>
	);
}
