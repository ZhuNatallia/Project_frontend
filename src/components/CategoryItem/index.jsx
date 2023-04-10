import React from 'react';
import { Link } from 'react-router-dom';
import s from './style.module.css';

export default function CategoryItem({ label }) {
	const link = `category/${label}`;
	return (
		<Link to={link} className={s.item}>
			{label}
		</Link>
	);
}
