export const ActionType = {
  SET_CITY: `city/setCity`,
  SET_SORT_OPTION: `sortOption/setSortOption`,
  HOVER_OFFER: `offer/hoverOffer`
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
  })
};
