import s from './style.module.css';

function Pagination(props) {
	const { setCrntPage, countElem, crntPage } = props;

	const numberPage = [];

	for (let i = 1; i <= countElem; i++) {
		numberPage.push(i);
	}

	/* const formHandle = (e) => {
		if (e.key === 'Enter') {
			setCrntPage(e.target.value > countElem ? countElem : e.target.value);
		}
	}; */

	return (
		<div>
			<div className={s.container}>
				{numberPage.map((elem) => (
					<div
						className={s.item}
						onClick={() => setCrntPage(elem)}
						style={{
							backgroundColor: elem === crntPage ? 'grey' : '#f8faf9',
							color: elem === crntPage ? 'white' : 'rgb(62, 63, 63)',
						}}
					>
						{elem}
					</div>
				))}
			</div>
			{/* <input onKeyDown={formHandle} placeholder='Введите номер страницы' /> */}
		</div>
	);
}

export default Pagination;
