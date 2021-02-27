import dayjs from "dayjs";
import offers from './mocks/offers';
import {MAX_RATING} from "./const";

export const getOffersByCity = (cityName) =>
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
  return dayjs(date).format(`YYYY-MM-DD`);
};
