import React from "react";
import ReviewsForm from "../ReviewsForm";
import {getRating, getMonth, getYear, getDate} from "../../../common";
import PropTypes from "prop-types";

const Reviews = ({reviewGet}) => {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviewGet.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewGet.map((review) => {
          const {
            user: {avatar_url: avatarUrl, name},
            rating,
            comment,
            date,
            id
          } = review;

          return (
            <li className="reviews__item" key={id}>
              <div className="reviews__user user">
                <div className="reviews__avatar-wrapper user__avatar-wrapper">
                  <img
                    className="reviews__avatar user__avatar"
                    src={avatarUrl}
                    width={54}
                    height={54}
                    alt="Reviews avatar"
                  />
                </div>
                <span className="reviews__user-name">{name}</span>
              </div>
              <div className="reviews__info">
                <div className="reviews__rating rating">
                  <div className="reviews__stars rating__stars">
                    <span style={{width: `${getRating(rating)}%`}} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                </div>
                <p className="reviews__text">
                  {comment}
                </p>
                <time className="reviews__time" dateTime={getDate(date)}>
                  {`${getMonth(date)} ${getYear(date)}`}
                </time>
              </div>
            </li>
          );
        })}
      </ul>
      <ReviewsForm />
    </section>
  );
};

Reviews.propTypes = {
  reviewGet: PropTypes.arrayOf(PropTypes.object),
};

export default Reviews;