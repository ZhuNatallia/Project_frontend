import React from 'react';
import { NavLink } from 'react-router-dom';
import Basket from './media/basket.png';
import { useSelector } from 'react-redux';
import s from './style.module.css'

export default function CustNavLink({...item}) {
	const basket = useSelector(({ basket }) => basket);
    const totalCount = basket.reduce((acc, { count }) => acc + count, 0);
    
	return (
		<div>
			<NavLink className={s.link} data-count={totalCount || undefined}  to='/basket' {...item}>
				<img src={Basket} alt='icons' />
			</NavLink>
		</div>
	);
}
