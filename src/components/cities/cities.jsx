import React from "react";
import PropTypes from "prop-types";
import {mapTypes} from "src/const";
import OffersMap from "src/components/map/map";
import CitiesPlaces from "./places";

const Cities = ({city, offers, cityParams}) => {

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <CitiesPlaces city={city} offers={offers} />
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
  city: PropTypes.string,
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default Cities;
