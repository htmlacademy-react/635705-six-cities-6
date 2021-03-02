import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import App from "./components/app/app";
import {reducer} from './store/reducer';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const initialState = {
  location: `Paris`,
  locationCoord: {
    latitude: 48.86268,
    longitude: 2.33779,
    zoom: 10,
  },
  offers,
  reviews,
};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
