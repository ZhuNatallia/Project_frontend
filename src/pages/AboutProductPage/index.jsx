import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function AboutProductPage() {
	const { id } = useParams();
	const product = useSelector(({ products }) =>
		products.find((item) => item.id === +id)
	);
	return (
		<div>
			{product === undefined ? <p>Page is loading</p> : <p>{product.title} </p>}
		</div>
	);
}
