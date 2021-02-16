import PropTypes from "prop-types";

export const MAX_RATING = 5;

export const ImageSize = {
  LARGE: {
    width: 260,
    height: 200
  },
  SMALL: {
    width: 150,
    height: 110
  }
};

export const Housing = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const PROPTYPES = {
  OFFER: PropTypes.shape({
    "bedrooms": PropTypes.number,
    "city": PropTypes.shape({
      "location": PropTypes.objectOf(PropTypes.number),
      "name": PropTypes.string
    }),
    "description": PropTypes.arrayOf(PropTypes.string),
    "goods": PropTypes.arrayOf(PropTypes.string),
    "host": PropTypes.shape({
      "avatar_url": PropTypes.string,
      "id": PropTypes.number.isRequired,
      "is_pro": PropTypes.bool,
      "name": PropTypes.string
    }),
    "id": PropTypes.number.isRequired,
    "images": PropTypes.arrayOf(PropTypes.string),
    "is_favorite": PropTypes.bool,
    "is_premium": PropTypes.bool,
    "location": PropTypes.objectOf(PropTypes.number),
    "max_adults": PropTypes.number,
    "preview_image": PropTypes.string,
    "price": PropTypes.number,
    "rating": PropTypes.number,
    "title": PropTypes.string,
    "type": PropTypes.string
  }),
};