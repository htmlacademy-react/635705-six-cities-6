import React, {useEffect, useRef} from "react";
import {PropTypes} from "prop-types";
import leaflet from "leaflet";

import "leaflet/dist/leaflet.css";

export const mapTypesParams = {
  MAIN: {
    mixClass: `cities__map`,
    height: 736,
  },
  PROPERTY: {
    mixClass: `property__map`,
    height: 579,
  },
};

const OffersMap = ({place, offers, mapType}) => {
  const mapRef = useRef();

  useEffect(() => {
    mapRef.current = leaflet.map(`map`, {
      center: {
        lat: place.latitude,
        lng: place.longitude,
      },
      zoom: place.zoom,
    });

    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
          }
      )
      .addTo(mapRef.current);

    offers.forEach((point) => {
      const customIcon = leaflet.icon({
        iconUrl: `./img/pin.svg`,
        iconSize: [30, 30],
      });

      leaflet
        .marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon: customIcon,
            }
        )
        .addTo(mapRef.current)
        .bindPopup(point.title);
    });

    return () => {
      mapRef.current.remove();
    };
  }, [place, offers]);

  return (
    <section className={`${mapTypesParams[mapType].mixClass || ``} map`}>
      <div
        id="map"
        style={{height: `${mapTypesParams[mapType].height}px`}}
        ref={mapRef}
      ></div>
    </section>
  );
};

OffersMap.propTypes = {
  place: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }).isRequired,
  offers: PropTypes.arrayOf(PropTypes.object),
  mapType: PropTypes.oneOf([`MAIN`, `PROPERTY`]).isRequired,
};

export default OffersMap;
