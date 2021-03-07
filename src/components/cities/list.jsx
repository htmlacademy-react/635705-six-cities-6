import React from "react";
import PropTypes from "prop-types";
import {mapTypes} from "src/const";
import Map from "src/components/map/map";
import PlaceSort from "src/components/places/sort";
import PlacesList from "src/components/places/places";
import {getSorting} from "src/common";

const CitiesList = ({
  currentCity,
  offers,
  sortOption,
  onHoverOffer,
  activeOfferId,
  onSetSortOption,
}) => {
  const cityOffers = getSorting(
      offers.filter((offer) => offer.city.name === currentCity.name),
      currentCity.name,
      sortOption
  );

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{`${cityOffers.length} places to stay in ${currentCity.name}`}</b>
          <PlaceSort
            onSetSortOption={onSetSortOption}
            sortOption={sortOption}
          />
          <PlacesList
            pageType="main"
            offers={cityOffers}
            onHoverOffer={onHoverOffer}
            activeOfferId={activeOfferId}
          />
        </section>
        <div className="cities__right-section">
          <Map
            offers={cityOffers}
            type={mapTypes.MAIN}
            location={currentCity.location}
            activeOfferId={activeOfferId}
          />
        </div>
      </div>
    </div>
  );
};

CitiesList.propTypes = {
  currentCity: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
  sortOption: PropTypes.object,
  onHoverOffer: PropTypes.func.isRequired,
  activeOfferId: PropTypes.number,
  onSetSortOption: PropTypes.func.isRequired,
};

export default CitiesList;
