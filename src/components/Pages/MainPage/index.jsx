import React from "react";
import Header from "../../Layouts/Header";
import LocationsTabs from "../../Layouts/LocationsTabs";
import Cities from "../../Layouts/Cities";
import CitiesEmpty from "../../Layouts/CitiesEmpty";
import PropTypes from "prop-types";

const MainPage = ({offers}) => {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={`page__main page__main--index ${
          offers.length ? `` : `page__main--index-empty`
        }`}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsTabs />
          </section>
        </div>
        {offers.length ? <Cities /> : <CitiesEmpty />}
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainPage;
