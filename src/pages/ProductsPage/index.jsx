import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductsFilter from '../../components/ProductsFilter';
/* import { productsResetFilter } from '../../store/reducer/productsReducer'; */
import { productsReset } from '../../store/slice/productSlice';

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
			return state.products.list
				.filter((item) => item.categoryId === +id);
		}
	});
	const category = useSelector((state) =>
		state.categories.list.find((item) => +id === +item.id)
	);

	return (
		<div>
			<ProductsFilter/>
			<h2> {category.title}</h2>
			<div className={s.container}>
				{products
					.filter(({ show_sale, show_flg }) => show_sale && show_flg)
					.map((item) => (
						<ProductItem key={item.id} {...item} />
					))}
			</div>
		</div>
	);
}
