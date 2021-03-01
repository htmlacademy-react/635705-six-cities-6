import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classNames from "classnames";
import {ActionCreator} from "src/store/action";
import {LOCATIONS} from "src/const";

const LocationsTabs = ({city, onCityClick}) => {
  const handleClick = (evt) => {
    const {textContent} = evt.target;
    onCityClick(textContent);
  };

  return (
    <ul className="locations__list tabs__list">
      {LOCATIONS.map(({name}) => (
        <li key={name} className="locations__item">
          <a
            className={classNames(`locations__item-link tabs__item`, {
              "tabs__item--active": name === city,
            })}
            onClick={handleClick}
            href="#"
          >
            <span>{name}</span>
          </a>
        </li>
      )
      )}
    </ul>
  );
};

LocationsTabs.propTypes = {
  city: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

export {LocationsTabs};
export default connect(mapStateToProps, mapDispatchToProps)(LocationsTabs);
