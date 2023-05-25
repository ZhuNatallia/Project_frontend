import React, { useEffect, useState } from 'react';
import s from './style.module.css';

export default function ScrollButton() {
	const [scrollPage, setScrollPage] = useState(false);

	useEffect(() => {
		const scrollVisible = () => {
			const scrollY = document.documentElement.scrollTop;
			scrollY > 250 ? setScrollPage(true) : setScrollPage(false);
		};
		window.addEventListener('scroll', scrollVisible);
		return () => {
			window.removeEventListener('scroll', scrollVisible);
		};
	}, []);
	
	const scrollBtn = () => {
		// переместим в начало страницы
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div
			onClick={scrollBtn}
			className={scrollPage === true ? s.btnUp : s.btnUpHide}
		></div>
	);
}
