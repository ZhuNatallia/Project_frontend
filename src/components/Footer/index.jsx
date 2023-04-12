import React from 'react';
import s from './style.module.css';
import Icons1 from './media/inst.png';
import Icons2 from './media/fa.png';
import { Link } from 'react-router-dom';

export default function Footer() {
	return (
		<div className={s.container}>
			<div className={s.wrapper_contact}>
				<div className={s.contact}>
					<h3>Contact</h3>
					<p>+49 999 999 99 99</p>
					<div>
						<img src={Icons1} alt='icons' />
						<img src={Icons2} alt='icons' />
					</div>
				</div>
				<div className={s.adres}>
					<h3>Address</h3>
					<Link to='https://www.google.com/search?q=telranDE' target='_blank'>
						Linkstraße 2, 8 OG, 10785, Berlin, Deutschland
					</Link>
					<p>Working Hours:</p>
					<p>24 hours a day</p>
				</div>
			</div>

			<iframe
				className={s.maps}
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9713.636886541603!2d13.3750447!3d52.5079329!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851d00f714303%3A0xb7b4fcea44396e2d!2sAIT%20TR%20GmbH!5e0!3m2!1sru!2sde!4v1681303453658!5m2!1sru!2sde'
			></iframe>
		</div>
	);
}
