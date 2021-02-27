import React from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import App from "./components/App";
import {reducer} from './store/reducer';

const Setting = {
  AD_COUNT: 312,
  CITIES: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <App
        adCount={Setting.AD_COUNT}
        cities={Setting.CITIES}
        offers={offers.slice()}
        reviews={reviews.slice()}
      />
    </Provider>,
    document.querySelector(`#root`)
);
