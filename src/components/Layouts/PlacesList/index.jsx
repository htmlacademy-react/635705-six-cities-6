import React, {useState} from "react";
import PlaceCard from "../PlaceCard";
import {usePage} from "../../../hooks/usePage";
import classNames from "classnames";
import PropTypes from "prop-types";

const PlacesList = ({offers}) => {
  const [activeCard, setActiveCard] = useState(null);

  const Page = usePage();

  return (
    <div className={classNames(`places__list`, {
      "favorites__places": Page.isFavorites,
      "cities__places-list tabs__content": Page.isMain,
      "near-places__list": Page.isOffer
    })}>
      {(Page.isOffer ? offers.slice(0, 3) : offers).map((offer) => (
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
