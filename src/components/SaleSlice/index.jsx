import React/* , { useEffect, useState } */ from 'react';
import s from './style.module.css';
import { useSelector } from 'react-redux';
import ProductItem from '../ProductItem';
/* import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; */

export default function SaleSlice() {
	const products = useSelector((state) => state.products);
	const discontProducts = products
		.filter(({ discont_price }) => discont_price !== null)
		/*   .map(({ ...item }) => {
        return 
        let position = 'nexSlide';
        if (item.id === currentIndex) {
            position = 'activeSlide';
        }
        if (
            item.id === currentIndex - 1 ||
            (currentIndex === 0 && item.id === discontProducts.length - 1)
        ) {
            position = 'lastSlide';
        }
        }) */
		.slice(-4);

	/* 	const [product, setProduct] = useState(discontProducts);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const lastIndex = product.length - 1;
		if (currentIndex < 0) {
			setCurrentIndex(lastIndex);
		}
		if (currentIndex > lastIndex) {
			setCurrentIndex(0);
		}
	}, [currentIndex, product]);

	useEffect(() => {
		let slider = setInterval(
			() => setCurrentIndex((prevState) => prevState + 1),
			2000
		);
		return () => {
			clearInterval(slider);
		};
	}, [currentIndex]); */

	return (
		<div className={s.container}>
			<p className={s.title}>Sale</p>
			<div className={s.wrapper}>
				{/* <button onClick={() => setCurrentIndex((prevState) => prevState - 1)}>
					<FiChevronLeft />
				</button> */}
				{discontProducts.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}

				{/* <button onClick={() => setCurrentIndex((prevState) => prevState + 1)}>
					<FiChevronRight />
				</button> */}
			</div>
		</div>
	);
}

/* let position = 'nexSlide';
if (id === currentIndex) {
	position = 'activeSlide';
}
if (
	id === currentIndex - 1 ||
	(currentIndex === 0 && id === products.length - 1)
) {
	position = 'lastSlide';
} */
