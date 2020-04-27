import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Grid, TextField } from '@material-ui/core';

import { fetch_property } from '../../store/property/actions';

const SearchBar = () => {
	const dispatch = useDispatch();
	const [url, setUrl] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(fetch_property(url));
	};

	return (
		<Grid
			container
			spacing={0}
			alignItems="center"
			justify="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={6}>
				<form onSubmit={handleSubmit}>
					<TextField
						id="property-search"
						label="insira o link para..."
						placeholder="a sua futura casa"
						helperText="...nos ajudamo-lo a tomar a melhor decisao"
						margin="normal"
						variant="outlined"
						fullWidth
						onChange={(e) => setUrl(e.target.value)}
					/>
				</form>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
