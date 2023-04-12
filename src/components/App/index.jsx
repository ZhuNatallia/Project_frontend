import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/MainPage';
import AllProductsPage from '../../pages/AllProductsPage';
import AllSalesPage from '../../pages/AllSalesPage';
import BasketPage from '../../pages/BasketPage';
import CategoriesPage from '../../pages/CategoriesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Nav from './Nav';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { asyncLoadCategoriesAction } from '../../store/asyncAction/categories';
import Footer from '../Footer';

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncLoadCategoriesAction);
	}, []);

	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/products/all' element={<AllProductsPage />} />
				<Route path='/products/sale' element={<AllSalesPage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='/catalog' element={<CategoriesPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
			<Footer/>
		</div>
	);
}

export default App;
