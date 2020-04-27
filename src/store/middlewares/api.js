import axios from 'axios';
import { API, API_ROOT_URL } from '../api/types';
import { accessDenied, apiError, apiStart, apiEnd } from '../api/actions';

const api = ({ dispatch, getState }) => (next) => (action) => {
	if (action.type !== API) return next(action);

	const {
		url,
		method,
		data,
		onSuccess,
		onFailure,
		label,
		headers,
	} = action.payload;

	const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';

	// axios default configs
	axios.defaults.baseURL = API_ROOT_URL;

	if (label) {
		dispatch(apiStart(label));
	}

	axios
		.request({
			url,
			method,
			headers,
			[dataOrParams]: data,
		})
		.then((response) => {
			dispatch(onSuccess(response));
		})
		.catch((error) => {
			dispatch(apiError(error));
			dispatch(onFailure(error));

			if (error.response && error.response.status === 403) {
				dispatch(accessDenied(window.location.pathname));
			}
		})
		.finally(() => {
			if (label) {
				dispatch(apiEnd(label));
			}
		});
};

export default api;
