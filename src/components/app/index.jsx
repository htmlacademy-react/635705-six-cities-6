import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../MainPage";
import FavoritesPage from "../FavoritesPage";
import LoginPage from "../LoginPage";
import OfferPage from "../OfferPage";
import NotFoundPage from "../NotFoundPage";
import PropTypes from "prop-types";

const App = ({adCount, cities, offers, reviewGet}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage adCount={adCount} cities={cities} offers={offers} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage offers={offers} />
        </Route>
        <Route path="/offer/:id?" exact>
          <OfferPage offers={offers} reviewGet={reviewGet} />
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
  offers: PropTypes.arrayOf(PropTypes.object),
  reviewGet: PropTypes.arrayOf(PropTypes.object)
};

export default App;
