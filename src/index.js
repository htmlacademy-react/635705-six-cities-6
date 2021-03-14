import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {CITIES, SORT_LIST} from "./const";
import {ActionCreator} from "./store/action";
import {checkAuth} from "./store/api-actions";
import {createAPI, AuthorizationStatus} from "./api";

const initialState = {
  city: CITIES[0],

  authorizationStatus: AuthorizationStatus.NO_AUTH,

  sortOption: SORT_LIST[0],
  activeOfferId: null,

  offers: {
    data: null,
    loading: false,
    error: null
  }
};

const api = createAPI(() =>
  store.dispatch(
      ActionCreator.requiredAuthorization(AuthorizationStatus.NO_AUTH)
  )
);

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
