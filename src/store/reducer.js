import {ActionType} from "./action";
import {getSorting} from "src/common";

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.SET_OPTION:
      return {
        ...state,
        option: action.payload,
        currentOffers: getSorting(
            state.offers,
            state.city,
            action.payload
        ),
      };
    default:
      return state;
  }
};

export {reducer};
