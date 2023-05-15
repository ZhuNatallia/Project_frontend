import React, { useRef } from 'react';
import s from './style.module.css';
import { Link, NavLink } from 'react-router-dom';
import Logo from './media/logo1.png';
import CustNavLink from '../../CustNavLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
	const links = [
		{ id: 1, label: 'Home Page', to: '/' },
		{ id: 2, label: 'All products', to: '/products/all' },
		{ id: 3, label: 'All sales', to: '/products/sale' },
	];

	const isActive = ({ isActive }) => (isActive ? s.active : '');

	const link = useRef();
	const navBtnHandler = () => {
		link.current.classList.toggle(s.nav_open);
	};

	return (
		<div className={s.nav_wrapper}>
			
			<nav className={s.nav}>
					<img src={Logo} alt='logo' />
					<button className={s.btn}>
						<Link to='/categories'>Catalog</Link>
					</button>
				
				<div ref={link} className={s.links}>
					{links.map(({ id, label, ...item }) => (
						<NavLink className={isActive} key={id} {...item}>
							{label}
						</NavLink>
					))}
				</div>
				<CustNavLink />
				<button className={s.navBtn} onClick={navBtnHandler}>
					<FontAwesomeIcon icon={faBars} style={{ color: '#285c3f' }} />
				</button>
			</nav>
		</div>
	);
}
