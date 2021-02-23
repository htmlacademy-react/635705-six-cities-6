import React from "react";
import Review from "../Review";
import PropTypes from "prop-types";

const ReviewsList = ({reviewGet}) => {
  return (
    <ul className="reviews__list">
      {reviewGet.map((review) => <Review review={review} key={review.id} />)}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviewGet: PropTypes.arrayOf(PropTypes.object),
};

export default ReviewsList;
