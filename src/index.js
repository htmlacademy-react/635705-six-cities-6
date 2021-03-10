import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {CITIES, SORT_LIST} from "./const";
import {createAPI} from "./api";
import {ActionCreator} from "./store/action";
import {AuthorizationStatus} from "./const";

const initialState = {
  city: CITIES[0],
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  sortOption: SORT_LIST[0],
  activeOfferId: null,
};

const api = createAPI(() =>
  store.dispatch(
      ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)
  )
);

const store = createStore(reducer, initialState, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
