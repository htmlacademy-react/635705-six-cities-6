import React from 'react';

const OfferPropertyContainer = ({offer}) => {
  const {
    is_premium: isPremium,
    images,
    title,
    rating,
    type,
    bedrooms,
    max_adults: maxAdults,
    price,
    goods,
    host: {name, avatar_url: avatarUrl},
    description,
  } = offer;

  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {isPremium && (
          <div className="property__mark">
            <span>Premium</span>
          </div>
        )}
        <div className="property__name-wrapper">
          <h1 className="property__name">{title}</h1>
          <button
            className="property__bookmark-button button"
            type="button"
          >
            <svg
              className="property__bookmark-icon"
              width={31}
              height={33}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: `${getRating(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">
            {rating}
          </span>
        </div>
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            {Housing[type]}
          </li>
          <li className="property__feature property__feature--bedrooms">
            {bedrooms} Bedrooms
          </li>
          <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">€{price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {goods.map((service, index) => (
              <li className="property__inside-item" key={index}>
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <div className="property__host-user user">
            <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
              <img
                className="property__avatar user__avatar"
                src={avatarUrl}
                width={74}
                height={74}
                alt="Host avatar"
              />
            </div>
            <span className="property__user-name">{name}</span>
          </div>
          <div className="property__description">
            {description.map((text, index) => (
              <p className="property__text" key={index}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <section className="property__reviews reviews">
          <h2 className="reviews__title">
              Reviews · <span className="reviews__amount">{reviews.length}</span>
          </h2>
          <ReviewsList reviews={reviews} />
          <ReviewsForm />
        </section>

      </div>
    </div>
  );
};

export default OfferPropertyContainer;
