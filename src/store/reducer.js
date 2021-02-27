import {ActionType} from "./action";
import {LOCATIONS} from "../const";
import {getOffersByCity} from "../common";

const initialState = {
  city: LOCATIONS[0].name,
  rentalOffers: getOffersByCity(LOCATIONS[0].name),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.UPDATE_OFFERS:
      return {
        ...state,
        rentalOffers: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
