import { data } from '../../data';
import {
	DataTableState,
	DataTableAction,
	DataTableActionType,
} from '../../types/dataTable';

const initialState: DataTableState = {
	dataTable: data.slice(0, 40),
	lastIndexOfCurrentList: 40,
	lastIndex: data.length,
	searchQuery: '',
	searchHeader: 'Name'
};

export const dataTableReducer = (
	state = initialState,
	action: DataTableAction
): DataTableState => {
	switch (action.type) {
		case DataTableActionType.GET_DATA:
			return {
				searchHeader: action.payload[0],
				searchQuery: action.payload[1],
				lastIndex: action.payload[2],
				lastIndexOfCurrentList: action.payload[3],
				dataTable: action.payload[4],
			};
		default:
			return state;
	}
};
