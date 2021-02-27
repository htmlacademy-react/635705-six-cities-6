export const MAX_RATING = 5;

export const ImageSize = {
  LARGE: {
    width: 260,
    height: 200,
  },
  SMALL: {
    width: 150,
    height: 110,
  },
};

export const Housing = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

export const LOCATIONS = [
  {
    name: `Paris`,
    point: {
      latitude: 48.86268,
      longitude: 2.33779,
      zoom: 10,
    },
  },
  {
    name: `Cologne`,
    point: {
      latitude: 50.94724,
      longitude: 6.95976,
      zoom: 10,
    },
  },
  {
    name: `Brussels`,
    point: {
      latitude: 50.84889,
      longitude: 4.35136,
      zoom: 10,
    },
  },
  {
    name: `Amsterdam`,
    point: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 10,
    },
  },
  {
    name: `Hamburg`,
    point: {
      latitude: 53.55849,
      longitude: 9.787741,
      zoom: 10,
    },
  },
  {
    name: `Dusseldorf`,
    point: {
      latitude: 51.238371,
      longitude: 6.674269,
      zoom: 10,
    },
  },
];

export const mapTypes = {
  MAIN: `MAIN`,
  PROPERTY: `PROPERTY`,
};

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
