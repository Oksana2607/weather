import * as constants from '../constants/constants';
import cities from '../config/config';

export const initialState = {
  city: { city: 'Dnipropetrovsk', id: 1, country: 'ua' },
  cities,
  weather: {},
  citiesWeather: [],
  isLoading: false,
  activeCities: [],
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case constants.WEATHER_REQUEST_SUCCESS:
      return {
        ...state,
        weather: action.payload,
      };
    case constants.TOGGLE_LOADING:
      const _isLoading = !state.isLoading;
      return {
        ...state,
        isLoading: _isLoading,
      };
    case constants.ADD_WEATHER:
      console.log(action.payload);
      return {
        ...state,
        citiesWeather: action.payload,
      };
    default:
      return state;
  }
};
