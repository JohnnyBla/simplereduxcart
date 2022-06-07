import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from '../src/redux/configureStore'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

