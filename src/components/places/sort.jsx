import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "src/store/action";
import {DEFAULT_SORT} from "src/const";

const PlaceSort = ({sortOption, onsetSortOption}) => {
  const [isDropDownOpen, setisDropDownOpen] = useState(false);
  const SORT_LIST = [DEFAULT_SORT, `Price: low to high`, `Price: high to low`, `Top rated first`];

  const handleClick = (evt, sortType) => {
    evt.preventDefault();
    if (sortType !== sortOption) {
      onsetSortOption(sortType);
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
        {sortOption}
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
              "places__option--active": item === sortOption,
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
  onsetSortOption: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired
};

const mapStateToProps = ({sortOption}) => ({
  sortOption
});

const mapDispatchToProps = (dispatch) => ({
  onsetSortOption(sortOption) {
    dispatch(ActionCreator.setSortOption(sortOption));
  }
});

export {PlaceSort};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSort);
