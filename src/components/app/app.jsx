import React from "react";
import MainPage from "../main-page/main-page";

const App = (props) => {
  const {adCount} = props;

  return (
    <MainPage adCount={adCount} />
  );
};

export default App;
