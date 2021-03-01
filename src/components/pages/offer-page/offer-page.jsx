import React from "react";
import PropTypes from "prop-types";

import Header from "src/components/layout/header/header";
import ReviewsList from "src/components/reviews/reviews";
import ReviewsForm from "src/components/reviews/form";
import OfferPropertyContainer from "src/components/offer/offer-container";
import OfferPropertyGallery from "src/components/offer/offer-gallery";
import PlacesList from "src/components/places/places";
import {Housing} from "src/const";
import {getRating} from "src/common";

const OfferPage = ({offers, reviews}) => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--property">
        <section className="property">

          <div className="property__gallery-container container">
            <OfferPropertyGallery images={images} />
          </div>

          <OfferPropertyContainer offer={offers[0]} />

          <section className="property__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlacesList pageType="offer" offers={offers.slice(0, 3)} />
          </section>
        </div>
      </main>
    </div>
  );
};

OfferPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  reviews: PropTypes.arrayOf(PropTypes.object)
};

export default OfferPage;
