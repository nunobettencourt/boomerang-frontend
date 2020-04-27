import React from 'react';
import { useDispatch } from 'react-redux';

import { Grid, TextField } from '@material-ui/core';

import { fetch_property } from '../../store/property/actions';

const SearchBar = () => {
	const dispatch = useDispatch();

	return (
		<Grid
			container
			spacing={0}
			alignItems="center"
			justify="center"
			style={{ minHeight: '100vh' }}
		>
			<Grid item xs={6}>
				<TextField
					id="property-search"
					label="insira o link para..."
					placeholder="a sua futura casa"
					helperText="...nos ajudamo-lo a tomar a melhor decisao"
					margin="normal"
					variant="outlined"
					fullWidth
					onInput={(e) => dispatch(fetch_property(e.target.value))}
				/>
			</Grid>
		</Grid>
	);
};

export default SearchBar;
