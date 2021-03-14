export const ActionType = {
  SET_CITY: `city/setCity`,
  SET_SORT_OPTION: `sortOption/setSortOption`,
  HOVER_OFFER: `offer/hoverOffer`,
  OFFERS_REQUEST: `offers/request`,
  OFFERS_SUCCESS: `offers/success`,
  OFFERS_FAILURE: `offers/failure`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
};

const OfferActionCreator = {
  requestOffers: () => ({
    type: ActionType.OFFERS_REQUEST,
  }),
  loadOffersSuccess: (offers) => ({
    type: ActionType.OFFERS_SUCCESS,
    payload: offers
  }),
  loadOffersFailure: (error) => ({
    type: ActionType.OFFERS_FAILURE,
    payload: error
  }),
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city
  }),
  setSortOption: (sortOption) => ({
    type: ActionType.SET_SORT_OPTION,
    payload: sortOption
  }),
  hoverOffer: (id) => ({
    type: ActionType.HOVER_OFFER,
    payload: id
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  ...OfferActionCreator,
};
