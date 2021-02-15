import {MAX_RATING} from "./const";

export const getOffersByCity = (offers, cityName) =>
  offers.filter((offer) => offer.city.name === cityName);

export const getRating = (num) => (num / MAX_RATING) * 100;

export const getMonth = (date) => {
  return new Date(date).toLocaleString(`ru`, {
    month: `long`,
  });
};

export const getYear = (date) => {
  return new Date(date).getFullYear();
};

export const getDate = (date) => {
  const d = new Date(date);
  return `
    ${d.getFullYear()}-${(`0` + (d.getMonth() + 1)).slice(-2)}-${(`0` + d.getDate()).slice(-2)}
  `;
};
