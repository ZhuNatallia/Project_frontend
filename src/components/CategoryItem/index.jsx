import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';

export default function CategoryItem({ label, image }) {
	const link = `category/${label}`;
	const photo = `category/${image}`;
	return (
		<div className={s.item}>
			<Link to={link}>
				<img className={s.img} src={photo} alt={label} />
				<p>{label}</p>
			</Link>
		</div>
	);
}
