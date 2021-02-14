import React from "react";
import {MAX_RATING} from "../../../const";
import PropTypes from "prop-types";

const Star = ({index, handleRadioChange}) => {
  const serialNumber = MAX_RATING - index;

  return (
    <React.Fragment>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        defaultValue={serialNumber}
        id={`${serialNumber}-stars`}
        type="radio"
        onChange={handleRadioChange}
      />
      <label
        htmlFor={`${serialNumber}-stars`}
        className="reviews__rating-label form__rating-label"
        title="good"
      >
        <svg className="form__star-image" width={37} height={33}>
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </React.Fragment>
  );
};

Star.propTypes = {
  index: PropTypes.number.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

export default Star;
