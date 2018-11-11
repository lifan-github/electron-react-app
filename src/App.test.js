import React from 'react';
import ReactDOM from 'react-dom';
import AppOld2 from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppOld2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
