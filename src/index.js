import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app/app";
import {reducer} from "./store/reducer";
import {CITIES, SORT_LIST} from "./const";

const initialState = {
  city: CITIES[0],
  offers,
  reviews,
  sortOption: SORT_LIST[0],
  activeOfferId: null
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
