import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../main-page";
import PropTypes from "prop-types";

const App = (adCount, cities) => {
  return (
    <MainPage adCount={adCount} cities={cities} />
  );
};

App.propTypes = {
  adCount: PropTypes.number.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string)
};

export default App;
