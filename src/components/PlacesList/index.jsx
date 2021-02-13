import React, {useState} from "react";
import PlaceCard from "../PlaceCard";
import {Page} from "../../const";
import PropTypes from "prop-types";

const PlacesList = ({offers}) => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={Page.isFavorites ? `favorites__places` : `cities__places-list places__list tabs__content`}>
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
