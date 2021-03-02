import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const LocationsTabs = ({locations, currentLocationName, onLocationClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {locations.map((location) => (
        <li key={location.name} className="locations__item">
          <a
            className={classNames(`locations__item-link tabs__item`, {
              "tabs__item--active": location.name === currentLocationName,
            })}
            onClick={() => onLocationClick(location)}
            href="#"
          >
            <span>{location.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsTabs.propTypes = {
  currentLocationName: PropTypes.string.isRequired,
  onLocationClick: PropTypes.func.isRequired,
  locations: PropTypes.array.isRequired,
};

export default LocationsTabs;
