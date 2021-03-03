import {ActionType} from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
