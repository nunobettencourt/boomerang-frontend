import { API, API_START, API_END, ACCESS_DENIED, API_ERROR } from './types';

export const apiStart = (label) => ({
	type: API_START,
	payload: label,
});

export const apiEnd = (label) => ({
	type: API_END,
	payload: label,
});

export const accessDenied = (url) => ({
	type: ACCESS_DENIED,
	payload: {
		url,
	},
});

export const apiError = (error) => ({
	type: API_ERROR,
	error,
});

export const apiAction = ({
	url = '',
	method = 'GET',
	data = null,
	onSuccess = () => {},
	onFailure = () => {},
	label = '',
	headers = null,
}) => ({
	type: API,
	payload: {
		url,
		method,
		data,
		onSuccess,
		onFailure,
		label,
		headers,
	},
});
