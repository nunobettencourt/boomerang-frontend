import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

//import all middlewares
import middlewareEnhancer from './middlewares';

/** Import all reducers */
import propertyReducer from './property/reducers';

const rootReducer = combineReducers({
	property: propertyReducer,
});

export default function configureStore(preloadedState) {
	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);

	const store = createStore(rootReducer, preloadedState, composedEnhancers);

	return store;
}
