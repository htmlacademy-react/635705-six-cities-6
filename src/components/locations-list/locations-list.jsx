import React from 'react';

const LocationsList = (props) => {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <li className="locations__item">
          <a className={city === 'Amsterdam' 
            ? 'locations__item-link tabs__item tabs__item--active' 
            : 'locations__item-link tabs__item'
          } href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LocationsList;
