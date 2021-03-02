import React from "react";
import PropTypes from "prop-types";
import {mapTypes} from "src/const";
import OffersMap from "src/components/map/map";
import CitiesPlaces from "./places";

const Cities = ({location, offers, cityParams}) => {

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CitiesPlaces location={location} offers={offers} />
        <div className="cities__right-section">
          <OffersMap
            place={cityParams}
            offers={offers}
            mapType={mapTypes.MAIN}
          />
        </div>
      </div>
    </div>
  );
};

Cities.propTypes = {
  location: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
  cityParams: PropTypes.object.isRequired,
};

export default Cities;
