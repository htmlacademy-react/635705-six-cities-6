import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import {connect} from "react-redux";
import {ActionCreator} from "src/store/action";
import Header from "src/components/layout/header/header";
import LocationsTabs from "src/components/locations-tabs/locations-tabs";
import Cities from "src/components/cities/cities";
import CitiesEmpty from "src/components/cities/empty";
import {LOCATIONS} from "src/const";


const MainPage = ({location, offers, onLocationClick}) => {
  const cityParams = location.point;
  const cityOffers = [offers.find((offer) => offer.city.name === location.name)];

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={classNames(`page__main page__main--index`, {
          "page__main--index-empty": !offers.length
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsTabs
              locations={LOCATIONS}
              currentLocationName={location.name}
              onLocationClick={onLocationClick}
            />
          </section>
        </div>
        {offers.length ? (
          <Cities
            offers={cityOffers}
            location={location}
            cityParams={cityParams} />
        ) : (
          <CitiesEmpty />
        )}
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
  onLocationClick: PropTypes.func
};

const mapStateToProps = (state) => ({
  location: state.location,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onLocationClick(location) {
    dispatch(ActionCreator.setLocation(location));
  },
});


export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
