import React from 'react';
import s from './style.module.css';
import Background from './media/background.jpg';
import CatalogMainPageRandom from '../../components/CatalogMainPageRandom';
import SaleMainPage from '../../components/SaleMainPage';
import SaleSlice from '../../components/SaleSlice';
import { Link } from 'react-router-dom';

export default function MainPage() {
	return (
		<div className={s.container}>
			<div className={s.welcome_wrapper}>
				<img src={Background} alt='photo' />
				<h1>Sale</h1>
				<h2>New season</h2>
				<Link to='/products/sale'>
					<button>Sale</button>
				</Link>
			</div>
			<CatalogMainPageRandom />
			<SaleMainPage />
			<SaleSlice />
		</div>
	);
}
