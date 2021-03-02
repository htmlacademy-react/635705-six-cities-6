import React from "react";
import PropTypes from "prop-types";
import PlaceSort from "src/components/places/sort";
import PlacesList from "src/components/places/places";

const CitiesPlaces = ({location, offers}) => {
  const cityOffers = [offers.find((offer) => offer.city.name === location)];

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{`${cityOffers.length} places to stay in ${location}`}</b>
      <PlaceSort />
      <PlacesList pageType="main" offers={cityOffers} />
    </section>
  );
};

CitiesPlaces.propTypes = {
  location: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default CitiesPlaces;
