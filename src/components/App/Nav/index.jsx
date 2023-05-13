import React from 'react';
import s from './style.module.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from './media/logo1.png';
import CustNavLink from '../../CustNavLink';

export default function Nav() {
	const links = [
		{ id: 1, label: 'Home Page', to: '/' },
		{ id: 2, label: 'All products', to: '/products/all' },
		{ id: 3, label: 'All sales', to: '/products/sale' },
	];

	const isActive = ({ isActive }) => (isActive ? s.active : '');

	return (
		<nav className={s.nav}>
			<div className={s.logo}>
				<img src={Logo} alt='logo' />
				<button>
				<Link to='/categories'>Catalog</Link>
			</button>
			</div>
			
			
			{links.map(({ id, label, ...item }) => (
				<NavLink className={isActive} key={id} {...item}>
					{label}
				</NavLink>
			))}
			<CustNavLink />
		</nav>
	);
}
