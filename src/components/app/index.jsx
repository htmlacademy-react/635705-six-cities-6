import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../main-page";
import FavoritesPage from "../favorites-page";
import LoginPage from "../login-page";
import OfferPage from "../offer-page";
import NotFoundPage from "../not-found-page";
import PropTypes from "prop-types";

const App = (adCount, cities) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage adCount={adCount} cities={cities} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
        <Route path="/offer/:id?" exact>
          <OfferPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  adCount: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string),
};

export default App;
