import React from "react";
import PropTypes from "prop-types";
import PlaceSort from "src/components/places/sort";
import PlacesList from "src/components/places/places";

const CitiesPlaces = ({city, offers}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${city}`}</b>
      <PlaceSort />
      <PlacesList pageType="main" offers={offers} />
    </section>
  );
};

CitiesPlaces.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default CitiesPlaces;
