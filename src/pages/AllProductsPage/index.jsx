import React from 'react';
import { useSelector } from 'react-redux';

export default function AllProductsPage() {
	const state = useSelector((state) => state.products);

	return (
		<div>
			{state.map((item) => (
				<p key={item.id}>{item.title} </p>
			))}
		</div>
	);
}
