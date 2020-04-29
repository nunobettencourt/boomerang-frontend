import React from 'react';
import { render } from '../../test-utils';
import App from './App';

test('renders an div with App', () => {
	const { container } = render(<App />);
	expect(container).toExist();
});
