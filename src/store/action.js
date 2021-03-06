export const ActionType = {
  SET_CITY: `city/setCity`,
  SET_OPTION: `option/setOption`,
  HOVER_OFFER: `offer/hoverOffer`
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city
  }),
  setOption: (option) => ({
    type: ActionType.SET_OPTION,
    payload: option
  }),
  hoverOffer: (id) => ({
    type: ActionType.HOVER_OFFER,
    payload: id
  })
};
