import {ActionType} from "./action";

const reducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
