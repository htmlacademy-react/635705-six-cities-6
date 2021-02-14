import React, {useState} from "react";
import Star from "../Star";
import {MAX_RATING} from "../../const";

const ReviewsForm = () => {
  const [userForm, setUserForm] = useState({
    stars: null,
    review: ``,
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleRadioChange = (evt) => {
    const {defaultValue} = evt.target;
    setUserForm({...userForm, stars: defaultValue});
  };

  const handleTextareaChange = (evt) => {
    const {value} = evt.target;
    setUserForm({...userForm, review: value});
  };

  return (
    <React.Fragment>
      <form
        className="reviews__form form"
        action="#"
        method="post"
        onSubmit={handleSubmit}
      >
        <label className="reviews__label form__label" htmlFor="review">
          Your review
        </label>
        <div className="reviews__rating-form form__rating">
          {Array.from(new Array(MAX_RATING)).map((field, index) => (
            <Star
              key={index}
              index={index}
              handleRadioChange={handleRadioChange}
            />
          ))}
        </div>
        <textarea
          className="reviews__textarea form__textarea"
          id="review"
          name="review"
          placeholder="Tell how was your stay, what you like and what can be improved"
          value={userForm.review}
          onChange={handleTextareaChange}
        />
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set{` `}
            <span className="reviews__star">rating</span> and describe your stay
            with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button
            className="reviews__submit form__submit button"
            type="submit"
            disabled
          >
            Submit
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ReviewsForm;
