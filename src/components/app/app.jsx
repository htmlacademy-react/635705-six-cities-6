import React from "react";
import MainPage from "../main-page/main-page";
import PropTypes from 'prop-types';

const App = (props) => {
  const {adCount} = props;

  return (
    <MainPage adCount={adCount} />
  );
};

App.propTypes = {
  adCount: PropTypes.number.isRequired,
};

export default App;
