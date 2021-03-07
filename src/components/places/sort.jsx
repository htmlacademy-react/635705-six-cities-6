import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "src/store/action";
import {DEFAULT_SORT} from "src/const";

const SORT_LIST = [
  {
    id: 1,
    title: DEFAULT_SORT,
  },
  {
    id: 2,
    title: `Price: low to high`,
  },
  {
    id: 3,
    title: `Price: high to low`,
  },
  {
    id: 4,
    title: `Top rated first`,
  },
];

const PlaceSort = ({sortOption, onSetSortOption}) => {
  const [isDropDownOpen, setisDropDownOpen] = useState(false);

  const handleClick = (evt, option) => {
    evt.preventDefault();
    if (option !== sortOption) {
      onSetSortOption(option);
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
        {SORT_LIST.map(({id, title}) => (
          <li
            onClick={(evt) => handleClick(evt, title)}
            className={classNames(`places__option`, {
              "places__option--active": title === sortOption,
            })}
            key={id}
            tabIndex={0}
          >
            {title}
          </li>
        ))}
      </ul>
    </form>
  );
};

PlaceSort.propTypes = {
  onSetSortOption: PropTypes.func.isRequired,
  sortOption: PropTypes.string.isRequired,
};

const mapStateToProps = ({sortOption}) => ({
  sortOption,
});

const mapDispatchToProps = (dispatch) => ({
  onSetSortOption(sortOption) {
    dispatch(ActionCreator.setSortOption(sortOption));
  },
});

export {PlaceSort};
export default connect(mapStateToProps, mapDispatchToProps)(PlaceSort);
