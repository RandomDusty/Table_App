import { Icon, Button, InputGroup, HTMLSelect } from '@blueprintjs/core';
import { useState } from 'react';
import { useAction } from '../hooks/useActions';

const Search = () => {
	const [searchInput, setSearchInput] = useState('');
	const { getData } = useAction();
	const [searchHeader, setSearchHeader] = useState('name');

	const search = () => {
		getData(0, 40, searchInput, searchHeader);
	};

	const clear = () => {
		setSearchInput('');
		getData(0, 40, '', searchHeader);
	};

	const leftElementsOfInput = (
		<HTMLSelect
			value={searchHeader}
			onChange={e => setSearchHeader(e.currentTarget.value)}
		>
			<option value={'name'}>Name</option>
			<option value={'company'}>Company</option>
			<option value={'registration_date'}>Registration date</option>
		</HTMLSelect>
	);

	const rightElementsOfInput = (
		<div>
			{searchInput ? (
				<Button aria-label='Clear' title='Clear' minimal={true} onClick={clear}>
					<Icon icon='cross' />
				</Button>
			) : (
				<div></div>
			)}

			<Button
				aria-label='Search'
				title='Search'
				minimal={true}
				onClick={search}
			>
				<Icon icon='search' />
			</Button>
		</div>
	);

	return (
		<div className='bp4-input-group .modifier'>
			<InputGroup
				type='text'
				placeholder='Search'
				value={searchInput}
				onChange={e => {
					setSearchInput(e.target.value);
				}}
				rightElement={rightElementsOfInput}
				leftElement={leftElementsOfInput}
			/>
		</div>
	);
};
export default Search;
