import React, {useEffect} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {connect} from "react-redux";
import {ActionCreator} from "src/store/action";
import Header from "src/components/layout/header/header";
import CitiesTabs from "src/components/cities/tabs";
import CitiesList from "src/components/cities/list";
import CitiesEmpty from "src/components/cities/empty";
import LoadingScreen from "src/components/loading-screen/loading-screen";
import {fetchOffersList} from "src/store/api-actions";

const MainPage = ({city, onCityClick, offers, isDataLoaded, onLoadData, ...props}) => {

  useEffect(() => {
    if (!isDataLoaded) {
      onLoadData();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main
        className={classNames(`page__main page__main--index`, {
          "page__main--index-empty": !offers.length
        })}
      >
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesTabs selectedCity={city} onCityClick={onCityClick} />
          </section>
        </div>
        {offers.length ? (
          <CitiesList selectedCity={city} offers={offers} {...props} />
        ) : (
          <CitiesEmpty />
        )}
      </main>
    </div>
  );
};

MainPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
  city: PropTypes.object,
  onCityClick: PropTypes.func,
  sortOption: PropTypes.object,
  onHoverOffer: PropTypes.func,
  activeOfferId: PropTypes.number,
  onSetSortOption: PropTypes.func,
};

const mapStateToProps = (state) => ({
  city: state.city,
  reviews: state.reviews,
  offers: state.offers,
  sortOption: state.sortOption,
  activeOfferId: state.activeOfferId,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(city) {
    dispatch(ActionCreator.setCity(city));
  },
  onSetSortOption(sortOption) {
    dispatch(ActionCreator.setSortOption(sortOption));
  },
  onHoverOffer(id) {
    dispatch(ActionCreator.hoverOffer(id));
  },
  onLoadData() {
    dispatch(fetchOffersList());
  },
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
