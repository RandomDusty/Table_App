export interface IDataTable {
	index: number;
	name: string;
	company: string;
	registration_date: string;
}

export interface DataTableState {
	dataTable: IDataTable[];
	lastIndexOfCurrentList: number;
	lastIndex: number;
	searchQuery: string;
	searchHeader: string;
}

export enum DataTableActionType {
	GET_DATA = 'GET_DATA',
}

interface GET_DATA {
	type: DataTableActionType.GET_DATA;
	payload: [string, string, number, number, IDataTable[]];
}

export type DataTableAction = GET_DATA;
