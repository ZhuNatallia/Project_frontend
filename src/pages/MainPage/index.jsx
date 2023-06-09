import React from 'react';
import s from './style.module.css';
import Background from './media/background.jpg';
import CatalogMainPageRandom from '../../components/CatalogMainPageRandom';
import SaleMainPage from '../../components/SaleMainPage';
import SaleSlice from '../../components/SaleSlice';
import { Link } from 'react-router-dom';
import GreenButton from '../../UI/GreenButton';
import ScrollButton from '../../UI/GreenButton/ScrollButton';

export default function MainPage() {
	
	return (
		<div className={s.container}>
			<div className={s.welcome_wrapper}>
				<img src={Background} alt='photo' />
				<h1>Sale</h1>
				<h2>New season</h2>
				<Link to='/products/sale'>
					<GreenButton style={{ left: 35, top: 446, width: 150, height: 65, fontSize: 25 }}>
						Sale
					</GreenButton>
				</Link>
			</div>
			<CatalogMainPageRandom />
			<SaleMainPage />
			<SaleSlice />
			<ScrollButton/>
		</div>
	);
}
