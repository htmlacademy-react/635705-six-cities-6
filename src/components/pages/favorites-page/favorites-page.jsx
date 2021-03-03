import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Header from "src/components/layout/header/header";
import Footer from "src/components/layout/footer/footer";
import PlacesList from "src/components/places/places";

const FavoritesPage = ({offers}) => {
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <PlacesList
                  pageType="favorites"
                  offers={offers.filter(
                      (offer) => offer.city.name === `Amsterdam`
                  )}
                />
              </li>
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <PlacesList
                  pageType="favorites"
                  offers={offers.filter(
                      (offer) => offer.city.name === `Cologne`
                  )}
                />
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {FavoritesPage};
export default connect(mapStateToProps)(FavoritesPage);
