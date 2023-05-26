import React from 'react';
import s from './style.module.css';

export default function ModalWindow({ active, setActive }) {
	return (
		<div className={[s.modal, active ? s.active : ''].join(' ')}>
			<div className={s.modal_content}>
				<button onClick={() => setActive(false)} className={s.btnClose}>
					x
				</button>
				<p>Thank you for registering!</p>
				<p>
					Check your phone number, you will receive an SMS with a discount code!
				</p>
				<p>Happy shopping!</p>
			</div>
		</div>
	);
}
