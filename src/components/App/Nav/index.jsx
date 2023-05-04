import React from 'react';
import s from './style.module.css';
import { NavLink } from 'react-router-dom';
import Logo from './media/logo1.png';
import Basket from './media/basket.png';
/* import { useSelector } from 'react-redux'; */

export default function Nav() {
	/*const basket = useSelector(({ basket }) => basket);
	 const totalCount = basket.reduce((acc, {count}) => acc + count, 0) */
	const links = [
		{ id: 1, label: 'Catalog', to: '/catalog' },
		{ id: 2, label: 'Main Page', to: '/' },
		{ id: 3, label: 'All products', to: '/products/all' },
		{ id: 4, label: 'All sales', to: '/products/sale' },
		/* { id: 5, label: 'basket', to: '/basket', count: totalCount} */
		,
	];

	const isActive = ({ isActive }) => (isActive ? s.active : '');

	return (
		<nav className={s.nav}>
			<img src={Logo} alt='logo' />
			{/* <button>Catalog</button> */}
			{links.map(({ id, label, ...item }) => (
				<NavLink className={isActive} key={id} {...item}>
					{label}
				</NavLink>
			))}
			<NavLink to='/basket'>
				<img src={Basket} alt='icons' />
			</NavLink>
		</nav>
	);
}
