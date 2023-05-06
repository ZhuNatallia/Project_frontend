import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import ProductsFilter from '../../components/ProductsFilter';
import Pagination from '../../components/Pagination';

export default function AllProductsPage() {
	const state = useSelector((state) => state.products);

	const [products, setProducts] = useState([]);
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
			<div className={s.container}>
				{state.slice(firstElem, lastElem).map((item) => (
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
