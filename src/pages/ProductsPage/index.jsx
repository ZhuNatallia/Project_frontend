import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ProductsFilter from '../../components/ProductsFilter';
/* import { productsResetFilter } from '../../store/reducer/productsReducer'; */
import { productsReset } from '../../store/slice/productSlice';
import Pagination from '../../components/Pagination';
import ScrollButton from '../../UI/GreenButton/ScrollButton';

export default function ProductsPage() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productsReset());
	}, []);

	const { id } = useParams();
	const pageLocation = useLocation();

	const products = useSelector((state) => {
		if (id === undefined) {
			return state.products.list;
		} else {
			return state.products.list.filter((item) => item.categoryId === +id);
		}
	});
	const category = useSelector((state) =>
		state.categories.list.find((item) => +id === item.id)
	);

	const [product, setProducts] = useState([]);
	const [crntPage, setCrntPage] = useState(1);
	const [countProductsPage, setCountProductsPage] = useState(12);
	useEffect(() => {
		setProducts(products);
	}, []);
	const lastElem = crntPage * countProductsPage;
	const firstElem = lastElem - countProductsPage;
	const countElem = Math.ceil(products.length / countProductsPage);

	const discontProducts = products.filter(
		({ discont_price }) => discont_price !== null
	);

	return (
		<div>
			{pageLocation.pathname === '/products/sale' ? (
				<div className={s.wrapper}>
					<ProductsFilter />
					<p className={s.title}>Products with sale</p>
					<div className={s.container}>
						{discontProducts
							.filter(
								({ show, show_sale, show_flg }) => show && show_sale && show_flg
							)
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
			) : (
				<div className={s.wrapper}>
					<ProductsFilter />
					<h2> {category === undefined ? 'All Products' : category.title}</h2>
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
						<ScrollButton/>
				</div>
			)}
		</div>
	);
}
