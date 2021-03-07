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
