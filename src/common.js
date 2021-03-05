import dayjs from "dayjs";

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

export const getSorting = (offers, city, option) => {
  const defaultState = offers.filter((item) => item.city.name === city);
  switch (option) {
    case `Price: low to high`:
      return defaultState.sort((a, b) => a.price - b.price);
    case `Price: high to low`:
      return defaultState.sort((a, b) => b.price - a.price);
    case `Top rated first`:
      return defaultState.sort((a, b) => b.rating - a.rating);
    default:
      return defaultState;
  }
};
