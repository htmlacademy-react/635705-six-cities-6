import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {LOCATIONS, mapTypes} from "../../../const";
import CitiesPlaces from "../CitiesPlaces";
import OffersMap from "../OffersMap";

const Cities = ({city, offers}) => {
  const cityParams = LOCATIONS.find(({name}) => name === city).point;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CitiesPlaces />
        <div className="cities__right-section">
          <OffersMap place={cityParams} offers={offers} mapType={mapTypes.MAIN} />
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
});

export {Cities};
export default connect(mapStateToProps)(Cities);
