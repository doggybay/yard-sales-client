import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux store
import store from './store'

//Provider component
import { Provider } from 'react-redux'

ReactDOM.render(<App />, document.getElementById('root'));
