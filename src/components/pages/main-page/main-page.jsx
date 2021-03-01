import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "src/components/layout/header/header";
import LocationsTabs from "src/components/locations-tabs/locations-tabs";
import Cities from "src/components/cities/cities";
import CitiesEmpty from "src/components/cities/empty";
import {LOCATIONS} from "src/const";

const MainPage = ({city = LOCATIONS[0].name, offers}) => {
  const cityParams = LOCATIONS[0].name.point;
  const cityOffers = offers.find((offer) => offer.city.name === city);

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
        {offers.length && cityParams && cityOffers ? (
          <Cities cityParams={cityParams} city={city} offers={cityOffers} />
        ) : (
          <CitiesEmpty />
        )}
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  city: state.sity,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
