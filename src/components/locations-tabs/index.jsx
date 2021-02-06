import React from "react";
import PropTypes from "prop-types";

const LocationsTabs = ({cities}) => {

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, key) => (
        <li className="locations__item" key={city + key}>
          <a className={city === `Amsterdam` ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link     tabs__item`} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsTabs.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string)
};

export default LocationsTabs;
