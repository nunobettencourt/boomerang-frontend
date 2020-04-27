import * as types from './types';
import { apiAction } from '../api/actions';

export const fetch_property = (url) => {
	const urlencoded = new URLSearchParams();
	urlencoded.append('url', url);

	return apiAction({
		url: '/property/',
		method: 'POST',
		data: urlencoded,
		onSuccess: set_property,
		onFailure: fetch_property_error,
	});
};

export const set_property = ({ data }) =>
	function (dispatch) {
		dispatch({
			type: types.SET_PROPERTY,
			payload: data,
		});
	};

export const fetch_property_error = () => (dispatch) =>
	dispatch({
		type: types.FETCH_PROPERTY_ERROR,
	});
