import React from "react";
import PropTypes from "prop-types";
import PlaceSort from "src/components/places/sort";
import PlacesList from "src/components/places/places";

const CitiesPlaces = ({location, offers}) => {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${offers.length} places to stay in ${location.name}`}</b>
      <PlaceSort />
      <PlacesList pageType="main" offers={offers} />
    </section>
  );
};

CitiesPlaces.propTypes = {
  location: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default CitiesPlaces;
