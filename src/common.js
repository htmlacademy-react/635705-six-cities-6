import dayjs from "dayjs";
import {MAX_RATING} from "./const";

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
