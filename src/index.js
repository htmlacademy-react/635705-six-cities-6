import React from "react";
import ReactDOM from "react-dom";
import offers from './mocks/offers';
import reviewGet from './mocks/reviewGet';
import App from "./components/App";

const Setting = {
  AD_COUNT: 312,
  CITIES: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]
};

ReactDOM.render(
    <App
      adCount={Setting.AD_COUNT}
      cities={Setting.CITIES}
      offers={offers.slice()}
      reviewGet={reviewGet.slice()}
    />,
    document.querySelector(`#root`)
);
