import React from 'react';
import s from './style.module.css';
import Background from './media/background.jpg';

export default function MainPage() {
	return (
		<div>
      <div className={s.welcome_wrapper}>
        <img src={Background} alt="photo" />
				<h1>Sale</h1>
				<h2>New season</h2>
				<button>Sale</button>
			</div>
		</div>
	);
}
