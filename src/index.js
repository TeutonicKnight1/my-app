import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Body from './Body';
import { store } from './reducers/reducers.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Body/>
    </Provider>
  </React.StrictMode>
);
