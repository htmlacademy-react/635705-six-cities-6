import React from "react";
import PlaceSort from "../PlacesList";
import PlacesList from "../PlacesList";
import {connect} from "react-redux";
import PropTypes from "prop-types";

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

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export {CitiesPlaces};
export default connect(mapStateToProps)(CitiesPlaces);
