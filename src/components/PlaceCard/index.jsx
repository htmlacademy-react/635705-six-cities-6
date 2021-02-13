import React from "react";
import Mark from "../Mark";
import {getRating, Housing, Page} from "../../const";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const PlaceCard = ({offer, handleMouseEnter, handleMouseOut}) => {
  const {
    is_premium: isPremium,
    preview_image: previewImage,
    price,
    is_favorite: isFavorite,
    rating,
    title,
    type,
  } = offer;

  return (
    <article
      className={`${Page.isFavorites ? `favorites__card` : `cities__place-card`} place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseOut}
    >
      {Page.isMain && isPremium && <Mark />}
      <div className={`${Page.isFavorites ? `favorites__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={Page.isFavorites ? 150 : 260}
            height={Page.isFavorites ? 110 : 200}
            alt={Housing[type]}
          />
        </a>
      </div>
      <div className={`${Page.isFavorites && `favorites__card-info `}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">
              /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite && `place-card__bookmark-button--active`}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/:${offer.id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{Housing[type]}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    "bedrooms": PropTypes.number,
    "city": PropTypes.shape({
      "location": PropTypes.objectOf(PropTypes.number),
      "name": PropTypes.string
    }),
    "description": PropTypes.string,
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
  handleMouseEnter: PropTypes.func,
  handleMouseOut: PropTypes.func
};

export default PlaceCard;
