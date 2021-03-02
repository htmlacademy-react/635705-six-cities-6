import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {LOCATIONS} from "src/const";

const LocationsTabs = ({currentLocationName, onLocationClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map((location) => (
        <li key={location} className="locations__item">
          <a
            className={classNames(`locations__item-link tabs__item`, {
              "tabs__item--active": location === currentLocationName,
            })}
            onClick={() => onLocationClick(location)}
            href="#"
          >
            <span>{location}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsTabs.propTypes = {
  currentLocationName: PropTypes.string,
  onLocationClick: PropTypes.func.isRequired,
};

export default LocationsTabs;
