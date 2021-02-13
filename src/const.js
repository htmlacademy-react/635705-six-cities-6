const MAX_RATING = 5;

export const Housing = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`
};

export const Page = {
  isFavorites: window.location.pathname === `/favorites`,
  isMain: window.location.pathname === `/`
};

export const getRating = (num) => (num / MAX_RATING) * 100;
