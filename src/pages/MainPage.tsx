import { useEffect } from 'react';
import DataTable from '../components/DataTable';
import PagesPagination from '../components/PagesPagination';
import Search from '../components/Search';
import '../styles/MainPage.css';

const MainPage = () => {
	useEffect(() => {
		document.title = 'Table App';
	}, []);

	return (
		<div className='main-page-container'>
			<div>
				<Search />
				<DataTable />
			</div>
			<PagesPagination />
		</div>
	);
};

export default MainPage;
