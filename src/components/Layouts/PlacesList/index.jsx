import React, {useState} from "react";
import PlaceCard from "../PlaceCard";
import classNames from "classnames";
import PropTypes from "prop-types";

const PlacesList = ({pageType, offers}) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={classNames(`places__list`, {
      "favorites__places": pageType === `favorites`,
      "cities__places-list tabs__content": pageType === `main`,
      "near-places__list": pageType === `offer`
    })}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          pageType={pageType}
          offer={offer}
          handleMouseEnter={() => {
            setActiveCard({...activeCard, ...offer});
          }}
          handleMouseOut={() => {
            setActiveCard(null);
          }}
        />
      ))}
    </div>
  );
};

PlacesList.propTypes = {
  pageType: PropTypes.string,
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default PlacesList;
