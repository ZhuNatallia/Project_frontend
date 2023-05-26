import { Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from '../../pages/MainPage';
import BasketPage from '../../pages/BasketPage';
import CategoriesPage from '../../pages/CategoriesPage';
import NotFoundPage from '../../pages/NotFoundPage';
import Nav from './Nav';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Footer from '../Footer';
import ProductsPage from '../../pages/ProductsPage';
import AboutProductPage from '../../pages/AboutProductPage';
/* import AllProductsPage from '../../pages/AllProductsPage'; */
/* import { asyncLoadCategoriesAction } from '../../store/asyncAction/categories';
import { asyncLoadProductsAction } from '../../store/asyncAction/products'; */
import { asyncLoadProducts } from '../../store/slice/productSlice';
import { asyncLoadCategories } from '../../store/slice/categoriesSlice';
import ModalWindow from '../ModalWindow';

function App() {
	const [modalActive, setModalEctive] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(asyncLoadCategories());
		dispatch(asyncLoadProducts());
	}, []);

	return (
		<div>
			<button onClick={() => setModalEctive(true)}>open</button>
			<ModalWindow active={modalActive} setActive={setModalEctive} />
			<Nav />
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/categories' element={<CategoriesPage />} />
				<Route path='/product/:id' element={<AboutProductPage />} />
				<Route path='/products/all' element={<ProductsPage />} />
				<Route path='/products/sale' element={<ProductsPage />} />
				<Route path='/categories/:id' element={<ProductsPage />} />
				<Route path='/basket' element={<BasketPage />} />
				<Route path='/*' element={<NotFoundPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
