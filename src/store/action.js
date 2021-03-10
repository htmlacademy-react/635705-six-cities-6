export const ActionType = {
  SET_CITY: `city/setCity`,
  SET_SORT_OPTION: `sortOption/setSortOption`,
  HOVER_OFFER: `offer/hoverOffer`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
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
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  })
};
