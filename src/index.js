import React from "react";
import ReactDOM from "react-dom";
import offers from './mocks/offers';
import reviews from './mocks/reviews';
import App from "./components/App";

const Setting = {
  AD_COUNT: 312,
  CITIES: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
  PAGE_TYPES: {
    FAVORITES: `favorites`,
    MAIN: `main`,
    OFFER: `offer`
  }
};

ReactDOM.render(
    <App
      adCount={Setting.AD_COUNT}
      cities={Setting.CITIES}
      offers={offers.slice()}
      reviews={reviews.slice()}
      pageTypes={Setting.PAGE_TYPES}
    />,
    document.querySelector(`#root`)
);
