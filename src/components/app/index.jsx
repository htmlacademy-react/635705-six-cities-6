import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../Pages/MainPage";
import FavoritesPage from "../Pages/FavoritesPage";
import LoginPage from "../Pages/LoginPage";
import OfferPage from "../Pages/OfferPage";
import NotFoundPage from "../Pages/NotFoundPage";
import PropTypes from "prop-types";

const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage offers={offers} />
        </Route>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/favorites" exact>
          <FavoritesPage />
        </Route>
        <Route path="/offer/:id?" exact>
          <OfferPage offers={offers} reviews={reviews} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object)
};

export default App;
