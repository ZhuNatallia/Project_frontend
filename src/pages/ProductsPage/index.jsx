import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductsFilter from '../../components/ProductsFilter';
/* import { productsResetFilter } from '../../store/reducer/productsReducer'; */
import { productsReset } from '../../store/slice/productSlice';
import Pagination from '../../components/Pagination';

export default function ProductsPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productsReset());
	}, []);

	const { id } = useParams();

	const products = useSelector((state) => {
		if (id === undefined) {
			return state.products.list;
		} else {
			return state.products.list.filter((item) => item.categoryId === +id);
		}
	});
	const category = useSelector((state) =>
		state.categories.list.filter((item) => +id === +item.id)
	);
	/* function titleCategory() {
		if (categories !== undefined) {
			return categories.title
		}
	}  */
	const [product, setProducts] = useState([]);
	const [crntPage, setCrntPage] = useState(1);
	const [countProductsPage, setCountProductsPage] = useState(12);
	useEffect(() => {
		setProducts(products);
	}, []);
	const lastElem = crntPage * countProductsPage;
	const firstElem = lastElem - countProductsPage;
	const countElem = Math.ceil(products.length / countProductsPage);

	return (
		<div className={s.wrapper}>
			<ProductsFilter />
			<h2> {category.title}</h2>
			<div className={s.container}>
				{products
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
