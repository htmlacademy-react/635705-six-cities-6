export const ActionType = {
  SET_LOCATION: `locations/setLocation`,
};

export const ActionCreator = {
  setLocation: (location) => ({
    type: ActionType.SET_LOCATION,
    payload: location
  }),
};
