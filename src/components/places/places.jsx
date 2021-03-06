import React, {useState} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from 'react-redux';
import {ActionCreator} from "../../store/action";
import PlaceCard from "./card";

const PlacesList = ({pageType, offers, onHoverOffer, activeOfferId}) => {

  const changeOffer = (evt, id) => {
    evt.preventDefault();
    if (id !== activeOfferId) {
      onHoverOffer(id);
    }
  };

  const [activeCard, setActiveCard] = useState(null);

  return (
    <div className={classNames(`places__list`, {
      "favorites__places": pageType === `favorites`,
      "cities__places-list": pageType === `main`,
      "tabs__content": pageType === `main`,
      "near-places__list": pageType === `offer`
    })}>
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          pageType={pageType}
          offer={offer}
          handleMouseEnter={(evt) => {
            setActiveCard({...activeCard, ...offer});
            changeOffer(evt, evt.currentTarget.id);
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
  onHoverOffer: PropTypes.func.isRequired,
  activeOfferId: PropTypes.string
};

const mapStateToProps = ({activeOfferId}) => ({activeOfferId});

const mapDispatchToProps = (dispatch) => ({
  onHoverOffer(id) {
    dispatch(ActionCreator.hoverOffer(id));
  }
});

export {PlacesList};
export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);

