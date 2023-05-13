import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import ProductsFilter from '../../components/ProductsFilter';
import Pagination from '../../components/Pagination';
/* import { productsResetFilter } from '../../store/reducer/productsReducer'; */
import { productsReset } from '../../store/slice/productSlice';
import { useLocation, useParams } from 'react-router-dom';

export default function AllProductsPage() {
	const state = useSelector((state) => state.products.list);

	const typeCategory = useLocation();

	/*  const { id } = useParams();
	const { state } = useSelector((state) => {
		if (id === 'all') {
			return state.products.list;
		} else if (id === 'sale') {
			const productsSale = state.products.list.filter(
				({ discont_price }) => discont_price
			);
			return {
				...state.products,
				list: productsSale,
			};
		} else {
			const productsCategory = state.products.list.filter(
				({ categoryId }) => +categoryId === +id
			);
			return {
				...state.products,
				list: productsCategory,
			};
		}
	}); */

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(productsReset());
	}, []);

	const [product, setProducts] = useState([]);
	const [crntPage, setCrntPage] = useState(1);
	const [countProductsPage, setCountProductsPage] = useState(9);
	useEffect(() => {
		setProducts(state);
	}, []);
	const lastElem = crntPage * countProductsPage;
	const firstElem = lastElem - countProductsPage;
	const countElem = Math.ceil(state.length / countProductsPage);

	return (
		<div>
			<ProductsFilter />
			<h2> {typeCategory.state}</h2>
			<div className={s.container}>
				{state
					.filter(
						({ show, show_sale, show_flg }) => show && show_sale && show_flg
					)
					.slice(firstElem, lastElem)
					.map((item) => (
						<ProductItem key={item.id} {...item} />
					))}
			</div>
			<Pagination
				setCrntPage={setCrntPage}
				countElem={countElem}
				crntPage={crntPage}
			/>
		</div>
	);
}
