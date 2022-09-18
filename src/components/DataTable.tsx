import { Cell, Column, Table2 } from '@blueprintjs/table';
import { useTypeSelector } from '../hooks/useTypeSelector';
import '../styles/DataTable.css';

const DataTable = () => {
	const { dataTable } = useTypeSelector(state => state.dataTable);

	const indexRender = (rowIndex: number) => {
		return <Cell>{dataTable[rowIndex] ? dataTable[rowIndex].index : ''}</Cell>;
	};

	const nameRender = (rowIndex: number) => {
		return <Cell>{dataTable[rowIndex] ? dataTable[rowIndex].name : ''}</Cell>;
	};

	const companyRender = (rowIndex: number) => {
		return (
			<Cell>{dataTable[rowIndex] ? dataTable[rowIndex].company : ''}</Cell>
		);
	};

	const registrationDateRender = (rowIndex: number) => {
		return (
			<Cell>
				{dataTable[rowIndex] ? dataTable[rowIndex].registration_date : ''}
			</Cell>
		);
	};

	return (
		<Table2
			numRows={40}
			columnWidths={[80, 150, 200, 250]}
			cellRendererDependencies={[dataTable]}
			enableRowHeader={false}		
			className='table'		
		>
			<Column name='Index' cellRenderer={indexRender} />
			<Column name='Name' cellRenderer={nameRender} />
			<Column name='Company' cellRenderer={companyRender} />
			<Column name='Registration date' cellRenderer={registrationDateRender} />
		</Table2>
	);
};
export default DataTable;
