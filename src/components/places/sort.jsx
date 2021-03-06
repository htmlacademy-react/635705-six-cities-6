import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "src/store/action";

import {SORT_LIST} from "src/const";

const PlaceSort = ({option, onSetOption}) => {
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const handleClick = (evt, sortType) => {
    evt.preventDefault();
    if (sortType !== option) {
      onSetOption(sortType);
    }
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onMouseEnter={() => setisDropDownOpen(!isDropDownOpen)}
        className="places__sorting-type"
        tabIndex={0}
      >
        {option}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        onMouseLeave={() => setisDropDownOpen(!isDropDownOpen)}
        className={classNames(`places__options places__options--custom`, {
          "places__options--opened": isDropDownOpen,
        })}
      >
        {SORT_LIST.map((item) => (
          <li
            onClick={(evt) => handleClick(evt, item)}
            className={classNames(`places__option`, {
              "places__option--active": item === option,
            })}
            key={item}
            tabIndex={0}
          >
            {item}
          </li>
        ))}
      </ul>
    </form>
  );
};

PlaceSort.propTypes = {
  onSetOption: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired
};

const mapStateToProps = ({option}) => ({
  option
});

const mapDispatchToProps = (dispatch) => ({
  onSetOption(option) {
    dispatch(ActionCreator.setOption(option));
  }
});

export {PlaceSort};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSort);
