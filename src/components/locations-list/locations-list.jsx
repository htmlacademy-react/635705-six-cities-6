import React from 'react';
import PropTypes from 'prop-types';

const LocationsList = (props) => {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, i) => (
        <li className="locations__item" key={city + i}>
          <a className={city === `Amsterdam` ? `locations__item-link tabs__item tabs__item--active` : `locations__item-link     tabs__item`} href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

LocationsList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string)
};

export default LocationsList;
