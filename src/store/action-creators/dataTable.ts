import { data } from '../../data';
import { DataTableAction, DataTableActionType, IDataTable } from './../../types/dataTable';

export const getData = (
	startIndex: number,
	lastIndex: number,
	searchedString: string,
	searchedHeader: string
): DataTableAction => {
	const flittedData = data.filter(val =>
		searchedString
			? `${val[searchedHeader as keyof typeof val]}`.toLowerCase().includes(searchedString.toLowerCase())
			: true
	);
	return {
		type: DataTableActionType.GET_DATA,
		payload: [
			searchedHeader,
			searchedString,
			flittedData.length,
			lastIndex,
			flittedData.slice(startIndex, lastIndex),
		],
	};
};
