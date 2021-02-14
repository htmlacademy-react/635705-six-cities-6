export const getOffersByCity = (offers, cityName) =>
  offers.filter((offer) => offer.city.name === cityName);
