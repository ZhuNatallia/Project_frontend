import React from 'react'
import Image_404 from './media/404page.jpg'
import s from './style.module.css'

export default function NotFoundPage
() {
  return (
		<div className={s.image_container}>
			<p>NotFoundPage</p>
			<img src={Image_404} alt='error' />
		</div>
	);
}
