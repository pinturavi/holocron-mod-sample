import React from 'react';
import {cleanup, fireEvent, render, waitFor} from '@testing-library/react';

import App from '../src/App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

afterEach(cleanup)

it(' should call lazy',async () => {
  const {queryByLabelText, getByLabelText,queryByText, container, debug } = render(
    <App />
  );
  const btn = queryByText('click me')
  fireEvent.click(btn);
  await waitFor(() => expect(queryByText('user profile')).toBeTruthy())

});


