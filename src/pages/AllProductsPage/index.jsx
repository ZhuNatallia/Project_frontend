import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import ProductsFilter from '../../components/ProductsFilter';
import Pagination from '../../components/Pagination';
/* import { productsResetFilter } from '../../store/reducer/productsReducer'; */
import { productsReset } from '../../store/slice/productSlice';

export default function AllProductsPage() {
	const state = useSelector((state) => state.products.list);
	

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(productsReset())
	}, [])

	const [product, setProducts] = useState([]);
	const [crntPage, setCrntPage] = useState(1);
	const [countProductsPage, setCountProductsPage] = useState(9);

	

	const filterByPrice = ({ min, max }) =>
		setProducts((state) =>
			state.map((item) => ({
				...item,
				show_flg: item.price <= max && item.price >= min,
			}))
		);

	useEffect(() => {
		setProducts(state);
	}, []);
	const lastElem = crntPage * countProductsPage;
	const firstElem = lastElem - countProductsPage;
	const countElem = Math.ceil(state.length / countProductsPage);

	return (
		<div>
			<ProductsFilter filterByPrice={filterByPrice} />
			<div className={s.container}>
				{state
					.filter(({ show }) => show)
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
