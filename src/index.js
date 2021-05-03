import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './Container/App.jsx';

import './Container/style.scss'
import { store } from './Redux/store/store';

render( < Provider store = { store } > < BrowserRouter > < App / > < /BrowserRouter> </Provider > , document.getElementById('root'));