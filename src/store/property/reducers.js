import * as types from './types';

const INITIAL_STATE = {};

const propertyReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_PROPERTY:
			const { payload: property } = action;
			return {
				...state,
				property,
			};
		default:
			return state;
	}
};

export default propertyReducer;
