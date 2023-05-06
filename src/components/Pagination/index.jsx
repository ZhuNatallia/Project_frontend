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
			<div style={{ display: 'flex', gap: '10px', border: '2px solid black', padding: 20}}>
				{numberPage.map((elem) => (
					<div
						onClick={() => setCrntPage(elem)}
						style={{
							width: 20,
							height: 20,
							backgroundColor: elem === crntPage ? 'purple' : 'brown',
							textAlign: 'center',
							color: 'white', cursor: 'pointer', 
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
