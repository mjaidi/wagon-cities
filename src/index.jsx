import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import '../assets/stylesheets/application.scss';

// For REDUX
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import cityReducer from './reducers/city_reducer';
import activeCityReducer from './reducers/active_city';


// Redux Reducers - For every key in the redux state tree there needs to be a reducer
const reducers = combineReducers({
  cities: cityReducer,
  activeCity: activeCityReducer
});

// REDUX provider wraps around react component to be rendered
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'));
