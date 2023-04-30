import React from 'react';
import { useParams } from 'react-router-dom';
import ProductItem from '../../components/ProductItem';
import s from './style.module.css';
import { useSelector } from 'react-redux';

export default function ProductsPage() {
    const { id } = useParams();
    

	const products = useSelector((state) => {
		if (id === undefined) {
			return state.products;
        } else {
            return state.products.filter((item) => item.categoryId === +id);
        }
		
    });
    const category = useSelector((state) => state.categories);
    console.log(category);
	return (
		<div >
			<h2> {category.title}</h2>
			<div className={s.container}>
                {
                    products.map((item) => (
					<ProductItem key={item.id} {...item} />
				))}
			</div>
		</div>
	); 
}
