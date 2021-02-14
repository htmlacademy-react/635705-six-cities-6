import React, {useState} from "react";
import PlaceCard from "../PlaceCard";
import {Page} from "../../const";
import PropTypes from "prop-types";

const PlacesList = ({offers}) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={`
      ${Page.isFavorites && `favorites__places`}
      ${Page.isMain && `cities__places-list tabs__content`}
      ${Page.isOffer && `near-places__list`} places__list
    `}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
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
  offers: PropTypes.arrayOf(PropTypes.object),
};

export default PlacesList;
