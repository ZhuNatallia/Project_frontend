import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/MainPage';

import AllSalesPage from '../../pages/AllSalesPage';
import BasketPage from '../../pages/BasketPage';
import CategoriesPage from '../../pages/CategoriesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Nav from './Nav';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncLoadCategoriesAction } from '../../store/asyncAction/categories';
import Footer from '../Footer';
import { asyncLoadProductsAction } from '../../store/asyncAction/products';

import ProductsPage from '../../pages/ProductsPage';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncLoadCategoriesAction);
		dispatch(asyncLoadProductsAction);
	}, []);

	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/products/all' element={<ProductsPage />} />
				<Route path='/products/sale' element={<AllSalesPage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='/catalog' element={<CategoriesPage />} />
				<Route path='/category/:category' element={<ProductsPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
