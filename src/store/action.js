export const ActionType = {
  UPDATE_CITY: `city/updateCity`,
  UPDATE_OFFERS: `offers/updateoffers`
};

export const ActionCreator = {
  updateCity: (city) => ({
    type: ActionType.UPDATE_CITY,
    payload: city
  }),
  updateOffers: (offers) => ({
    type: ActionType.UPDATE_OFFERS,
    payload: offers
  }),
};
