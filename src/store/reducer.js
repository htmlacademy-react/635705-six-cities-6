import {ActionType} from "./action";
import {getSorting} from "src/common";
import {DEFAULT_SORT} from "src/const";

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
        currentOffers: getSorting(state.offers, action.payload),
        sortOption: DEFAULT_SORT
      };
    case ActionType.SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
        currentOffers: getSorting(state.offers, state.city, action.payload),
      };
    case ActionType.HOVER_OFFER:
      return {
        ...state,
        activeOfferId: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
