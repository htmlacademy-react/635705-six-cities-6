import {ActionType} from "./action";
import {SORT_LIST} from "src/const";

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
        sortOption: SORT_LIST[0],
      };
    case ActionType.SET_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
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
