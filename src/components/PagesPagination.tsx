import { Button } from '@blueprintjs/core';
import { useEffect, useState } from 'react';
import { useAction } from '../hooks/useActions';
import { useTypeSelector } from '../hooks/useTypeSelector';
import '../styles/PagesPagination.css';

const PagesPagination = () => {
	const { getData } = useAction();
	const { lastIndexOfCurrentList, lastIndex, searchQuery, searchHeader} = useTypeSelector(
		state => state.dataTable
	);

	const [pagesRange, setPagesRange] = useState<number[]>([]);
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		fillPages(40);
		setCurrentPage(0);
	}, [lastIndex]);

	const fillPages = (countOfRows: number) => {
		const pagesCount = lastIndex / countOfRows;
		let range = [];
		for (let i = 0; i < pagesCount; i++) {
			range.push(i);
		}
		setPagesRange(range);
	};

	const nextPage = () => {
		if (lastIndexOfCurrentList < lastIndex) {
			getData(
				lastIndexOfCurrentList,
				lastIndexOfCurrentList + 40,
				searchQuery,
				searchHeader
			);
			setCurrentPage(lastIndexOfCurrentList / 40);
		}
	};

	const previousPage = () => {
		if (lastIndexOfCurrentList - 40 !== 0) {
			getData(
				lastIndexOfCurrentList - 80,
				lastIndexOfCurrentList - 40,
				searchQuery,
				searchHeader
			);
			setCurrentPage(lastIndexOfCurrentList / 40 - 2);
		}
	};

	if (pagesRange.length <= 1) {
		return <div></div>;
	}
	return (
		<nav className='pagination-container'>
			<Button
				aria-label='Previous page'
				title='Previous page'
				onClick={previousPage}
				minimal={true}
			>
				&lt;
			</Button>

			<div className='pagesNumbers'>
				{pagesRange.map((val, index) => {
					return (
						<Button
							intent={currentPage === val ? 'success' : 'none'}
							key={index}
							onClick={() => {
								setCurrentPage(val);
								getData(val * 40, (val + 1) * 40, searchQuery, searchHeader);
							}}
						>
							{val + 1}
						</Button>
					);
				})}
			</div>

			<Button
				onClick={nextPage}
				aria-label='Next page'
				title='Next page'
				minimal={true}
			>
				&gt;
			</Button>
		</nav>
	);
};

export default PagesPagination;
